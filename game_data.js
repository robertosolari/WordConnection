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
    },
    {
        id: 21,
        solution: "PIANO",
        explanation: "La parola 'piano' può riferirsi sia a uno strumento musicale che a un progetto.",
        pairs: [
            { options: ["FLAUTO", "TASTIERA"], correct: "TASTIERA" },
            { options: ["PROGETTO", "SCALA"], correct: "PROGETTO" },
            { options: ["FORTE", "LEGGERO"], correct: "FORTE" },
            { options: ["NOTA", "RIGA"], correct: "NOTA" },
            { options: ["MUSICA", "PESO"], correct: "MUSICA" }
        ]
    },
    {
        id: 22,
        solution: "RETE",
        explanation: "La parola 'rete' è collegata alla connessione e al trasporto.",
        pairs: [
            { options: ["INTERNET", "LAGO"], correct: "INTERNET" },
            { options: ["PESCE", "MONTAGNA"], correct: "PESCE" },
            { options: ["CONNESSIONE", "ISOLAMENTO"], correct: "CONNESSIONE" },
            { options: ["TRASPORTO", "BOTTIGLIA"], correct: "TRASPORTO" },
            { options: ["MAGLIA", "PALLA"], correct: "MAGLIA" }
        ]
    },
    {
        id: 23,
        solution: "CORSA",
        explanation: "La parola 'corsa' si riferisce al movimento veloce e alla competizione.",
        pairs: [
            { options: ["LENTO", "VELOCE"], correct: "VELOCE" },
            { options: ["GARA", "RELAZIONE"], correct: "GARA" },
            { options: ["MARATONA", "PASSEGGIATA"], correct: "MARATONA" },
            { options: ["ATLETA", "CUOCO"], correct: "ATLETA" },
            { options: ["FINISH", "INIZIO"], correct: "FINISH" }
        ]
    },
    {
        id: 24,
        solution: "CHIAVE",
        explanation: "La parola 'chiave' è fondamentale per aprire e risolvere problemi.",
        pairs: [
            { options: ["PORTA", "FINESTRA"], correct: "PORTA" },
            { options: ["SOLUZIONE", "PROBLEMA"], correct: "SOLUZIONE" },
            { options: ["SEGRETO", "EVIDENTE"], correct: "SEGRETO" },
            { options: ["MUSICALE", "PITTORICO"], correct: "MUSICALE" },
            { options: ["SERRATURA", "TAPPETO"], correct: "SERRATURA" }
        ]
    },
    {
        id: 25,
        solution: "LUNA",
        explanation: "Tutti gli indizi si riferiscono a diverse connessioni con la Luna.",
        pairs: [
            { options: ["SOLE", "SATELLITE"], correct: "SATELLITE" },
            { options: ["NOTTE", "GIOCO"], correct: "NOTTE" },
            { options: ["APOLLO", "MARTE"], correct: "APOLLO" },
            { options: ["CRATERE", "VULCANO"], correct: "CRATERE" },
            { options: ["ECLISSI", "ALBA"], correct: "ECLISSI" }
        ]
    },
    {
        id: 26,
        solution: "CORDA",
        explanation: "Fare una CORDA. CORDA vocale. CORDA tesa. CORDA di sicurezza. Saltare la CORDA.",
        pairs: [
            { options: ["FESTA", "CORDA"], correct: "CORDA" },
            { options: ["VOCALE", "MUSICALE"], correct: "VOCALE" },
            { options: ["TESA", "LENTA"], correct: "TESA" },
            { options: ["PROTEZIONE", "SICUREZZA"], correct: "SICUREZZA" },
            { options: ["SALIRE", "SALTARE"], correct: "SALTARE" }
        ]
    },
    {
        id: 27,
        solution: "ARCO",
        explanation: "Tutti gli indizi si collegano al concetto di arco in vari modi.",
        pairs: [
            { options: ["FRECCIA", "SCUDO"], correct: "FRECCIA" },
            { options: ["BALENO", "VENTO"], correct: "BALENO" },
            { options: ["CIELO", "TERRA"], correct: "CIELO" },
            { options: ["PONTE", "STRADA"], correct: "PONTE" },
            { options: ["VOLTA", "PIANO"], correct: "VOLTA" }
        ]
    },
    {
        id: 28,
        solution: "VOCE",
        explanation: "Dare VOCE. VOCE narrante. VOCE alta. VOCE del verbo. VOCE di corridoio.",
        pairs: [
            { options: ["VOCE", "TERRA"], correct: "VOCE" },
            { options: ["NARRANTE", "SCRITTA"], correct: "NARRANTE" },
            { options: ["ALTA", "BASSA"], correct: "ALTA" },
            { options: ["VERBO", "NOME"], correct: "VERBO" },
            { options: ["SOGNO", "CORRIDOIO"], correct: "CORRIDOIO" }
        ]
    },
    {
        id: 29,
        solution: "ACQUA",
        explanation: "Acqua alta. Acqua bollente. Acqua in bocca. Acqua passata. Acqua santa.",
        pairs: [
            { options: ["BASSA", "ALTA"], correct: "ALTA" },
            { options: ["BOLLENTE", "FREDDA"], correct: "BOLLENTE" },
            { options: ["IN BOCCA", "AI PESCI"], correct: "IN BOCCA" },
            { options: ["PASSATA", "FUTURA"], correct: "PASSATA" },
            { options: ["SANTA", "MALIGNA"], correct: "SANTA" }
        ]
    },
    {
        id: 30,
        solution: "STELLA",
        explanation: "Stella del mattino. Stella polare. Stella cadente. Stella marina. Stella solitaria.",
        pairs: [
            { options: ["DELLA SERA", "DEL MATTINO"], correct: "DEL MATTINO" },
            { options: ["POLARE", "EQUATORE"], correct: "POLARE" },
            { options: ["CADENTE", "FISSA"], correct: "CADENTE" },
            { options: ["MARINA", "TERRESTRE"], correct: "MARINA" },
            { options: ["SOLITARIA", "COMPAGNA"], correct: "SOLITARIA" }
        ]
    },
    {
        id: 31,
        solution: "CIELO",
        explanation: "CIELO sereno. CIELO stellato. Sotto un CIELO. CIELO aperto. CIELO coperto.",
        pairs: [
            { options: ["SERENO", "NUVOLOSO"], correct: "SERENO" },
            { options: ["STELLATO", "BUIO"], correct: "STELLATO" },
            { options: ["SOTTO", "SOPRA"], correct: "SOTTO" },
            { options: ["APERTO", "CHIUSO"], correct: "APERTO" },
            { options: ["COPERTO", "SCOPERTO"], correct: "COPERTO" }
        ]
    },
    {
        id: 32,
        solution: "PONTE",
        explanation: "PONTE sospeso. PONTE levatoio. PONTE invisibile. PONTE di comando. PONTE dei sospiri.",
        pairs: [
            { options: ["SOSPESO", "INTERROTTO"], correct: "SOSPESO" },
            { options: ["LEVATOIO", "SCORREVOLE"], correct: "LEVATOIO" },
            { options: ["INVISIBILE", "VISIBILE"], correct: "INVISIBILE" },
            { options: ["DI COMANDO", "DI GUARDIA"], correct: "DI COMANDO" },
            { options: ["DEI SOSPIRI", "DELLE LAMENTELE"], correct: "DEI SOSPIRI" }
        ]
    },
    {
        id: 33,
        solution: "VENTO",
        explanation: "Soffio di VENTO. VENTO contrario. VENTO favorevole. Al VENTO. VENTO in poppa.",
        pairs: [
            { options: ["SOFFIO", "RUMORE"], correct: "SOFFIO" },
            { options: ["CONTRARIO", "AMICO"], correct: "CONTRARIO" },
            { options: ["FAVOREVOLE", "OSTILE"], correct: "FAVOREVOLE" },
            { options: ["AL", "NEL"], correct: "AL" },
            { options: ["POPPA", "PRUA"], correct: "POPPA" }
        ]
    },
    {
        id: 34,
        solution: "FUOCO",
        explanation: "Appiccare il FUOCO. Prova del FUOCO. FUOCO e fiamme. Spegnere il FUOCO. FUOCO di paglia.",
        pairs: [
            { options: ["ACCENDERE", "APPICCARE"], correct: "APPICCARE" },
            { options: ["PROVA", "TEST"], correct: "PROVA" },
            { options: ["FUOCO", "ACQUA"], correct: "FUOCO" },
            { options: ["ACCENDERE", "SPEGNERE"], correct: "SPEGNERE" },
            { options: ["FIAMMA", "PAGLIA"], correct: "PAGLIA" }
        ]
    },
    {
        id: 35,
        solution: "COPERTA",
        explanation: "Sotto COPERTA. COPERTA di Linus. COPERTA di neve. COPERTA di lana. COPERTA di stelle.",
        pairs: [
            { options: ["SOPRA", "SOTTO"], correct: "SOTTO" },
            { options: ["DI LINUS", "DI SNOOPY"], correct: "DI LINUS" },
            { options: ["DI NEVE", "DI GHIACCIO"], correct: "DI NEVE" },
            { options: ["DI SETA", "DI LANA"], correct: "DI LANA" },
            { options: ["DI PIETRE", "DI STELLE"], correct: "DI STELLE" }
        ]
    },
    {
        id: 36,
        solution: "OSPITE",
        explanation: "OSPITE d'onore. OSPITE inatteso. Casa dell'OSPITE. OSPITE fisso. OSPITE gradito.",
        pairs: [
            { options: ["DI CASA", "D'ONORE"], correct: "D'ONORE" },
            { options: ["PREVISTO", "INATTESO"], correct: "INATTESO" },
            { options: ["DELL'OSPITE", "DEL PADRONE"], correct: "DELL'OSPITE" },
            { options: ["OCCASIONALE", "FISSO"], correct: "FISSO" },
            { options: ["INDESIDERATO", "GRADITO"], correct: "GRADITO" }
        ]
    }
,
    {
        "solution": "CHIAVE",
        "explanation": "Nota CHIAVE. CHIAVE inglese. CHIAVE di volta. Parola CHIAVE. CHIAVE di sicurezza.",
        "pairs": [
                {
                        "options": [
                                "TONO",
                                "NOTA"
                        ],
                        "correct": "NOTA"
                },
                {
                        "options": [
                                "INGLESE",
                                "FRANCESE"
                        ],
                        "correct": "INGLESE"
                },
                {
                        "options": [
                                "COLONNA",
                                "VOLTA"
                        ],
                        "correct": "VOLTA"
                },
                {
                        "options": [
                                "SEGRETA",
                                "PAROLA"
                        ],
                        "correct": "PAROLA"
                },
                {
                        "options": [
                                "SICUREZZA",
                                "APERTURA"
                        ],
                        "correct": "SICUREZZA"
                }
        ],
        "id": 37
},
    {
        "solution": "CORONA",
        "explanation": "CORONA di fiori. CORONA virale. CORONA dentale. CORONA solare. CORONA d'alloro.",
        "pairs": [
                {
                        "options": [
                                "FESTA",
                                "FIORI"
                        ],
                        "correct": "FIORI"
                },
                {
                        "options": [
                                "VIRALE",
                                "BACTERIALE"
                        ],
                        "correct": "VIRALE"
                },
                {
                        "options": [
                                "CAVITÀ",
                                "DENTALE"
                        ],
                        "correct": "DENTALE"
                },
                {
                        "options": [
                                "LUNARE",
                                "SOLARE"
                        ],
                        "correct": "SOLARE"
                },
                {
                        "options": [
                                "ALLORO",
                                "ORO"
                        ],
                        "correct": "ALLORO"
                }
        ],
        "id": 38
},
    {
        "solution": "CUORE",
        "explanation": "Mal di CUORE. Cuore di pietra. Cuore d'oro. CUORE pulsante. In CUORE.",
        "pairs": [
                {
                        "options": [
                                "MALE",
                                "MAL"
                        ],
                        "correct": "MAL"
                },
                {
                        "options": [
                                "FERRO",
                                "PIETRA"
                        ],
                        "correct": "PIETRA"
                },
                {
                        "options": [
                                "ORO",
                                "ARGENTO"
                        ],
                        "correct": "ORO"
                },
                {
                        "options": [
                                "PULSANTE",
                                "BATTERE"
                        ],
                        "correct": "PULSANTE"
                },
                {
                        "options": [
                                "TESTA",
                                "CUORE"
                        ],
                        "correct": "CUORE"
                }
        ],
        "id": 39
},
    {
        "solution": "LUCE",
        "explanation": "LUCE del sole. LUCE verde. LUCE rossa. LUCE di candele. LUCE guida.",
        "pairs": [
                {
                        "options": [
                                "SOLE",
                                "NEVE"
                        ],
                        "correct": "SOLE"
                },
                {
                        "options": [
                                "VERDE",
                                "GIALLA"
                        ],
                        "correct": "VERDE"
                },
                {
                        "options": [
                                "ROSSA",
                                "NERA"
                        ],
                        "correct": "ROSSA"
                },
                {
                        "options": [
                                "LAMPADA",
                                "CANDELE"
                        ],
                        "correct": "CANDELE"
                },
                {
                        "options": [
                                "GUIDA",
                                "SENTIERO"
                        ],
                        "correct": "GUIDA"
                }
        ],
        "id": 40
},
    {
        "solution": "PUNTO",
        "explanation": "PUNTO di vista. PUNTO e virgola. PUNTO debole. PUNTO di incontro. PUNTO fermo.",
        "pairs": [
                {
                        "options": [
                                "VISTA",
                                "SENTIRE"
                        ],
                        "correct": "VISTA"
                },
                {
                        "options": [
                                "VIRGOLA",
                                "PUNTO"
                        ],
                        "correct": "VIRGOLA"
                },
                {
                        "options": [
                                "FORTE",
                                "DEBOLE"
                        ],
                        "correct": "DEBOLE"
                },
                {
                        "options": [
                                "PARTENZA",
                                "INCONTRO"
                        ],
                        "correct": "INCONTRO"
                },
                {
                        "options": [
                                "FERMO",
                                "MOBILE"
                        ],
                        "correct": "FERMO"
                }
        ],
        "id": 41
},
,
    {
        "solution": "LUCE",
        "explanation": "Far LUCE su qualcosa. LUCE del sole. Interruttore della LUCE. LUCE verde. LUCE della ribalta.",
        "pairs": [
                {
                        "options": [
                                "SCURO",
                                "SOLE"
                        ],
                        "correct": "SOLE"
                },
                {
                        "options": [
                                "ACCENDERE",
                                "SPEGNERE"
                        ],
                        "correct": "ACCENDERE"
                },
                {
                        "options": [
                                "ROSSA",
                                "VERDE"
                        ],
                        "correct": "VERDE"
                },
                {
                        "options": [
                                "OMBRA",
                                "RIBALTA"
                        ],
                        "correct": "RIBALTA"
                },
                {
                        "options": [
                                "FAR",
                                "COPRIRE"
                        ],
                        "correct": "FAR"
                }
        ],
        "id": 37
},
    {
        "solution": "CIELO",
        "explanation": "Sotto il CIELO. CIELO stellato. CIELO grigio. CIELO di piombo. CIELO aperto.",
        "pairs": [
                {
                        "options": [
                                "TERRA",
                                "ACQUA"
                        ],
                        "correct": "TERRA"
                },
                {
                        "options": [
                                "BRILLANTE",
                                "STELLATO"
                        ],
                        "correct": "STELLATO"
                },
                {
                        "options": [
                                "GRIGIO",
                                "BUIO"
                        ],
                        "correct": "GRIGIO"
                },
                {
                        "options": [
                                "LEGGERO",
                                "DI PIOMBO"
                        ],
                        "correct": "DI PIOMBO"
                },
                {
                        "options": [
                                "CHIUSO",
                                "APERTO"
                        ],
                        "correct": "APERTO"
                }
        ],
        "id": 38
},
    {
        "solution": "TEMPO",
        "explanation": "TEMPO libero. TEMPO meteorologico. TEMPO di cottura. TEMPO di reazione. TEMPO scaduto.",
        "pairs": [
                {
                        "options": [
                                "LIBERO",
                                "CHIUSO"
                        ],
                        "correct": "LIBERO"
                },
                {
                        "options": [
                                "CLIMA",
                                "METEOROLOGICO"
                        ],
                        "correct": "METEOROLOGICO"
                },
                {
                        "options": [
                                "RIPOSO",
                                "COTTURA"
                        ],
                        "correct": "COTTURA"
                },
                {
                        "options": [
                                "RITARDO",
                                "REAZIONE"
                        ],
                        "correct": "REAZIONE"
                },
                {
                        "options": [
                                "SCADUTO",
                                "INFINITO"
                        ],
                        "correct": "SCADUTO"
                }
        ],
        "id": 39
},
    {
        "solution": "FIORE",
        "explanation": "FIORE all’occhiello. FIORE di loto. FIORE di campo. FIORE appassito. FIORE di giovinezza.",
        "pairs": [
                {
                        "options": [
                                "OCCHIELLO",
                                "BRACCIO"
                        ],
                        "correct": "OCCHIELLO"
                },
                {
                        "options": [
                                "ROSA",
                                "LOTO"
                        ],
                        "correct": "LOTO"
                },
                {
                        "options": [
                                "MARE",
                                "CAMPO"
                        ],
                        "correct": "CAMPO"
                },
                {
                        "options": [
                                "FRESCO",
                                "APPASSITO"
                        ],
                        "correct": "APPASSITO"
                },
                {
                        "options": [
                                "VECCHIAIA",
                                "GIOVINEZZA"
                        ],
                        "correct": "GIOVINEZZA"
                }
        ],
        "id": 40
},
    {
        "solution": "PIETRA",
        "explanation": "PIETRA miliare. PIETRA preziosa. Lanciare una PIETRA. PIETRA angolare. PIETRA filosofale.",
        "pairs": [
                {
                        "options": [
                                "MILIARDA",
                                "MILIARE"
                        ],
                        "correct": "MILIARE"
                },
                {
                        "options": [
                                "ORO",
                                "PREZIOSA"
                        ],
                        "correct": "PREZIOSA"
                },
                {
                        "options": [
                                "LANCIARLA",
                                "COPRIRLA"
                        ],
                        "correct": "LANCIARLA"
                },
                {
                        "options": [
                                "ANGOLO",
                                "ANGOLORETTO"
                        ],
                        "correct": "ANGOLO"
                },
                {
                        "options": [
                                "FILOSOFALE",
                                "MAGICA"
                        ],
                        "correct": "FILOSOFALE"
                }
        ],
        "id": 41
},
,
    {
        "solution": "CORDA",
        "explanation": "Saltare alla CORDA. Nodo della CORDA. CORDA vocale. CORDA elastica. Tensione della CORDA.",
        "pairs": [
                {
                        "options": [
                                "SALTARE",
                                "CORRERE"
                        ],
                        "correct": "SALTARE"
                },
                {
                        "options": [
                                "NODO",
                                "ANELLO"
                        ],
                        "correct": "NODO"
                },
                {
                        "options": [
                                "VOCALE",
                                "ARMONICA"
                        ],
                        "correct": "VOCALE"
                },
                {
                        "options": [
                                "RIGIDA",
                                "ELASTICA"
                        ],
                        "correct": "ELASTICA"
                },
                {
                        "options": [
                                "PRESSIONE",
                                "TENSIONE"
                        ],
                        "correct": "TENSIONE"
                }
        ],
        "id": 37
},
    {
        "solution": "LUCE",
        "explanation": "Punto LUCE. Velocità della LUCE. Fare LUCE. LUCE naturale. LUCE verde.",
        "pairs": [
                {
                        "options": [
                                "PUNTO",
                                "LINEA"
                        ],
                        "correct": "PUNTO"
                },
                {
                        "options": [
                                "SUONO",
                                "LUCE"
                        ],
                        "correct": "LUCE"
                },
                {
                        "options": [
                                "LUCE",
                                "OMBRA"
                        ],
                        "correct": "LUCE"
                },
                {
                        "options": [
                                "NATURALE",
                                "ARTIFICIALE"
                        ],
                        "correct": "NATURALE"
                },
                {
                        "options": [
                                "ROSSO",
                                "VERDE"
                        ],
                        "correct": "VERDE"
                }
        ],
        "id": 38
},
    {
        "solution": "PIANO",
        "explanation": "PIANO regolatore. A PIANO. PIANO inclinato. Fare PIANO. PIANO di fuga.",
        "pairs": [
                {
                        "options": [
                                "REGOLATORE",
                                "DISORDINATO"
                        ],
                        "correct": "REGOLATORE"
                },
                {
                        "options": [
                                "A",
                                "PER"
                        ],
                        "correct": "A"
                },
                {
                        "options": [
                                "INCLINATO",
                                "ORIZZONTALE"
                        ],
                        "correct": "INCLINATO"
                },
                {
                        "options": [
                                "FORTE",
                                "PIANO"
                        ],
                        "correct": "PIANO"
                },
                {
                        "options": [
                                "FUGA",
                                "ATTACCO"
                        ],
                        "correct": "FUGA"
                }
        ],
        "id": 39
},
    {
        "solution": "RETE",
        "explanation": "Maglia di una RETE. RETE stradale. In RETE. RETE da pesca. RETE sociale.",
        "pairs": [
                {
                        "options": [
                                "MAGLIA",
                                "FIUME"
                        ],
                        "correct": "MAGLIA"
                },
                {
                        "options": [
                                "FERROVIARIA",
                                "STRADALE"
                        ],
                        "correct": "STRADALE"
                },
                {
                        "options": [
                                "IN",
                                "SU"
                        ],
                        "correct": "IN"
                },
                {
                        "options": [
                                "DA PESCA",
                                "DA CACCIA"
                        ],
                        "correct": "DA PESCA"
                },
                {
                        "options": [
                                "SOCIALE",
                                "INDIVIDUALE"
                        ],
                        "correct": "SOCIALE"
                }
        ],
        "id": 40
},
    {
        "solution": "FOGLIA",
        "explanation": "FOGLIA di fico. FOGLIA d'oro. FOGLIA di alloro. FOGLIA di tè. FOGLIA morta.",
        "pairs": [
                {
                        "options": [
                                "FICO",
                                "MELA"
                        ],
                        "correct": "FICO"
                },
                {
                        "options": [
                                "ARGENTO",
                                "ORO"
                        ],
                        "correct": "ORO"
                },
                {
                        "options": [
                                "ALLORO",
                                "ROSMARINO"
                        ],
                        "correct": "ALLORO"
                },
                {
                        "options": [
                                "TÈ",
                                "CAFFÈ"
                        ],
                        "correct": "TÈ"
                },
                {
                        "options": [
                                "VIVA",
                                "MORTA"
                        ],
                        "correct": "MORTA"
                }
        ],
        "id": 41
},
];
