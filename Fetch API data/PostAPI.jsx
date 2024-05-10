import React, { useState } from 'react';
import axios from 'axios';
import './PostAPI.css';
function PostAPI(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, body };
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                alert(`New Post Created with ID: ${response.data.id}`);
            })
            .catch(error => {
                console.error('Error creating a post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input" placeholder="Title" /><br />
            <textarea value={body} onChange={(e) => setBody(e.target.value) } className="textarea" placeholder="Body"></textarea><br />
            <button type="submit" className='button'>Create Post</button>
        </form>
    );
}
export default PostAPI;
