import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout App</h1>
        </Link>
        <nav>
          {/* here when we havea value for user this will happen 
          and if not the other section
           will show up login and sign up */}
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {/* here when the user is not logged in 
          this secion will show up */}
          {!user && (
            <div>
              <Link to="/Login">Login</Link>
              <Link to="/Signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
