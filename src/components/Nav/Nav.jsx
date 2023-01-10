import "./Nav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [selected, setSelected] = useState("about");

  const selectionChange = (option) => setSelected(option);

  const setClassName = (option) =>
    selected !== option
      ? "nav__about"
      : "nav__about--clicked";

  return (
    <div className="nav">
     <Link
        to="/"
        onClick={() => selectionChange("about")}
        className={setClassName("about")}
      >
       <h1 className="nav__text">About</h1>
      </Link>
      <Link
        to="/findtheiss"
        onClick={() => selectionChange("iss")}
        className={setClassName("iss")}
      >
        <h1 className="nav__text"> Find the I.S.S</h1>
      </Link>

    </div>
  );
};

export default Nav;
