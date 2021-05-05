import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
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


}