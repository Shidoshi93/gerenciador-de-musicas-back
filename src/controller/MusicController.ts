import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { MusicInputDTO } from "../model/Music";
import { MusicBusiness } from "../business/MusicBusiness";

export class MusicController {
    public async addMusic(req: Request, res: Response) {
        try {

            const input: MusicInputDTO = {
                music_name: req.body.music_name,
                author: req.body.author,
                file: req.body.file,
                album: req.body.album
            }

            const inputToken = req.headers.authorization as string

            const musicBusiness = new MusicBusiness();
            const token = await musicBusiness.addMusic(input, inputToken);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    public async getAllMusics(req: Request, res: Response) {
        try {
            const inputToken = req.headers.authorization as string

            const musicBusiness = new MusicBusiness();
            const result = await musicBusiness.getAllmusics(inputToken)

            res.status(200).send({musics: result})
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    public async getMusic(req: Request, res: Response) {
        try {
            const inputToken = req.headers.authorization as string
            const music_id = req.params.id as string
            
            const musicBusiness = new MusicBusiness();
            const result = await musicBusiness.getMusic(inputToken, music_id)

            res.status(200).send({musics: result})
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

}