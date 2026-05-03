import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Interfaccia TypeScript per il documento
export interface INewsletter extends Document {
  email: string;
  subscribedAt: Date;
}

// 2. Schema Mongoose
const NewsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Email richiesta'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato email non valido'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// 3. Esportazione del modello (evita di ricompilarlo in development)
const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter ||
  mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;