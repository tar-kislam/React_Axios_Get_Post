import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
         
        </a>
      </header>
    </div>
  );
}


async function getData(userID) {
  const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
  const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}&id=${userID}`);
  
  const userData = userResponse.data;
  const postsData = postsResponse.data;
  
  return { user: userData, posts: postsData };
}

(async () => {
  const result = await getData(1);
  console.log(result);
})
();

 


export default App;
