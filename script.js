class Game {
    constructor() {
        this.score = 0;
        this.currentRound = 0;
        this.maxRounds = 5;
        this.currentGame = null;
        this.collectedClues = [];
        this.timer = null;
        this.timeLeft = 60;

        // DOM Elements
        this.elScore = document.getElementById('prize-value');
        this.elIntro = document.getElementById('intro-screen');
        this.elPairs = document.getElementById('pairs-phase');
        this.elFinal = document.getElementById('final-phase');
        this.elResult = document.getElementById('result-screen');

        this.btnOption1 = document.getElementById('option-1');
        this.btnOption2 = document.getElementById('option-2');
        this.elClues = document.getElementById('clues-container');
        this.elFinalClues = document.getElementById('final-clues');
        this.elCountdown = document.getElementById('countdown');
        this.inpFinal = document.getElementById('final-input');
        this.btnSubmit = document.getElementById('submit-btn');

        // Bind Events
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.resetGame());
        this.btnOption1.addEventListener('click', () => this.handlePairChoice(0));
        this.btnOption2.addEventListener('click', () => this.handlePairChoice(1));
        this.btnSubmit.addEventListener('click', () => this.handleFinalSubmit());

        // Enter key for final input
        this.inpFinal.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleFinalSubmit();
        });

        this.initTelegram();
    }

    initTelegram() {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
    }

    startGame() {
        // Pick a random game
        const randomIndex = Math.floor(Math.random() * GAMES_DB.length);
        this.currentGame = GAMES_DB[randomIndex];

        this.score = 0;
        this.currentRound = 0;
        this.collectedClues = [];
        this.updateScoreDisplay();

        this.switchSection(this.elIntro, this.elPairs);
        this.loadRound();
    }

    resetGame() {
        this.switchSection(this.elResult, this.elIntro);
    }

    switchSection(from, to) {
        from.classList.remove('active');
        // Small delay to allow CSS opacity transition if we were doing it elaborately, 
        // but for now simple class toggle with timeout for 'display:none' handling
        setTimeout(() => {
            from.classList.add('hidden');
            to.classList.remove('hidden');
            // Trigger reflow
            void to.offsetWidth;
            to.classList.add('active');
        }, 300);
    }

    updateScoreDisplay() {
        this.elScore.textContent = this.score;
    }

    loadRound() {
        if (this.currentRound >= this.maxRounds) {
            this.startFinalPhase();
            return;
        }

        const roundData = this.currentGame.pairs[this.currentRound];
        // Randomize button positions to avoid "left is always correct" patterns
        // But keep track of which is which
        this.currentPair = roundData;

        // Randomize display order
        const showOrder = Math.random() < 0.5 ? [0, 1] : [1, 0];

        this.btnOption1.textContent = roundData.options[showOrder[0]];
        this.btnOption1.dataset.word = roundData.options[showOrder[0]];

        this.btnOption2.textContent = roundData.options[showOrder[1]];
        this.btnOption2.dataset.word = roundData.options[showOrder[1]];
    }

    handlePairChoice(btnIndex) {
        const selectedBtn = btnIndex === 0 ? this.btnOption1 : this.btnOption2;
        const selectedWord = selectedBtn.dataset.word;
        const correctWord = this.currentPair.correct;

        if (selectedWord !== correctWord) {
            // Wrong choice - just shake, no score increase
            this.shakeElement(this.elScore.parentElement);
        } else {
            // Correct choice
            this.score += 100;
            this.updateScoreDisplay();
        }

        // Always accumulate the correct clue for display
        this.collectedClues.push(correctWord);
        this.updateCluesList();

        this.currentRound++;
        this.loadRound();
    }

    updateCluesList() {
        // Show just the last added clue or all? typically just accumulating list
        this.elClues.innerHTML = '';
        this.collectedClues.forEach(clue => {
            const div = document.createElement('div');
            div.className = 'clue-item';
            div.textContent = clue;
            this.elClues.appendChild(div);
        });
    }

    shakeElement(el) {
        el.classList.add('shake');
        setTimeout(() => el.classList.remove('shake'), 400);
    }

    startFinalPhase() {
        this.switchSection(this.elPairs, this.elFinal);

        // Populate final clues
        this.elFinalClues.innerHTML = '';
        this.collectedClues.forEach(clue => {
            const div = document.createElement('div');
            div.className = 'final-clue-card';
            div.textContent = clue;
            this.elFinalClues.appendChild(div);
        });

        this.timeLeft = 60;
        this.elCountdown.textContent = this.timeLeft;
        this.inpFinal.value = '';
        this.inpFinal.focus();

        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.elCountdown.textContent = this.timeLeft;
            if (this.timeLeft <= 0) {
                this.handleFinalResult(false);
            }
        }, 1000);
    }

    handleFinalSubmit() {
        const userWord = this.inpFinal.value.trim().toUpperCase();
        if (!userWord) return;

        const isCorrect = userWord === this.currentGame.solution.toUpperCase();
        this.handleFinalResult(isCorrect);
    }

    handleFinalResult(win) {
        clearInterval(this.timer);

        if (!win) {
            document.getElementById('result-title').textContent = "PECCATO!";
            document.getElementById('result-message').textContent = `Hai totalizzato ${this.score} punti.`;
        } else {
            this.score += 500;
            this.updateScoreDisplay();
            document.getElementById('result-title').textContent = "GRANDIOSO!";
            document.getElementById('result-message').textContent = `Hai vinto con ${this.score} punti!`;
        }

        document.getElementById('correct-word').textContent = this.currentGame.solution;
        document.getElementById('explanation-text').textContent = this.currentGame.explanation;

        this.switchSection(this.elFinal, this.elResult);
    }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    new Game();
});
