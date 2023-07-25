
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
        <>
        {isLoggedIn ? (
          <ProjectList />
        ) : (
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        )}
      </>
    );
  }
}




