"use client";

import Link from "next/link";
import { useUserContext } from "../../context/UserContext";

const Navigation = () => {
  const { username, setUsername, setNameInput, setIsLoginModalOpen } =
    useUserContext();

  const logout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setNameInput("");
    setIsLoginModalOpen(true);
  };
  return (
    <nav className="nav">
      <Link href="/">
        <img src="/logo/logo.png" alt="logo" width={150} />
      </Link>
      <div>
        {username && (
          <section className="flexbox">
            <h1>Hello, {username}!</h1>
            <button className="button-main" type="button" onClick={logout}>
              Logout
            </button>
          </section>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
