import './PostCard.css'

export function PostCard({ post, handleOpen }) {

    function openPost(){
        handleOpen(post.id)
    }

    return (
        <div className="PostCard" onClick={openPost}> 
            <div className="post-header">
                {post.title}
            </div>
            <div className="post-body">
                {post.body}
            </div>
        </div>
    );
}