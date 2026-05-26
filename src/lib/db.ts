import mongoose from 'mongoose';

/**
 * Interfaccia per la cache della connessione Mongoose.
 * In Next.js (soprattutto in sviluppo), il file viene ricaricato spesso.
 * Usiamo l'oggetto global per mantenere la connessione attiva tra i ricaricamenti.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

// Inizializzazione della cache globale
let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function connectDB(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI || MONGODB_URI.includes('<user>')) {
    throw new Error(
      'MONGODB_URI non configurato correttamente. Verifica il file .env e sostituisci <user> e <password>.'
    );
  }

  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    // La connessione gestisce automaticamente username e password inclusi nell'URI
    cached!.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('✅ Connesso a MongoDB Atlas');
      return mongooseInstance;
    });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    console.error('❌ Errore durante la connessione a MongoDB:', e);
    throw e;
  }

  return cached!.conn;
}

export default connectDB;