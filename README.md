# NexaLavoro 🚀

> **La prima piattaforma AI‑first progettata dal lavoratore, per il lavoratore.**

NexaLavoro è una moderna applicazione web costruita per rivoluzionare l'approccio alla ricerca del lavoro, mettendo al centro le esigenze, il benessere e i valori del lavoratore attraverso l'uso dell'Intelligenza Artificiale.

## 🌟 Caratteristiche Principali

- **Matching Etico:** Incrocio di competenze e valori per trovare solo aziende che rispettano orari, dignità e salute mentale.
- **Profilo Dinamico Real-Time:** Un'identità professionale viva, che si aggiorna in tempo reale mostrando *Skill Relevance*, metriche di rischio burnout e preferenze etiche.
- **Prevenzione del Burnout:** Monitoraggio dei segnali di stress e alert proattivi.
- **Pagamenti Garantiti:** Integrazione e focus su progetti senza commissioni nascoste (riferimenti a smart contracts).
- **Interazione Intelligente:** Chatbot integrato basato su AI per rispondere a dubbi su piani, pagamenti e salute lavorativa.
- **Community ed Engagement:** Modulo newsletter e post integrati per la condivisione social (es. formattazione stile LinkedIn).

## 🛠️ Stack Tecnologico

- **Framework Core:** [Next.js 14](https://nextjs.org/) (App Router)
- **Linguaggio:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) con [Mongoose](https://mongoosejs.com/) (gestione tramite API routes)
- **Gestione Email:** [Resend](https://resend.com/) + Netlify Emails
- **Deploy & Hosting:** [Netlify](https://www.netlify.com/)

## 📂 Struttura del Progetto

- `/src/app/` - Route di pagina e API route (Chatbot, Newsletter, Commenti).
- `/src/components/` - Componenti riutilizzabili e sezioni della UI (Hero, FAQ, Testimonials, ecc.).
- `/src/lib/` - Utility di configurazione, come la connessione condivisa al database (`db.ts`).
- `/src/models/` - Schemi Mongoose per il salvataggio dei dati (ChatbotMessage, Comment, Newsletter).
- `/src/types/` - Interfacce TypeScript centralizzate.
- `netlify.toml` - Configurazione di build e deploy per Netlify.

## 🚀 Avvio Rapido (Sviluppo Locale)

### 1. Prerequisiti
Assicurati di avere installati:
- **Node.js** (versione 18 o superiore raccomandata)
- **NPM** o **Yarn**
- Un cluster **MongoDB** attivo (es. MongoDB Atlas)

### 2. Installazione
Clona il repository e installa le dipendenze:
```bash
git clone https://github.com/msabetta/nexalavoro.git
cd nexalavoro
npm install
```

### 3. Variabili d'Ambiente
Crea un file `.env.local` nella cartella root copiando il file d'esempio (se presente) e inserisci le chiavi richieste:
```env
# URI di connessione al database MongoDB
MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/nexalavoro"

# Configurazione Email (Resend)
RESEND_API_KEY="tua_api_key_resend"
```

### 4. Avvia il server di sviluppo
Avvia il server Next.js:
```bash
npm run dev
```
Ora apri [http://localhost:3000](http://localhost:3000) nel tuo browser per visualizzare il risultato.

## 📦 Deploy (Netlify)

Il progetto è pre-configurato per il deployment su Netlify tramite il file `netlify.toml`.
Le Netlify Functions e l'integrazione con `@netlify/plugin-emails` sono gestite in automatico:

1. Collega il repository GitHub al tuo account Netlify.
2. Assicurati di impostare la variabile d'ambiente `MONGODB_URI` e le variabili relative a `RESEND` all'interno della dashboard di Netlify (Settings -> Environment variables).
3. Il comando di build predefinito è `npm run build` e la directory di publish è `.next`.

## 📜 Licenza
Questo progetto è protetto da copyright. Tutti i diritti riservati.