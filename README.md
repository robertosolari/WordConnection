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
- **Telegram Web App API**: Integrazione nativa per l'espansione a tutto schermo su Telegram.

## 📝 Personalizzazione

I dati del gioco (parole, soluzioni, spiegazioni) sono contenuti nel file `game_data.js`. Puoi aggiungere facilmente nuovi livelli seguendo il formato JSON esistente.
