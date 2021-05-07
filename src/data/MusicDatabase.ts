import { BaseDatabase } from "./BaseDatabase";

export class MusicDatabase extends BaseDatabase {

  private static TABLE_NAME = "Music_MM";

  public async addMusic(
    music_id: string,
    music_name: string,
    author: string,
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

  public async getAllMusics(user_id: string): Promise<string[]> {
    try {
      const result = await this.getConnection().raw(`
        SELECT *
        FROM ${MusicDatabase.TABLE_NAME}
        WHERE user_id = "${user_id}"
      `)
      
      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getMusics(music_id: string): Promise<string[]> {
    try {
      const result = await this.getConnection().raw(`
        SELECT *
        FROM ${MusicDatabase.TABLE_NAME}
        WHERE music_id = "${music_id}"
      `)
      
      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
