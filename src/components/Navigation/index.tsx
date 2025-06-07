"use client";

import Link from "next/link";
import { useUserContext } from "../../context/UserContext";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const { username, setUsername, setNameInput, setIsLoginModalOpen } =
    useUserContext();

  const logout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setNameInput("");
    setIsLoginModalOpen(true);
  };

  const pathname = usePathname();

  const NavItemList: NavItemType[] = [
    { label: "Home", href: "/" },
    { label: "Statistics", href: "/stats" },
  ];

  return (
    <nav className="nav">
      <section className="navbar-container">
        {NavItemList.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`menu ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </section>
      {username && (
        <section className="username-container">
          <p>Hello,{` ${username}`}!</p>
          <button className="button-main" type="button" onClick={logout}>
            Logout
          </button>
        </section>
      )}
    </nav>
  );
};
export default Navigation;
