import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSID = "AC78183aed59254465cd929317d3bfc72c";
const authToken = "3f977fd485b8a95c808653c62dcd2173";

export const client = twilio(accountSID, authToken);