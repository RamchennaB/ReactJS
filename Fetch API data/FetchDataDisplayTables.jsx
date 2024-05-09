import { useState, useEffect } from 'react';
import axios from 'axios';
function FetchDataDisplayTables(){
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => setComments(res.data))
    .catch( err => console.log(err));

  }, [])

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>PostId</th>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((c,i)=> {
             return <tr key={i}>
                <td>{c.postId}</td>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>  
                <td>{c.body}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  
  );
}
export default FetchDataDisplayTables;
