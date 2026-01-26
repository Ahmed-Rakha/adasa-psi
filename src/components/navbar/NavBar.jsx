import { NavLink } from "react-router";
import AdasaMainButton from "../reusable-cpt/buttons/AdasaMainButton";
import classes from "./navbar.module.css";
import logo from "../../assets/images/logo-GdqARQRt.png";

export default function NavBar({ siteInfo }) {
  console.log(siteInfo);
  return (
    <nav className={`${classes["bg-main-color"]} py-3 fixed-top`}>
      <div
        className={`container d-flex justify-content-between align-items-center`}
      >
        <div className="nav-right-side d-flex align-items-center gap-2">
          <div className="logo-container" style={{ width: "50px" }}>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h1 className="text-lg mb-0">{siteInfo.name}</h1>
            <p className="text-xs mb-0">{siteInfo.tagline}</p>
          </div>
        </div>
        <div className={classes["nav-center-side"]}>
          <ul className="d-flex gap-4 list-unstyled mb-0 justify-content-start align-items-center py-2 px-3 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                المدونة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                من نحن
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-left-side  d-flex align-items-center">
          <span
            className={`ms-3 ${classes["search-icon"]} d-flex justify-content-center align-items-center`}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <AdasaMainButton
            fontSize="14px"
            borderRadius="50px"
            padding="15px 20px"
          >
            تواصل معنا
          </AdasaMainButton>
        </div>
      </div>
    </nav>
  );
}
