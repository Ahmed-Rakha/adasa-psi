import { NavLink } from "react-router";
import AdasaMainButton from "../reusable-cpt/buttons/AdasaMainButton";
import classes from "./navbar.module.css";
import logo from "../../assets/images/logo-GdqARQRt.png";

export default function NavBar({ siteInfo }) {
  return (
    <nav className={`${classes["bg-main-color"]} py-3 fixed-top`}>
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="nav-right-side d-flex align-items-center gap-2">
          <div className="logo-container" style={{ width: "50px" }}>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h1 className="text-lg mb-0">{siteInfo.name}</h1>
            <p className="text-xs mb-0">{siteInfo.tagline}</p>
          </div>
        </div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adasaNav"
          aria-controls="adasaNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="adasaNav"
          className={`collapse d-lg-flex align-items-center gap-4 w-100  justify-content-between`}
        >
          <div></div>
          <div className={classes["nav-center-side"]}>
            <ul className="d-flex gap-4 list-unstyled mb-0 justify-content-start align-items-center py-2 px-3 flex-column flex-lg-row">
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

          <div className="nav-left-side d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <span
              className={`${classes["search-icon"]} d-flex justify-content-center align-items-center`}
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
      </div>
    </nav>
  );
}
