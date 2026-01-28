const GAMES_DB = [
    {
        id: 1,
        solution: "CASA",
        explanation: "Dolce CASA. CASA di carta. CASA Bianca. CASA di riposo. Fare gli onori di CASA.",
        pairs: [
            { options: ["DOLCE", "AMARO"], correct: "DOLCE" },
            { options: ["FORBICE", "CARTA"], correct: "CARTA" },
            { options: ["BIANCA", "ROSSA"], correct: "BIANCA" },
            { options: ["RIPOSO", "LAVORO"], correct: "RIPOSO" },
            { options: ["ONORI", "GLORIA"], correct: "ONORI" }
        ]
    },
    {
        id: 2,
        solution: "GATTO",
        explanation: "GATTO delle nevi. GATTO nero. C'era una volta un GATTO (canzone). GATTO Silvestro. Quattro salti in padella (Gatto?). No, wait. Quattro Gatti.",
        pairs: [
            { options: ["NEVI", "PIOGGIA"], correct: "NEVI" },
            { options: ["NERO", "BIANCO"], correct: "NERO" },
            { options: ["VOLTA", "CANTINA"], correct: "VOLTA" },
            { options: ["TWEETY", "SILVESTRO"], correct: "SILVESTRO" },
            { options: ["TRE", "QUATTRO"], correct: "QUATTRO" }
        ]
    },
    {
        id: 3,
        solution: "TEMPO",
        explanation: "Primo TEMPO. Perdere TEMPO. Che TEMPO fa. TEMPO libero. Il TEMPO delle mele.",
        pairs: [
            { options: ["PRIMO", "ULTIMO"], correct: "PRIMO" },
            { options: ["PERDERE", "TROVARE"], correct: "PERDERE" },
            { options: ["FA", "DICI"], correct: "FA" },
            { options: ["OCCUPATO", "LIBERO"], correct: "LIBERO" },
            { options: ["PERE", "MELE"], correct: "MELE" }
        ]
    },
    {
        id: 4,
        solution: "MARE",
        explanation: "Mal di MARE. Frutti di MARE. Lupo di MARE. Porto di MARE. Gente di MARE.",
        pairs: [
            { options: ["BENE", "MAL"], correct: "MAL" },
            { options: ["ALBERI", "FRUTTI"], correct: "FRUTTI" },
            { options: ["CANE", "LUPO"], correct: "LUPO" },
            { options: ["AEROPORTO", "PORTO"], correct: "PORTO" },
            { options: ["GENTE", "ANIMALI"], correct: "GENTE" }
        ]
    },
    {
        id: 5,
        solution: "OCCHIO",
        explanation: "OCCHIO per OCCHIO. Colpo d'OCCHIO. A OCCHIO e croce. Chiudere un OCCHIO. OCCHIO di bue.",
        pairs: [
            { options: ["DENTE", "ORECCHIO"], correct: "DENTE" },
            { options: ["COLPO", "SPARO"], correct: "COLPO" },
            { options: ["CROCE", "TESTA"], correct: "CROCE" },
            { options: ["CHIUDERE", "APRIRE"], correct: "CHIUDERE" },
            { options: ["BUE", "ASINO"], correct: "BUE" }
        ]
    },
    {
        id: 6,
        solution: "PUNTO",
        explanation: "PUNTO e a capo. PUNTO di vista. PUNTO interrogativo. PUNTO dolente. PUNTO G.",
        pairs: [
            { options: ["CAPO", "CODA"], correct: "CAPO" },
            { options: ["UDITO", "VISTA"], correct: "VISTA" },
            { options: ["INTERROGATIVO", "ESCLAMATIVO"], correct: "INTERROGATIVO" },
            { options: ["DOLENTE", "FELICE"], correct: "DOLENTE" },
            { options: ["G", "H"], correct: "G" }
        ]
    },
    {
        id: 7,
        solution: "ROSSO",
        explanation: "Cappuccetto ROSSO. Profondo ROSSO. ROSSO di sera. ROSSO di vergogna. Cartellino ROSSO.",
        pairs: [
            { options: ["CAPPOTTO", "CAPPUCCETTO"], correct: "CAPPUCCETTO" },
            { options: ["ALTO", "PROFONDO"], correct: "PROFONDO" },
            { options: ["MATTINA", "SERA"], correct: "SERA" },
            { options: ["PAURA", "VERGOGNA"], correct: "VERGOGNA" },
            { options: ["CARTELLINO", "BIGLIETTO"], correct: "CARTELLINO" }
        ]
    },
    {
        id: 8,
        solution: "MANO",
        explanation: "Darsi una MANO. Di seconda MANO. Gioco di MANO. MANO morta. Fuori MANO.",
        pairs: [
            { options: ["PRENDERSI", "DARSI"], correct: "DARSI" },
            { options: ["PRIMA", "SECONDA"], correct: "SECONDA" },
            { options: ["GIOCO", "SCHERZO"], correct: "GIOCO" },
            { options: ["VIVA", "MORTA"], correct: "MORTA" },
            { options: ["DENTRO", "FUORI"], correct: "FUORI" }
        ]
    },
    {
        id: 9,
        solution: "FERRO",
        explanation: "FERRO di cavallo. FERRO da stiro. Ferri da MAGLIA. Battere il FERRO. Toccata di FERRO.",
        pairs: [
            { options: ["CAVALLO", "MULO"], correct: "CAVALLO" },
            { options: ["LAVAGGIO", "STIRO"], correct: "STIRO" },
            { options: ["UNCINETTO", "MAGLIA"], correct: "MAGLIA" },
            { options: ["BATTERE", "LUCIDARE"], correct: "BATTERE" },
            { options: ["TOCCATA", "FUGA"], correct: "TOCCATA" }
        ]
    },
    {
        id: 10,
        solution: "CAMPO",
        explanation: "CAMPO da calcio. CAMPO Santo. CAMPO di grano. CAMPO minato. CAMPO visivo.",
        pairs: [
            { options: ["CALCIO", "TENNIS"], correct: "CALCIO" },
            { options: ["BEATO", "SANTO"], correct: "SANTO" },
            { options: ["GRANO", "RISO"], correct: "GRANO" },
            { options: ["FIORITO", "MINATO"], correct: "MINATO" },
            { options: ["VISIVO", "UDITIVO"], correct: "VISIVO" }
        ]
    },
    {
        id: 11,
        solution: "VITA",
        explanation: "Dolce VITA. VITA da cani. Dare la VITA. VITA spericolata. Bella VITA.",
        pairs: [
            { options: ["DOLCE", "AMARA"], correct: "DOLCE" },
            { options: ["CANI", "GATTI"], correct: "CANI" },
            { options: ["DARE", "PRENDERE"], correct: "DARE" },
            { options: ["SPERICOLATA", "TRANQUILLA"], correct: "SPERICOLATA" },
            { options: ["BELLA", "BRUTTA"], correct: "BELLA" }
        ]
    },
    {
        id: 12,
        solution: "LUCE",
        explanation: "LUCE dei miei occhi. LUCE rossa. LUCE verde. Dare alla LUCE. LUCE del sole.",
        pairs: [
            { options: ["OCCHI", "ORECCHIE"], correct: "OCCHI" },
            { options: ["ROSSA", "BLU"], correct: "ROSSA" },
            { options: ["VERDE", "GIALLA"], correct: "VERDE" },
            { options: ["PARTORIRE", "DARE"], correct: "DARE" },
            { options: ["SOLE", "LUNA"], correct: "SOLE" }
        ]
    },
    {
        id: 13,
        solution: "CARTA",
        explanation: "CARTA igienica. CARTA da parati. CARTA straccia. CARTA bianca. CARTA di credito.",
        pairs: [
            { options: ["IGIENICA", "PUBLICA"], correct: "IGIENICA" },
            { options: ["PARATI", "MURI"], correct: "PARATI" },
            { options: ["STRACCIA", "NUOVA"], correct: "STRACCIA" },
            { options: ["BIANCA", "NERA"], correct: "BIANCA" },
            { options: ["CREDITO", "DEBITO"], correct: "CREDITO" }
        ]
    },
    {
        id: 14,
        solution: "PIEDE",
        explanation: "PIEDE di porco. PIEDE libero. A PIEDI. PIEDE d'atleta. Mettere PIEDE.",
        pairs: [
            { options: ["PORCO", "MUCCA"], correct: "PORCO" },
            { options: ["LIBERO", "OCCUPATO"], correct: "LIBERO" },
            { options: ["A", "IN"], correct: "A" },
            { options: ["ATLETA", "CALCIATORE"], correct: "ATLETA" },
            { options: ["METTERE", "TOGLIERE"], correct: "METTERE" }
        ]
    },
    {
        id: 15,
        solution: "TESTA",
        explanation: "Mal di TESTA. TESTA di rapa. TESTA o croce. Perdere la TESTA. Colpo di TESTA.",
        pairs: [
            { options: ["MAL", "BENE"], correct: "MAL" },
            { options: ["RAPA", "CAROTA"], correct: "RAPA" },
            { options: ["CROCE", "DELIZIA"], correct: "CROCE" },
            { options: ["PERDERE", "TROVARE"], correct: "PERDERE" },
            { options: ["COLPO", "BOTTA"], correct: "COLPO" }
        ]
    },
    {
        id: 16,
        solution: "BOCCA",
        explanation: "Acqua in BOCCA. BOCCA di leone. BOCCA dello stomaco. Rifarsi la BOCCA. A BOCCA aperta.",
        pairs: [
            { options: ["ACQUA", "VINO"], correct: "ACQUA" },
            { options: ["TIGRE", "LEONE"], correct: "LEONE" },
            { options: ["STOMACO", "FEGATO"], correct: "STOMACO" },
            { options: ["RIFARSI", "LAVARSI"], correct: "RIFARSI" },
            { options: ["APERTA", "CHIUSA"], correct: "APERTA" }
        ]
    },
    {
        id: 17,
        solution: "CUORE",
        explanation: "Cioè. Batticuore (Battere il CUORE?). CUORE di panna. CUORE matto. Spezzare il CUORE.",
        pairs: [
            { options: ["CIOÈ", "INFATTI"], correct: "CIOÈ" },
            { options: ["BATTICUORE", "INFARTO"], correct: "BATTICUORE" },
            { options: ["PANNA", "CIOCCOLATO"], correct: "PANNA" },
            { options: ["MATTO", "SANO"], correct: "MATTO" },
            { options: ["SPEZZARE", "AGGIUSTARE"], correct: "SPEZZARE" }
        ]
    },
    {
        id: 18,
        solution: "PELLE",
        explanation: "PELLE d'oca. PELLE e ossa. Amici per la PELLE. PELLE di daino. Seconda PELLE.",
        pairs: [
            { options: ["OCA", "ANATRA"], correct: "OCA" },
            { options: ["OSSA", "MUSCOLI"], correct: "OSSA" },
            { options: ["AMICI", "NEMICI"], correct: "AMICI" },
            { options: ["DAINO", "CINGHIALE"], correct: "DAINO" },
            { options: ["SECONDA", "PRIMA"], correct: "SECONDA" }
        ]
    },
    {
        id: 19,
        solution: "ARIA",
        explanation: "ARIA fritta. ARIA di casa. Cambiare ARIA. ARIA condizionata. Mal d'ARIA.",
        pairs: [
            { options: ["FRITTA", "BOLLITA"], correct: "FRITTA" },
            { options: ["CASA", "ALBERGO"], correct: "CASA" },
            { options: ["CAMBIARE", "MANTENERE"], correct: "CAMBIARE" },
            { options: ["CONDIZIONATA", "RISCALDATA"], correct: "CONDIZIONATA" },
            { options: ["MAL", "BENE"], correct: "MAL" }
        ]
    },
    {
        id: 20,
        solution: "TERRA",
        explanation: "TERRA ferma. TERRA di nessuno. TERRA promessa. TERRA terra. Mal di TERRA.",
        pairs: [
            { options: ["FERMA", "MOBILE"], correct: "FERMA" },
            { options: ["NESSUNO", "TUTTI"], correct: "NESSUNO" },
            { options: ["PROMESSA", "MANTENUTA"], correct: "PROMESSA" },
            { options: ["CIELO", "TERRA"], correct: "TERRA" },
            { options: ["MAL", "BENE"], correct: "MAL" }
        ]
    }
];
