export class Music {
    constructor(
        private music_id: string,
        private music_name: string,
        private author: string,
        private date: string,
        private file: string,
        private album: string,
        private user_id: string
    ) { }

    getMusicId() {
        return this.music_id;
    }

    getMusicName() {
        return this.music_name
    }

    getAuthor() {
        return this.author;
    }

    getDate() {
        return this.date;
    }

    getFile() {
        return this.file;
    }

    getAlbum() {
        return this.album
    }

    getUserId() {
        return this.user_id
    }

    setMusicId(music_id: string) {
        this.music_id = music_id;
    }

    setMusicName(music_name: string) {
        this.music_name = music_name;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    setDate(date: string) {
        this.date = date;
    }

    setFile(file: string) {
        this.file = file;
    }

    setAlbum(album: string) {
        this.album = album
    }

    setUserId(user_id: string) {
        this.user_id = user_id
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

    static toUserModel(music: any): Music {
        return new Music(
            music.music_id,
            music.music_name,
            music.author,
            music.date,
            music.file,
            music.album,
            music.user_id
        );
    }
}

export interface MusicInputDTO {
    music_name: string;
    author: string;
    file: string;
    album: string;
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
