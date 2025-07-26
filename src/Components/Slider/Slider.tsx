import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

function Slider() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const images = [
    "header1.jpg",
    "header2.jpg",
    "header3.jpg",
    "header4.jpg",
    "header5.jpg",
    "header6.jpg",
    "header7.jpg",
  ];

  const showItems = images.map((image, key) => {
    return (
      <Carousel.Item key={key}>
        <img
          src={`/Assets/${lang}/${image}`}
          alt=""
          className="d-block w-100"
        />
      </Carousel.Item>
    );
  });

  return <Carousel data-bs-theme="dark">{showItems}</Carousel>;
}

export default Slider;
