import { Outlet, Link, useParams } from "react-router-dom";
import React,{useState,createContext, useEffect} from 'react';
import {  useNavigate } from "react-router-dom";
import './App.css'


const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const currentUser=JSON.parse(localStorage.getItem("current user"));
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={`/users/${id}/info`}>Info</Link>
          </li>
          <li>
            <Link to={`/users/${id}/todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`/users/${id}/posts`}>Posts</Link>
          </li>
          <li>
            <Link to={`/users/${id}/albums`}>Albums</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
      <h1>{currentUser.name}</h1>

      <Outlet />


    </>
  )
};

export default Layout;
