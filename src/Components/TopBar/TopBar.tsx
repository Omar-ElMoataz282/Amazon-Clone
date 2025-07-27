import Logo from "../../Assets/logo.png";
import CartR from "../../Assets/cartr.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretRight,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./TobBar.css";
import { Link } from "react-router-dom";
import i18n from "../../i18n/Trans";
import MultipleLang from "../MultipleLang/MultipleLang";
import MultipleSelc from "../MultipleSelc/MultipleSelc";
import GlassPage from "../GlassPage/GlassPage";
import { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import SideBar from "../SideBar/SideBar";
import { useScreenSize } from "../../Utils/Size";
import GetDataFromLocalStorage from "../../Utils/GetDataFromStorage";
import { CartItems } from "../../Contexts/RefreshData";
import SignButtons from "../SignButtons/SignButtons";
import SearchBar from "../SearchBar/SearchBar";
import GetCurrentUser from "../../Utils/GetCurrentUser";

function TopBar() {
  //For Count in Cart
  const [count, setCount] = useState(0);
  const refresh = useContext(CartItems);

  // For Current User
  const user = GetCurrentUser();

  //Get Screen size
  const screenSize = useScreenSize() as number;

  // For Translation
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const { t } = useTranslation();

  // For Glass Page
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef(null);

  // For Side Bar Opening
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // For Count
  useEffect(() => {
    const count = GetDataFromLocalStorage().length;
    setCount(count);
  }, [refresh?.isChanged]);

  return (
    <>
      <div
        style={{ zIndex: 10 }}
        className="top-bar position-relative text-white px-2 pb-3 pb-md-1 d-flex align-items-stretch justify-content-between flex-wrap"
      >
        {/*Amazon Logo*/}
        <div className="col-6  col-sm-4 col-md-2 d-flex justify-content-between order-1 order-md-1">
          {/*First Section Logo*/}
          <div className="d-flex col-12 col-xl-5 align-self-center">
            <FontAwesomeIcon
              icon={faBars}
              className={`mt-1 pt-1 point fs-5 d-sm-none ${
                isArabic ? "me-2" : "ms-2"
              }`}
              onClick={() => setIsOpen(true)}
            />

            <Link to={"/"} className="text-white">
              <div
                className={`ms-md-0 pt-1 logo position-relative ${
                  isArabic && "me-lg-3"
                }`}
              >
                <img src={Logo} alt="Logo" />
                {/*.Eg*/}
                <span className="position-absolute d-none d-sm-block d-sm-none d-lg-block">
                  {isArabic ? "eg." : ".eg"}
                </span>
              </div>
            </Link>
          </div>

          {/*Second Section Location*/}
          <div className="col-5 d-none d-xl-flex py-1 align-items-start justify-content-center point gap-1">
            <FontAwesomeIcon icon={faLocationDot} className="mt-3" />
            <p className="m-0 lh-1 nav-loc">
              <span>{t("nav.location")}</span> <br />
              <span className="fw-bold">{t("nav.country")}</span>
            </p>
          </div>
        </div>

        {/*Search Bar*/}
        <div className="col-12 col-md-5 col-lg-6 d-flex align-items-start pt-1 order-3 order-md-1">
          <div className="d-flex w-100">
            {/* Select Box*/}
            <MultipleSelc />

            <SearchBar sendShow={setShow} />
          </div>
        </div>

        {/*Icons*/}
        <div className="col-6 col-sm-8 col-md-5 col-lg-4 gap-md-1 d-flex align-items-stretch order-2 order-md-1">
          {/*Languages*/}
          <div className="position-relative col d-none d-sm-flex align-items-center justify-content-center point show-ul">
            <MultipleLang isNav={true} />
          </div>

          {/*Sign in*/}
          <div className="col d-flex align-items-center justify-content-end justify-content-sm-center point position-relative show-ul">
            <p className="d-none d-sm-block m-0 pb-2 lh-1 position-relative ws-nowrap">
              <span className="fs-12">{t("nav.sign")}</span>
              {user ? (
                <span className="fs-12">{", " + user}</span>
              ) : (
                <span className="fs-12">
                  {", "}
                  {t("nav.signIn")}
                </span>
              )}

              <br />

              <span className="fw-bold fs-13 ws-nowrap">
                {t("nav.account")}
              </span>
              <span className="arrow mb-2"></span>
            </p>

            <p className="d-block d-sm-none m-0 fs-13 ws-nowrap pb-1">
              {user ? (
                <span>
                  <span className="fs-12">{user + " "}</span>
                </span>
              ) : (
                <span>
                  {t("nav.sign_in")} <FontAwesomeIcon icon={faCaretRight} />{" "}
                </span>
              )}
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
            <SignButtons />
          </div>

          {/*Orders*/}
          <Link
            to="/orders"
            className="col d-none d-sm-flex justify-content-center align-items-end point text-white"
          >
            <div>
              <p className="mb-2 pb-1 fw-bold">
                <span className="wts-nowrap">{t("nav.orders")}</span>
              </p>
            </div>
          </Link>

          {/*Cart*/}
          <Link
            to="/cart"
            className="col d-flex align-items-center justify-content-center justify-content-sm-start position-relative point hide-img"
          >
            <div className="position-relative">
              <img src={CartR} alt="Cart" />
              <span className="position-absolute cart-num">{count}</span>
            </div>
            <p
              className={`m-0 fw-bold position-absolute cart ws-nowrap text-white ${
                isArabic ? "fs-12 d-none d-xl-block" : "d-none d-lg-block"
              }`}
              style={{
                left: isArabic ? "5px" : "",
              }}
            >
              {t("nav.cart")}
            </p>
          </Link>
        </div>
      </div>

      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <GlassPage onClick={() => setShow(false)} />
        </div>
      </CSSTransition>

      {screenSize < 576 && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default TopBar;
