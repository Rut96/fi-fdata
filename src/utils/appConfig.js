class AppConfig {
    #baseUrl // # makes it private on es2022+
    constructor() {
        this.#baseUrl = process.env.REACT_APP_BASE_URL;
        this.usersUrl = this.#baseUrl + "/users";
        this.postsUrl = this.#baseUrl + "/posts";
        this.commentsUrl = this.#baseUrl + "/comments";
        Object.freeze(this);
    }
    
    // getUsersUrl() {
    //     return this.#baseUrl + '/users';
    // }
}

export const appConfig = new AppConfig();