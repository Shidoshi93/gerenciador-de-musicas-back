import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "Users_MM";

  public async createUser(
    user_id: string,
    user_name: string,
    email: string,
    password: string,
    nickname: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          user_id,
          user_name,
          email,
          password,
          nickname
        })
        .into(UserDatabase.TABLE_NAME);
        BaseDatabase.destroyConnection()
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}
