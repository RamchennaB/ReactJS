import { useState, useEffect } from 'react';
function FetchData(){
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch( err => console.log(err));

  }, []);
  return (
    <div className="card">
      <ol className='list'>
        {comments.map((comment) => <li key={comment.id}>{comment.name}&emsp;{comment.email}&emsp;{comment.body}</li>)}
       
      </ol>
    </div>
  );
}
export default FetchData;
