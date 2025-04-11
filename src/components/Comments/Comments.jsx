import { useEffect, useState } from 'react';
import './Comments.css'
import { commentsService } from '../../services/CommentsService';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Loading } from '../Loading/Loading';

export function Comments({ postId }) {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const fetchedAllComments = await commentsService.getAllComments();
                const fetchedComments = fetchedAllComments.filter(c => c.postId === postId);
                setComments(fetchedComments);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [])

    return (
        <div className="Comments">
            {loading && <Loading />}

            {comments && comments.map(c => (
                <div className="comment" key={c.id}>
                    <div className="comment-header">
                        {c.name}
                        <div className="comment-email">
                            <MailOutlineIcon />
                            <div className="side-email">
                                {c.email}
                            </div>
                        </div>
                    </div>
                    <div className="comment-body">
                        {c.body}
                    </div>
                </div>
            ))}
        </div>
    );
}
