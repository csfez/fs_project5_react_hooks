import React,{useState,useEffect} from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages";
// import Home from "./home";

export default function App(){
//   const [resourceType,setResourceType]= useState('posts')
  const [items,setItems]=useState([])

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[])

  return(
    <>
      {/* <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>users</button>
        <button onClick={()=>setResourceType('comments')}>comments</button>
      </div> */}
      
      <h2>Albums</h2>
      {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}