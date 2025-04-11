import axios from "axios";
import { appConfig } from "../utils/appConfig";

class PostsService{

    async getAllPosts(){
        // const posts = await axios.get(appConfig.postsUrl);
        // return posts.data;
        const response = await fetch(appConfig.postsUrl);
        const data = await response.json();
        return data;
    }

}
export const postsService = new PostsService();