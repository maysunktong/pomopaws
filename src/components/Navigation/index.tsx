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
      <div>
        <section>
          <ul>
            {NavItemList.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        {username && pathname === "/" && (
          <section>
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
