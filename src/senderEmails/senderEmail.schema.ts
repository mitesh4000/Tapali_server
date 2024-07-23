import mongoose from "mongoose";

interface IsenderEmail extends Document {
  email: string;
  password: string;
  port: number;
  host: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const senderEmailSchema = new mongoose.Schema<IsenderEmail>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  host: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

senderEmailSchema.pre("save", function (next: () => void) {
  this.updatedAt = new Date(Date.now());
  next();
});

const SenderEmailModel = mongoose.model("SenderEmails", senderEmailSchema);

export default SenderEmailModel;
