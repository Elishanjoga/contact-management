import mongoose from "mongoose"; // Import mongoose from 'mongoose' package

// Define the contact schema using an interface
interface Contact {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const contactSchema = new mongoose.Schema<Contact>({
  name: {
    type: String,
    required: [true, "please provide a valid name"],
  },
  email: {
    type: String,
    required: [true, "please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "please provide a valid phone number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const contacts = mongoose.model<Contact>("Contact", contactSchema);

export default contacts;
