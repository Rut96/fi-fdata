import axios from "axios";
import { appConfig } from "../utils/appConfig";

class CommentsService{

    async getAllComments() {
        const comments = await axios.get(appConfig.commentsUrl);
        return comments.data;
    }

    async getCommentsById(id){
        const comments = await axios.get(`${appConfig.commentsUrl}/${id}`)
        return comments.data
    }
}

export const commentsService = new CommentsService();