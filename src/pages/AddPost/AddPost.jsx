import { useEffect, useState } from 'react';
import './AddPost.css';
import { useForm } from 'react-hook-form';
import { postsService } from '../../services/PostsService';
import { useNavigate } from 'react-router-dom';

export function AddPost() {

    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleAddPost(data) {

        setLoading(true);
        try {
            if (!validate(data)) {
                console.error('Error adding post. ');
                return;
            };

            const newPost = {
                userId: 1,
                title: data.title,
                body: data.body
            };

            const response = await postsService.addPost(newPost);
            
            console.log('Post added successfully!', response);
            navigate('/posts')
        } catch (error) {
            console.error('Error adding post:', error);
        } finally {
            setLoading(false)
            reset();
        }
    }

    function validate(data) {
        if (data.title.trim() === '') {
            return false;
        }
        if (data.body.trim() === '') {
            return false;
        }
        return true;
    }

    return (
        <div className="AddPost">
            <div className="add-post-container">
                <form onSubmit={handleSubmit(handleAddPost)}>
                    <div className="add-input">
                        <label htmlFor="addInputTitle">Title:</label>
                        <input
                            id='addInputTitle'
                            type="text"
                            placeholder='Title'
                            {...register('title')}
                            required
                        />

                        <label htmlFor="addInputBody">Body:</label>
                        <input
                            id='addInputBody'
                            type="text"
                            placeholder='Body'
                            {...register('body')}
                            required
                        />
                    </div>

                    <div className="add-btn">
                        <button type='submit' disabled={loading}>
                            {loading ? 'Adding...' : 'Add'}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}