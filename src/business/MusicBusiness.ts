import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { MusicInputDTO } from "../model/Music";
import { MusicDatabase } from "../data/MusicDataBase";

export class MusicBusiness {

    public async addMusic(music: MusicInputDTO, token: string) {

        if (!token) throw new Error('Invalid token')

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const auth = new Authenticator()
        const user_id = auth.getData(token)

        const musicDatabase = new MusicDatabase();
        await musicDatabase.addMusic(
            id,
            music.music_name,
            music.author,
            music.file,
            music.album,
            String(user_id.id)
        );

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id });

        return accessToken;
    }

    /* public async getUserByEmail(user: LoginInputDTO) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    } */
}