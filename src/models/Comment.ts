import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Interfaccia TypeScript per il documento
export interface IComment extends Document {
  text: string;
  createdAt: Date;
}

// 2. Schema Mongoose
const CommentSchema = new Schema<IComment>({
  text: {
    type: String,
    required: [true, 'Il commento non può essere vuoto'],
    maxlength: [500, 'Il commento può avere massimo 500 caratteri'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 3. Esportazione del modello
const Comment: Model<IComment> =
  mongoose.models.Comment ||
  mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;