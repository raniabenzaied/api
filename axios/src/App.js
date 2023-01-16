import './App.css';
import axios from 'axios';
import UserList from './UserList';
import {useEffect,useState} from 'react'

function App() {
  const[user,setUser] = useState([]);
  const [error,setError] = useState(null)

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){

      console.log(response)
      setUser(response.data);

    })
    .catch(function(error){
    setError(error);
  })
},[]);




  return (
    <div className="App">
     <h1>user's list</h1>
     {<UserList user = {user}/>}
    </div>
  );
}

export default App;
