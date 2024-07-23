import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as database from "./senderEmail.database";

export const productRouter = express.Router();

productRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newEmail = await database.addNewEmail(req.body);
    if (!newEmail) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    return res.status(StatusCodes.ACCEPTED).json({ data: newEmail });
  } catch (error) {}
});

productRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allEmails = await database.getAllSenderEmails();
    if (!allEmails) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    return res.status(StatusCodes.ACCEPTED).json({ data: allEmails });
  } catch (error) {}
});

productRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const updateedEmail = await database.updateSenderEmail(
      req.params.id,
      req.body
    );
    if (!updateedEmail) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    return res.status(StatusCodes.ACCEPTED).json({ data: updateedEmail });
  } catch (error) {}
});

productRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedEmail = await database.deleteSenderEmail(req.params.id);
    if (!deletedEmail) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    return res.status(StatusCodes.ACCEPTED).json({ data: deletedEmail });
  } catch (error) {}
});
