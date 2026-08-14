import "./Header.css";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <h1>Dream Team Designer</h1>
      <img className="logo" src={logo} alt="logo.png" />
      <h2>
        <em>Find the right canditates for your company!</em>{" "}
      </h2>
    </header>
  );
}
