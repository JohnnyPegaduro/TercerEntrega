import { createTransport } from "nodemailer";

export const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "mia90@ethereal.email",
    pass: "TFRETgw48qhwpydZKS",
  },
});