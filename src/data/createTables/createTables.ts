import { BaseDatabase } from "../BaseDatabase";

export class CreateTables extends BaseDatabase {

    private static Users_Table = "Users_MM";
    private static Music_Table = "Music_MM";
    private static USER_TABLE = "USER_TABLE_LAMA";

    public async createUserTable(): Promise<void> {
        try {
            await this.getConnection().raw(
                `CREATE TABLE IF NOT EXISTS ${CreateTables.Users_Table} (
                    user_id VARCHAR(255) PRIMARY KEY NOT NULL,
                    user_name VARCHAR(255) UNIQUE NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    nickname VARCHAR(255) UNIQUE NOT NULL 
                );`
            )

            console.log(`${CreateTables.Users_Table} was created successfully`)
            BaseDatabase.destroyConnection()

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async createMusicTable(): Promise<void> {
        try {
            await this.getConnection().raw(
                `CREATE TABLE IF NOT EXISTS ${CreateTables.Music_Table} (
                    music_id VARCHAR(255) PRIMARY KEY NOT NULL,
                    music_name VARCHAR(255) NOT NULL,
                    author VARCHAR(255) NOT NULL,
                    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                    file VARCHAR(255) NOT NULL,
                    album VARCHAR(255),
                    user_id VARCHAR(255) NOT NULL,
                    FOREIGN KEY (user_id) REFERENCES Users_MM(user_id)
                );`
            )

            console.log(`${CreateTables.Music_Table} was created successfully`)
            BaseDatabase.destroyConnection()

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

const createTables = new CreateTables()
createTables.createUserTable()
createTables.createMusicTable()