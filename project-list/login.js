
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginError: '',
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();

    // Static credentials 
    const validUsername = 'admin@gmail.com';
    const validPassword = 'password';

    const { email, password } = this.state;

    if (email === validUsername && password === validPassword) {
    
      const accessToken = this.generateToken();
      sessionStorage.setItem('accessToken', accessToken);

      this.props.onLoginSuccess();

      this.props.history.push('/project-list');
    } else {
      this.setState({ loginError: 'Invalid username or password.' });
    }
  };

  generateToken() {
    
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 20; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
  }

  render() {
    const { email, password, loginError } = this.state;

    return (
      <form className="mx-auto mt-5"  style={{ width: 400 }}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="submit" className="btn btn-primary" onClick={this.handleLoginSubmit}>
          Login
        </button>
      </form>
    );
  }
}


