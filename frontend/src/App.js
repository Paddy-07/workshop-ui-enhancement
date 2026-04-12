// Improved UI structure
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">FOSSEE Workshops</h1>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Workshops</a>
          <a href="#">Statistics</a>
        </div>
      </nav>

      {/* Login Section */}
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <p className="subtitle">Access your account</p>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>

          <div className="extra">
            <span>Sign up</span>
            <span>Forgot?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;