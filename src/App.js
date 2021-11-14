import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8_TWxeHBvh7xlY5jv4EG9KcIArgKIKKgcA&usqp=CAU" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://tinypng.com/images/social/website.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          my posts
          <div>new posts</div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
