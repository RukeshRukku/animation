import './App.css';

console.log("Rukesh rukku")

function App() {
  return (
    <div className='bg'>
      <div className='card'>
        <form className="login-form-card">
          <h2 className="login-form-head">Login</h2>
          <label className="login-form-label" htmlFor="username">Username</label>
          <input className="login-form-input"
            id="username" 
            placeholder="Type Username"
            type="text"
            required
          />
          <label className="login-form-label" htmlFor="password">Password</label>
          <input className="login-form-input"
            id="password" 
            placeholder="Type Password"
            type="password"
            required
          />
          <div className="flex">
            <input type="checkbox" className="checkbox"/>
            <span className="span">Show Password</span>
          </div>
          <input type="submit"
            className="login-form-btn"
            value="Login"
          />
          <a href="" className="forgot">Forgot Password?</a>
          <hr className="hr" />
          <button href="" className="signup">New Register/Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
