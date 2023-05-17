import { useParams ,useLocation} from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import './App.css'


const Comments = () => {
  const { id, postid } = useParams();
  const [items, setItems] = useState([]);
  const location = useLocation();

  const selectedItem = location.state && location.state.selectedItem;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, []);

  const filteredItems = items.filter(item => {
    return item.postId === parseInt(postid);
  });

  return (
    <div className="comments">
      {/* <h2>Comments for post {postid} by user {id}</h2> */}
      {selectedItem && <pre>{selectedItem.title}</pre>}
      {filteredItems.map(item => {
        return (
        <>
          <strong>{item.email}: {item.name}</strong> 
          <pre>{item.body}</pre>
        </>)
      })}
    </div>
  );
};

export default Comments;
