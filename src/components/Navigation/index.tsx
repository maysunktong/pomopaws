import Link from "next/link";

const NavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/log", label: "Log" },
];

const Navigation = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <img src="/logo/logo.png" alt="logo" width={150} />
      </Link>
      <div className="nav__items">
        {NavItems.map((item, index) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navigation;
