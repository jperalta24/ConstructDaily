import { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function MyNav({ links }) {
  const [active, setActive] = useState(
    links && links.length ? links[0].link : ""
  );

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Link className="btn btn-lg btn-info m-2" to="/profile">
            {Auth.getProfile().data.name}
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/">
            HomePage
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/projects">
            ProjectPage
          </Link>
          {/* <Link className="btn btn-lg btn-info m-2" to="/dailylog">
            DailyLogPage
          </Link> */}
          <Link className="btn btn-lg btn-info m-2" to="/" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="btn btn-lg btn-info m-2" to="/signup">
            Signup
          </Link>
          <Link className="btn btn-lg btn-light" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default MyNav;