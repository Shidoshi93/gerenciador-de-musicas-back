import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { MusicInputDTO } from "../model/Music";
import { MusicDatabase } from "../data/MusicDatabase";

export class MusicBusiness {

    public async addMusic(music: MusicInputDTO, token: string) {

        if (!token) throw new Error('Invalid token')

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const auth = new Authenticator()
        const user_id = auth.getData(token).id

        const musicDatabase = new MusicDatabase();
        await musicDatabase.addMusic(
            id,
            music.music_name,
            music.author,
            music.file,
            music.album,
            String(user_id)
        );

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id });

        return accessToken;
    }

    public async getAllmusics(token: string) {
        try {
            if (!token) throw new Error('Invalid token')

            const auth = new Authenticator()
            const user_id = auth.getData(token).id

            const musicDatabase = new MusicDatabase()
            const result = await musicDatabase.getAllMusics(user_id)
    
            return result
        } catch (error) {
            console.log(error.message)
        }
    }
}