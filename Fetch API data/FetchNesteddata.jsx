import { useState, useEffect } from 'react';
import axios from 'axios';
function FetchNesteddata(){
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setComments(res.data))
    .catch( err => console.log(err));

  }, [])

  return (
    <div>
      <table className='table'>
        <thead>
          <tr className="table-heading">
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>ZipCode</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((c,i)=> {
             return <tr key={i}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.username}</td>
                <td>{c.email}</td>  
                <td>{c.phone}</td>
                <td>{c.address.city}</td>
                <td>{c.address.zipcode}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  
  );
}
export default FetchNesteddata;
