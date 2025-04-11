import axios from "axios";
import { appConfig } from "../utils/appConfig";

class UserService {

    async getAllUsers() {
        const result = await axios.get(appConfig.usersUrl);
        return result.data;
    }

    async getUserById(userId) {
        const result = await axios.get(`${appConfig.usersUrl}/${userId}`);
        return result.data;
    }

    async addUser(user) {
        const result = await axios.post(appConfig.usersUrl, user);
        return result.data;
    }

    async deleteUser(userId) {
        const result = await axios.delete(appConfig.usersUrl + userId);
        return result.data;
    }


}

export const userService = new UserService();