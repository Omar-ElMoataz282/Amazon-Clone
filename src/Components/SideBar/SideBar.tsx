import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import GlassPage from "../GlassPage/GlassPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import CategoriesList from "../SideBarItems/Categories/CategoriesList";
import { Link } from "react-router-dom";
import Settings from "../SideBarItems/Settings/Setting";
import { useTranslation } from "react-i18next";
import type { SideBarProps } from "../../Types/Types";

function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  // For Multiple Lang
  const { t } = useTranslation();

  // For SideBar Openening
  const show = isOpen;

  // For Css Transition
  const nodeRef = useRef(null);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link to="#" className="sidebar-header">
          <span className="bg-white text-black rounded-circle user-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h5 className="m-0 fw-bold">{t("side.header")}</h5>
        </Link>

        <div className="list-div">
          <CategoriesList />

          <hr className="m-0" />

          <Settings />
        </div>

        <span className="close" onClick={() => setIsOpen(false)}>
          X
        </span>
      </div>

      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <GlassPage zIndex={900} onClick={() => setIsOpen(false)} />
        </div>
      </CSSTransition>
    </>
  );
}

export default SideBar;
