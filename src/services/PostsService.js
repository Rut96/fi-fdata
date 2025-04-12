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

    async addPost(post){
        // const response = await axios.post(appConfig.postsUrl, post);
        // return response.data;

        const response = await fetch(appConfig.postsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        return data;
    }

}
export const postsService = new PostsService();