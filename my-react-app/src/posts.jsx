
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams ,useNavigate} from "react-router-dom";


import './App.css'

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedItemComments, setSelectedItemComments] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("current user"));
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, []);

  const filteredItems = items.filter(item => {
    return item.userId === currentUser.id;
  });

  const handleClick = (item) => {
    if(selectedItem===item){
      setSelectedItem('');
    }
    else{
      setSelectedItem(item);
    }
     
  }

  const handleClickComments = (item) => {
  
    if(selectedItemComments===item){
      setSelectedItemComments(null);
      navigate(`/users/${item.userId}/posts`);
    }
    else{
      setSelectedItemComments(item);
      navigate(`/users/${item.userId}/posts/${item.id}/comments`);

    }

  };
  return (
    <>
      <h2>Posts</h2>
        {filteredItems.map(item => {
          return (
            <>
              <div className='post'>
                <div key={item.id} className={selectedItem === item ? 'selected' : ''}>
                
                  <div className="post-title" onClick={() => handleClick(item)}>
                
                    <strong>{item.title}</strong> <br/> <br/>
                    <span>{item.body}</span>

                  </div>
                </div>
                  
                <button className='post-buttons' onClick={() => handleClickComments(item)}>Comments</button>
                {item===selectedItemComments?<Outlet/>:null}
              </div>
            </>
          );
        })}
      
    </>
  );
 
  
}

// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from "react-router-dom";

// import './App.css'

// export default function Posts() {
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const currentUser = JSON.parse(localStorage.getItem("current user"));
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, []);

//   const filteredItems = items.filter(item => {
//     return item.userId === currentUser.id;
//   });

//   const handleClick = (item) => {
//     setSelectedItem(item);
//   }

//   return (
//     <>
//       <h1>Posts</h1>
//       <div className="posts-container">
//         {filteredItems.map(item => {
//           return (
//             <div key={item.id} className={selectedItem === item ? 'selected' : ''}>
//               <div className="post-title" onClick={() => handleClick(item)}>
//                 <pre>{JSON.stringify(item.title)}</pre>
//               </div>
//               <div className="post-body">
//                 <pre>{JSON.stringify(item.body)}</pre>
//               </div>
//             </div>
//           );
//         })}
//       </div>
      
//     </>
//   );
// }

