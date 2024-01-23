import express from "express";
import { signUp } from "../controller/User";

const auth = express.Router();

auth.route('/signup').post(signUp)

export { auth }