# Word Connection

**Word Connection** è un gioco di logica e associazioni di parole, ispirato al famoso gioco televisivo "La Ghigliottina". L'obiettivo è trovare la parola che lega insieme una serie di indizi.

Questa versione è ottimizzata per essere giocata sia su browser desktop/mobile che come **Telegram Web App**.

**Live demo:** https://wordsconnection.netlify.app

## 🎮 Come si gioca

Il gioco si divide in due fasi:

### 1. Fase delle Coppie
Ti vengono proposte 5 coppie di parole. Per ogni coppia:
- Devi indovinare quale delle due parole è l'indizio corretto.
- **Risposta corretta**: Guadagni **+100 punti** e ottieni l'indizio.
- **Risposta errata**: Non guadagni punti, ma ottieni comunque l'indizio per la fase finale.

### 2. Fase Finale ("L'ultima parola")
Hai **60 secondi** di tempo.
- Ti vengono mostrati i 5 indizi raccolti durante la partita.
- Devi scrivere la parola che li collega tutti.
- **Vittoria**: Se indovini, ottieni un **bonus di +500 punti**.

## 🚀 Installazione e Avvio

### Locale
Basta aprire il file `index.html` con un qualsiasi browser moderno (Chrome, Edge, Firefox, Safari).

### Telegram Web App
Per trasformare questo gioco in una Mini App di Telegram:

1.  **Hosting**: Carica tutti i file del progetto (`index.html`, `style.css`, `script.js`, `game_data.js`) su un servizio di hosting che supporti **HTTPS** (obbligatorio per Telegram).
    *   Esempi gratuiti: *GitHub Pages*, *Netlify*, *Vercel*.
2.  **BotFather**:
    *   Apri Telegram e cerca **@BotFather**.
    *   Crea un nuovo bot con `/newbot` (se non ne hai già uno).
    *   Usa il comando `/newapp`.
    *   Seleziona il bot.
    *   Inserisci titolo e descrizione.
    *   Quando richiesto, incolla l'**URL HTTPS** dove hai caricato il gioco.
    *   Scegli un "short name" per l'app.
3.  **Gioca**: Condividi il link generato da BotFather o apri il menu del tuo bot per avviare il gioco direttamente in chat!

## 🛠️ Tecnologie

- **HTML5 & CSS3**: Design responsive e animazioni fluide.
- **JavaScript (Vanilla)**: Logica di gioco leggera e veloce.
- **Python**: Script per la generazione automatica dei contenuti.
- **OpenAI API**: Intelligenza artificiale per creare nuovi livelli di gioco.
- **GitHub Actions**: Pipeline CI/CD per eseguire quotidianamente lo script di generazione contenuti.
- **Telegram Web App API**: Integrazione nativa per l'espansione a tutto schermo su Telegram.

## ✨ Funzionalità Recenti

- **Generazione Automatica Contenuti**: Un workflow di GitHub Actions esegue ogni giorno uno script Python che utilizza OpenAI per generare 5 nuove coppie di parole e la sfida finale, mantenendo il gioco sempre fresco.
- **Sistema di Punteggio**: Un sistema di scoring dinamico sostituisce il vecchio meccanismo a premi.
- **Footer Credits**: Riferimenti e contatti nel footer.

## 🤝 Cloning e Riuso

Sentiti libero di forkare questo repository per creare la tua versione! Ti chiedo solo gentilmente di:
1.  **Mantenere i riferimenti** all'autore originale (Roberto Solari) nel footer o nei credits.
2.  **Configurare le tue API Key**:
    -   Dovrai impostare la tua `OPENAI_API_KEY` nei secrets del repository GitHub per far funzionare la generazione automatica.
    -   Se desideri il tracciamento, sostituisci l'ID di **Google Analytics** nel file `index.html` con il tuo.

## 📝 Personalizzazione

I dati del gioco (parole, soluzioni, spiegazioni) sono contenuti nel file `game_data.js`. La generazione automatica aggiorna questo file, ma puoi sempre modificarlo manualmente seguendo il formato JSON esistente.
