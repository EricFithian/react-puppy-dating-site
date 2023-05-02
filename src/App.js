import './App.css';
import { useState } from 'react';
import Dogs from './components/Dogs';

function App() {
  const [likes, setLikes] = useState(0)

  function updateLikes() {
    let currentLikes = likes;
    currentLikes++;
    setLikes(currentLikes)
  }

  return (
    <>
      <div className="App">
        <h1>Dogs Dating App</h1>
      </div>
      <div className="likes">
        <h2>Number of dogs who like this: {likes}</h2>
        <button onClick={updateLikes}>Add to the likes</button>
      </div>
      <Dogs a="b" c="3"/>
    </>
  );
}

export default App;
