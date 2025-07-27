import Form from "react-bootstrap/Form";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18n from "../../i18n/Trans";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ sendShow }: { sendShow: (show: boolean) => void }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // For Translation
  const lang = i18n.language;
  const isArabic = lang === "ar";

  function handleSearch() {
    if (searchValue !== "") {
      navigate(`/search-result?query=${encodeURIComponent(searchValue)}`);
      setSearchValue("")
    } else {
      window.alert("Please enter a search query.");
    }
  }

  return (
    <div className="position-relative w-100">
      <Form.Control
        type="search"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        onFocus={() => sendShow(true)}
        className={`form-control ${
          isArabic ? "rounded-end-0" : "rounded-start-0"
        }`}
        placeholder={`${isArabic ? "بحث عن المنتجات" : "Search products"}`}
      />

      <button
        className={`btn position-absolute rounded-0 top-0 h-100 px-3 ser-but ${
          isArabic ? "start-0 rounded-start-1" : "end-0 rounded-end-1"
        }`}
        type="button"
        onClick={() => {
          handleSearch();
          sendShow(false);
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
      </button>
    </div>
  );
}

export default SearchBar;
