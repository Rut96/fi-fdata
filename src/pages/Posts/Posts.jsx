import { useEffect, useState } from 'react';
import './Posts.css'
import { postsService } from '../../services/PostsService';
import { PostCard } from '../../components/PostCard/PostCard';
import { userService } from '../../services/UserService';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Comments } from '../../components/Comments/Comments';
import CloseIcon from '@mui/icons-material/Close';

export function Posts() {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [userName, setUserName] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const fetchedPosts = await postsService.getAllPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    async function handlePopup(postId) {
        const post = posts.find(p => p.id === postId);
        setSelectedPost(post);
        setShowPopup(true);

        if (post.userId) {
            try {
                const user = await userService.getUserById(post.userId);
                setUserName(user.name || "Unknown user");
            } catch (error) {
                console.error("Error fetching user:", error);
                setUserName("Unknown user");
            }
        }
    }

    function closePopup() {
        setShowPopup(false);
        setSelectedPost(null);
        setShowComments(false);
    }

    function handleComments() {
        setShowComments(!showComments);
        console.log("comments clicked");
    }

    return (
        <div className="Posts">
            <div className="posts-container">
                {posts && posts.map(post => (
                    <PostCard key={post.id} post={post} handleOpen={handlePopup} />
                ))}
            </div>

            {showPopup && selectedPost && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}> {/* prevents clicks on the popup content from "bubbling up"  */}

                        <div className="popup-header">
                            <h2>{selectedPost.title}</h2>
                            <button onClick={closePopup}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="popup-body">
                            <p>{selectedPost.body}</p>
                            <div className="popup-bottom">
                                <p>Author: {userName || "Loading..."}</p>
                               
                                {!showComments ? (
                                    <div className="popup-comments-icon">
                                        <KeyboardArrowDownIcon onClick={handleComments} />
                                    </div>
                                ) : (
                                    <div className="popup-comments">
                                        <div className="popup-comments-icon">
                                            <KeyboardArrowUpIcon onClick={handleComments} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            {showComments &&
                                <div className="popup-comments">
                                    <Comments postId={selectedPost.id}/>
                                </div>
                            }
                        </div>



                    </div>
                </div>

            )}

        </div>
    );
}