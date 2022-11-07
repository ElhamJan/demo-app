import { NavLink, useParams } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "About us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "blogs", to: "/blogs" },
  { name: "post", to: "/post" },
];

const Navigation = (props) => {
  const params = useParams();

  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "active-link" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
