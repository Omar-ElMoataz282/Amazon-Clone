import { Link } from "react-router-dom";
import Logo from "../../../Assets/logoBlack.png";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../style.css";
import SearchAccountToLogin from "../../../Utils/auth/SearchAccToLogin";
import { useTranslation } from "react-i18next";

function LogIn() {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setErr(`${t("auth.errFields")}`);
    } else {
      const result = SearchAccountToLogin({
        email: email,
        password: password,
      });
      if (result && result.success) {
        setErr("");
        window.location.pathname = "/";
      } else {
        setErr(`${t(result.message)}`);
      }
    }
  }

  return (
    <div className="bg-white d-flex flex-column gap-2 gap-md-4  align-items-center pt-3 pt-md-4 calc-height-form">
      <div>
        <img
          src={Logo}
          alt="logo"
          width={120}
          height={40}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="border rounded p-3 p-md-4 col-11 col-sm-8 col-lg-4">
        <h5 className="mb-0 mb-md-3">{t("auth.login.header")}</h5>

        <div className="overflow-hidden">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mt-2">
              <Form.Label className="d-block w-100 mb-0 p-0 ps-1">
                {t("auth.email")}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t("auth.email") + "..."}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                style={{ boxShadow: "none", outline: "none" }}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-2">
              <Form.Label className="d-block w-100 mb-0 p-0 ps-1">
                {t("auth.password")}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder={t("auth.password") + "..."}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                style={{ boxShadow: "none", outline: "none" }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="mt-2 w-100 border-0 text-black rounded-5"
              style={{ backgroundColor: "gold" }}
            >
              {t("auth.login.button")}
            </Button>
          </Form>
        </div>

        {err && (
          <p className="mt-2 mb-0 bg-danger p-2 rounded-1 text-white text-center">
            {err}
          </p>
        )}

        <p className="mt-2 mb-1">
          {t("auth.footer")} <Link to="#">{t("auth.footerLink")}</Link>{" "}
          {t("auth.and")} <Link to="#">{t("auth.footerLink2")}</Link>.
        </p>

        <Link to="#">{t("auth.help")}</Link>
      </div>
    </div>
  );
}

export default LogIn;
