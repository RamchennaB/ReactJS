import React from "react";
import axios from "axios";

const PutAPI = () => {
  const postId = 1; // 
  const updatedData = { title: "New Title", body: "Updated body text" };

  const handleUpdate = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData)
      .then((response) => {
        console.log("Updated Post:", response.data);
      })
      .catch((error) => {
        console.error("Error updating the post:", error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
};

export default PutAPI;
