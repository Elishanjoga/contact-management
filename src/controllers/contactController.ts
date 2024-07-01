import Contact from "../models/contactModel"; // Assuming 'Contact' model is imported from 'contact.model.ts'
import asyncHandler from "express-async-handler"; // Assuming 'express-async-handler' is used for middleware
// import {run} from '../configs/dbConnection';
// const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");
// const run = require("../configs/dbConnection");

// @desc get all contacts
// @route GET /api/contacts
//@accesss public
const getContacts = asyncHandler(async (req: any, res: any) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc get one contact
// @route GET /api/contacts/:id
//@accesss public
const getContact = asyncHandler(async (req: any, res: any) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
});
// @desc create contacts
// @route POST /api/contacts
//@accesss public
const createContact = asyncHandler(async (req: any, res: any) => {
  // console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide complete details.");
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contacts);
});

// @desc update contacts
// @route PUT /api/contacts/:id
//@accesss public
const updateContact = asyncHandler(async (req: any, res: any) =>
  res.status(201).json({ message: `Elisha test ${req.params.id}` })
);

// @desc delete contacts
// @route DELETE /api/contacts/:id
//@accesss public
const deleteContact = asyncHandler(async (req: any, res: any) =>
  res.status(201).json({ message: `Elisha test ${req.params.id}` })
);

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
