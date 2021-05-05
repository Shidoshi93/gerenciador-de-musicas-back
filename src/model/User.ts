export class User {
    constructor(
        private user_id: string,
        private name: string,
        private email: string,
        private password: string,
        private nickname: string
    ) { }

    getId() {
        return this.user_id;
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getNickname() {
        return this.nickname;
    }

    setId(user_id: string) {
        this.user_id = user_id;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setNickname(nickname: string) {
        this.nickname = nickname;
    }

    static stringToUserRole(input: string): UserRole {
        switch (input) {
            case "NORMAL":
                return UserRole.NORMAL;
            case "ADMIN":
                return UserRole.ADMIN;
            default:
                throw new Error("Invalid user role");
        }
    }

    static toUserModel(user: any): User {
        return new User(user.user_id, user.user_name, user.email, user.password, user.nickname);
    }
}

export interface UserInputDTO {
    email: string;
    password: string;
    user_name: string;
    nickname: string;
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}