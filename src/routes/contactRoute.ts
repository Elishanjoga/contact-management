import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/contactController";

import express from "express";

const router = express.Router();
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
