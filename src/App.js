import './App.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import { useState } from 'react';

function App() {
  const [users,setNewUser]=useState([]);
  const setUserHandler=(user,age)=>{
    setNewUser(prevUsers=>[...prevUsers,{name:user , age:age,id:Math.random().toString()}])

  }
  return (
    <div className="App">
      
      <AddUser setUserHandler={setUserHandler}></AddUser>
      <UserList users={users}></UserList>

    </div>
  );
}

export default App;
