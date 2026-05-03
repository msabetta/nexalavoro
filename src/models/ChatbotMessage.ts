import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Interfaccia TypeScript per il documento
export interface IChatbotMessage extends Document {
  sessionId: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// 2. Schema Mongoose
const ChatbotMessageSchema = new Schema<IChatbotMessage>({
  sessionId: {
    type: String,
    required: true,
    index: true,
  },
  sender: {
    type: String,
    enum: ['user', 'bot'],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// 3. Esportazione del modello
const ChatbotMessage: Model<IChatbotMessage> =
  mongoose.models.ChatbotMessage ||
  mongoose.model<IChatbotMessage>('ChatbotMessage', ChatbotMessageSchema);

export default ChatbotMessage;