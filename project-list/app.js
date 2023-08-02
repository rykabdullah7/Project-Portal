function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
