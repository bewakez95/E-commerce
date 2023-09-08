import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidelink = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Categories",
      path: "/category",
    },
    {
      label: "Products",
      path: "/product",
    },
    {
      label: "Payment",
      path: "/payment",
    },
    {
      label: "Orders",
      path: "/orders",
    },
    {
      label: "Reviews",
      path: "/reviews",
    },
  ];
  return (
    <nav className="main bg-dark text-white" expand="lg">
      <div className="text-center">Admin Account</div>
      <hr />
      <ul className="list-unstyled">
        {sidelink.map(({ label, path }) => (
          <li className="ms-2 py-2">
            <Link className="nav-link" to={path}>
              {label}
            </Link>
          </li>
        ))}
        <hr />
        <li>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
