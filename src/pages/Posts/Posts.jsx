import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Comments } from '../../components/Comments/Comments';
import { PostCard } from '../../components/PostCard/PostCard';
import { SearchPost } from '../../components/SearchPost/SearchPost';
import { postsService } from '../../services/PostsService';
import { userService } from '../../services/UserService';
import './Posts.css';

export function Posts() {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const [userName, setUserName] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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


    // useEffect for Search 
    useEffect(() => {
        if (searchValue.trim() !== '') {
            const filteredPosts = posts.filter(p => p.title.includes(searchValue) || p.body.includes(searchValue))
            setFilteredPosts(filteredPosts);
        }
    }, [searchValue])

    async function handlePopup(postId) {
        const post = posts.find(p => p.id === postId);
        setSelectedPost(post);
        setShowPopup(true);

        // Take userName
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
    }

    function handleSearchPost(searchValue) {
        setSearchValue(searchValue);
    }

    const displayPosts = searchValue.length > 0 ? filteredPosts : posts;

    return (
        <div className="Posts">

            <div className="filter-container">
                <SearchPost handleSearchPost={handleSearchPost} />
                <NavLink to='/add-post'>
                    <div className="add-icon"></div>
                </NavLink>
            </div>

            <div className="posts-container">
                {displayPosts && displayPosts.map(post => (
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
                                    <Comments postId={selectedPost.id} />
                                </div>
                            }
                        </div>



                    </div>
                </div>

            )}

        </div>
    );
}