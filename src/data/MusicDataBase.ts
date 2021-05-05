import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class MusicDatabase extends BaseDatabase {

  private static TABLE_NAME = "Music_MM";

  public async addMusic(
    music_id: string,
    music_name: string,
    author: string,
    /* date: string, */
    file: string,
    album: string,
    user_id: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          music_id,
          music_name,
          author,
          /* date, */
          file,
          album,
          user_id
        })
        .into(MusicDatabase.TABLE_NAME);
      BaseDatabase.destroyConnection()
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  /* public async getUserByEmail(email: string): Promise<User> {
    try {
      const result = await this.getConnection().raw(`
        SELECT *
        FROM ${UserDatabase.TABLE_NAME}
        WHERE email = "${email}"
      `)
      
      return User.toUserModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  } */

}
