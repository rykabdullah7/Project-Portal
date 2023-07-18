class LoginForm extends React.Component {
  
  render() {
      return (
          <>
          <form class="mx-auto mt-5" id="login-form" style="width:400px">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password"></input>
            </div>
            <p id="login-error" class="error-message"></p>  
            <button type="submit" id="submit" class="btn btn-primary">Login</button>
          </form>
          </>
      );
  }
}


