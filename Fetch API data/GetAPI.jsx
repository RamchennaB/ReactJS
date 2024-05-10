import React, {useState, useEffect} from 'react';
import axios from 'axios';
function GetAPI(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data);
        })
        .catch(error =>{
            console.error('Error while fetching data', error);
        });
    }, []);

    return(
        <div>
            <h1>Posts</h1>
            { posts.map((post) => 
                <div key={post.id}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>
                </div>
            )}
        </div>
    );
}
export default GetAPI;
