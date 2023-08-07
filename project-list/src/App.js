import './App.css';
import React,{useState} from 'react';
import LoginForm from './login';
import ProjectList from './project-list';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <>
      {isLoggedIn ? <ProjectList /> : <LoginForm onLoginSuccess={handleLoginSuccess} />}
    </>
  );
}

export default App;
