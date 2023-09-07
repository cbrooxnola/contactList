import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] =useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1);

  useEffect (() => {
    const fetchUsers = async () => {
    const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
    const json = await response.json();
    setUsers(json);
  }
    fetchUsers();
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash.slice(1)*1);
    });
  }, []);

  const user = users.find( user => hash === user.id);

  return (
    <>
    <h1>Contact List ({ users.length })</h1>
    { user ? <p>user.address</p>: null }
    <ul>
      {
        users.map( user =>{
          return (
            <li key={user.id} className={ user.id === hash ? 'selected': ''}>
              <a href={`#${user.id === hash ? '': user.id}`}>
              {user.name}
              </a>
            </li>
          );
        })
      }
    </ul>
    <hr />
      
      
      
    </>
  )
}

export default App
