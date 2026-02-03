
import os
import json
import re
from openai import OpenAI

# Initialize the client
# Expects OPENAI_API_KEY to be set in environment variables
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

GAME_DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'game_data.js')

def load_existing_ids():
    """Reads the current JS file to find the highest ID used."""
    try:
        with open(GAME_DATA_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
            # Simple regex to find all "id: X"
            ids = re.findall(r'id:\s*(\d+)', content)
            if ids:
                return max(map(int, ids))
            return 0
    except FileNotFoundError:
        return 0

def generate_new_games(start_id, count=5):
    """Generates new games using OpenAI."""
    
    prompt = f"""
    Genera {count} nuovi livelli per un gioco di associazioni di parole simile al gioco finale del gioco televisivo L'Eredità (stile "La Ghigliottina").
    
    Ogni livello deve avere:
    - Una 'solution': La parola che collega tutti gli indizi.
    - Una 'explanation': Una breve frase che spiega i collegamenti.
    - 5 'pairs': Ogni coppia ha 2 opzioni e 1 risposta corretta che si lega alla soluzione.
    
    FORMATO OUTPUT JSON STRETTO:
    [
      {{
        "solution": "PAROLA",
        "explanation": "Spiegazione qui...",
        "pairs": [
          {{ "options": ["ERRATA", "GIUSTA"], "correct": "GIUSTA" }},
          ... (5 coppie totali)
        ]
      }}
    ]
    
    Usa parole stimolanti ma non impossibili. Lingua: ITALIANO.
    Assicurati che il JSON sia valido. Non usare blocchi markdown.
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4o",  # or gpt-3.5-turbo
            messages=[
                {"role": "system", "content": "Sei un creativo autore di giochi di parole per il gioco italiano 'Word Connection'."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
        )
        
        content = response.choices[0].message.content.strip()
        # Clean up if the model put markdown backticks
        if content.startswith("```"):
            content = content.replace("```json", "").replace("```", "")
            
        new_games = json.loads(content)
        
        # Add IDs
        current_id = start_id
        for game in new_games:
            current_id += 1
            game['id'] = current_id
            
        return new_games
        
    except Exception as e:
        print(f"Error generating content: {e}")
        return []

def append_to_file(new_games):
    """Appends the new games to the valid JS file."""
    if not new_games:
        return

    with open(GAME_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to insert before the closing ]; 
    # This is a bit fragile with regex, but works if format is standard.
    # We look for the last closing brace '}' and insert after it, adding a comma if needed.
    
    # Format the new games as JS object strings
    new_entries_str = ""
    for game in new_games:
        json_str = json.dumps(game, indent=8, ensure_ascii=False)
        # Convert JSON "key" to JS key (optional, but matches existing style)
        # For simplicity, we can keep quotes on keys, JS allows it.
        # But let's try to match the style loosely or just dump JSON.
        # existing file uses keys without quotes. let's just dump valid JSON objects.
        # To make it essentially valid JS, we just drop it in.
        
        new_entries_str += "    " + json_str + ",\n"

    # Find the insertion point: the last closing bracket inside the array
    # We assume the file ends with "];" or "]"
    insertion_point = content.rfind(']')
    
    if insertion_point != -1:
        # Check if we need a comma before the new entries
        # If the character before ] (ignoring whitespace) is not a comma, might strictly need one
        # but the JSON dump logic above usually suffices.
        
        # Actually, let's just insert
        new_content = content[:insertion_point] + ",\n" + new_entries_str + content[insertion_point:]
        
        # Fix potential double commas if existing ended with comma
        # or simplified: just insert. JS handles trailing commas fine usually.
        
        with open(GAME_DATA_PATH, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully added {len(new_games)} new games.")
    else:
        print("Could not find the end of the array in game_data.js")

if __name__ == "__main__":
    start_id = load_existing_ids()
    print(f"Current max ID: {start_id}. Generating 5 new games...")
    new_data = generate_new_games(start_id, 5)
    if new_data:
        append_to_file(new_data)
