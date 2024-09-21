import { remultExpress } from "remult/remult-express";
import { getUserFromRequest } from "./auth.js";

export const api = remultExpress({
  getUser: getUserFromRequest,
});