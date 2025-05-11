import Link from "next/link";

const NavItems: NavItemType[] = [
  { href: "/", label: "Home" },
  { href: "/log", label: "Log" }
]

const Navigation = () => {
  return (
    <nav>
      <ul>
        {NavItems.map((item, index) =>
          <li key={item.href}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        )}</ul>
    </nav>
  );
}
export default Navigation;
