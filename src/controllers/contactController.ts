import express, { Request, Response } from "express";

import { User } from "../models/contactModel";
import asyncHandler from "express-async-handler"; // Assuming 'express-async-handler' is used for middleware

// Interface for Contact data (assuming you have a Contact interface)
interface Contact {
  // Define properties of your Contact object here
}

// Function representing your database connection logic (assuming it exists)
// const run = async (): Promise<void> => {
//   // Your database connection logic here
// }; // Uncomment if needed

// @desc Get all contacts
// @route GET /api/contacts
// @access Public
export const getContacts = asyncHandler(
  async (req: Request, res: Response<Contact[]>) => {
    const contacts = await User.findAll();
    res.status(200).json(contacts);
  }
);

// @desc Get one contact
// @route GET /api/contacts/:id
// @access Public
export const getContact = asyncHandler(async (req: any, res: any) => {
  const contact = await User.findByPk(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
});

// @desc Create a contact
// @route POST /api/contacts
// @access Public
export const createContact = asyncHandler(
  async (req: Request, res: Response<Contact>) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please provide complete details.");
    }
    const contact = await User.create({ username, email, password });
    res.status(201).json(contact);
  }
);

// @desc Update a contact
// @route PUT /api/contacts/:id
// @access Public (replace with appropriate access control logic)
export const updateContact = asyncHandler(async (req: any, res: any) => {
  const { name, email, phone } = req.body;

  const contact = await User.findByPk(req.params.id);

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  contact.update(name, email, phone);
  res.status(200).json(contact);
});

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access Public (replace with appropriate access control logic)
export const deleteContact = asyncHandler(async (req: any, res: any) => {
  const contact = await User.findByPk(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  await contact.destroy();
  res.status(200).json({ message: "Contact deleted" });
});
