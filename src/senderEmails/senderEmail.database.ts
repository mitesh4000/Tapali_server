import {
  IsenderEmail,
  IsingleSenderEmail,
  UpdateBody,
} from "./senderEmail.interface";
import SenderEmailModel from "./senderEmail.schema";

export const addNewEmail = async (
  body: IsenderEmail
): Promise<IsingleSenderEmail | null> => {
  let n̥ewEmail = await SenderEmailModel.create(body);
  console.log("🚀 ~ newEmail:", n̥ewEmail);

  return n̥ewEmail;
};

export const getAllSenderEmails = async (): Promise<
  IsingleSenderEmail[] | null
> => {
  let allEmails = await SenderEmailModel.find();
  console.log("🚀 ~ allEmails:", allEmails);

  return allEmails;
};

export const getSenderEmailById = async (
  id: string
): Promise<IsingleSenderEmail | null> => {
  let email = await SenderEmailModel.findById(id);
  console.log("🚀 ~ allEmails:", email);

  return email;
};

export const deleteSenderEmail = async (
  id: string
): Promise<IsingleSenderEmail | null> => {
  let email = await SenderEmailModel.findByIdAndDelete(id);
  console.log("🚀 ~ deleteSenderEmail ~ email:", email);
  return email;
};

export const updateSenderEmail = async (
  id: string,
  body: UpdateBody
): Promise<IsingleSenderEmail | null> => {
  let email = await SenderEmailModel.findByIdAndUpdate(id, body);
  console.log("🚀 ~ email:", email);
  let updatedEmail = getSenderEmailById(id);
  return updatedEmail;
};
