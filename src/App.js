
import { useState } from 'react';
import './App.css';
import Header from "./Header";
import Post from './Posts';
import { Provider, LikeButton } from "@lyket/react";
//import Buttons from "./Buttons"
//import Buttons from "./Buttons"
//import Heart from "react-animatede-heart";

function App() {

//   <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
//   <LikeButton
//     namespace="testing-react"
//     id="everybody-like-now"
//   />
// </Provider>
  
  const [posts,setPost] = useState([
    {
    username : "Michael",
     caption : "Welcome guys",
     imgUrl : "https://i.ytimg.com/vi/zeO1yrVeC0U/maxresdefault.jpg "
      

    },

    
    {
      username:"BMW Motors",
       caption:" The New BMW M3",
      imgUrl:"https://i.pinimg.com/originals/f3/e9/f3/f3e9f334e21c0d96e5849bde5f9e5fb7.jpg"
     
    },
    
    {
      username:"Boera",
       caption:"Heyyyy", 
       imgUrl:"https://goodnewsdaily.co.za/good-news/2019/10/Busby.jpg"
       
    }
    
  ]);

  

  return (
    <div className="app">
    


      <Header/>
     
      {
       
         posts.map(post=>(
          <Post username={post.username} 
          caption= {post.caption}
            imgUrl = {post.imgUrl}

            
            
          />
          
        )
        
        )
        
        
       }
            
      {/* Posts */}
      {/* <Post/>
      <Post/>
      <Post/> */}
      {/* Posts */}
    </div>
  );
}

export default App;
