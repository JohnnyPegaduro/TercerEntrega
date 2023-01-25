import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSID = "AC78183aed59254465cd929317d3bfc72c";
const authToken = process.env.TWILIO;

export const client = twilio(accountSID, authToken);