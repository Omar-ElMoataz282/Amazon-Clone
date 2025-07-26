import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.png";
import MultipleLang from "../../MultipleLang/MultipleLang";

function SecondSection() {
  return (
    <div className="d-flex justify-content-center gap-5 py-3">
      <Link to={"/"}>
        <img src={Logo} alt="Logo-Image" />
      </Link>

      <Link to={"#"} className="pt-1">
        <div className="text-white">
          <MultipleLang isNav={false} />
        </div>
      </Link>
    </div>
  );
}

export default SecondSection;
