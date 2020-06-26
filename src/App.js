import React from "react";
import Post from "./components/Post";

import posts from './post.json'

function App() {
  return (
    <div className="App">
 
        {posts.map((post,index) => {
          return (<Post
          key={index}
            image={post.image}
            title= {post.title}
            description = {post.description}
          />)
        })}
      />  
    </div>
  );
}

export default App;
