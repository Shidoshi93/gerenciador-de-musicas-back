import express from "express";
import { MusicController } from "../controller/MusicController";

export const musicRouter = express.Router();

const musicController = new MusicController();

musicRouter.post("/add-music", musicController.addMusic);
musicRouter.get("/get-all-musics", musicController.getAllMusics);
musicRouter.get("/get-music/:id", musicController.getMusic);