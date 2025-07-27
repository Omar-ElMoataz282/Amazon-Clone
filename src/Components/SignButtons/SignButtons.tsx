import { Link } from "react-router-dom";
import i18n from "../../i18n/Trans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

function SignButtons() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  //For Current User
  const user = JSON.parse(localStorage.getItem("Current-Account") || "{}").name;

  //For Sign Out
  function signOut() {
    localStorage.removeItem("Current-Account");
    window.location.reload();
  }

  return (
    <ul
      className="position-absolute top-100 start-0 bg-dark p-0 m-0 sign-buttons"
      style={{ zIndex: "1000" }}
    >
      {!user ? (
        <>
          <Link to="/register" className="text-white">
            <li
              className={`py-2 border-bottom d-flex align-items-center gap-3 link-hover text-nowrap ${
                isArabic ? "pe-3 ps-5" : "ps-3 pe-5"
              }`}
            >
              <FontAwesomeIcon icon={faUserPlus} />
              {t("auth.registerLink")}
            </li>
          </Link>

          <Link to="/login" className="text-white">
            <li
              className={`py-2 d-flex align-items-center gap-3 link-hover text-nowrap ${
                isArabic ? "pe-3 ps-5" : "ps-3 pe-5"
              }`}
            >
              <FontAwesomeIcon icon={faUser} />
              {t("auth.loginLink")}
            </li>
          </Link>
        </>
      ) : (
        <li
          className={`py-2  d-flex align-items-center gap-3 text-nowrap ${
            isArabic ? "pe-3 ps-4" : "ps-3 pe-4"
          }`}
          onClick={signOut}
        >
          <Button className="d-flex align-items-center gap-3 text-nowrap bg-transparent border-0 p-0">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

            {t("auth.signOut")}
          </Button>
        </li>
      )}
    </ul>
  );
}

export default SignButtons;
