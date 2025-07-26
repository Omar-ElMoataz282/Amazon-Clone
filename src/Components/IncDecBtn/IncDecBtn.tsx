import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./style.css";

interface Props {
  max: number;
  sendCount: (count: number) => void;
}

function IncDecBtn({ max, sendCount }: Props) {
  const [count, setCount] = useState(1);

  //Send Count
  useEffect(() => {
    sendCount(count);
  }, [count]);

  return (
    <div className="d-flex">
      <button
        type="button"
        className="decreament-button"
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <div>
        <input
          type="number"
          className="input-count form-control rounded-0"
          min={1}
          max={max}
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            if (value >= 1 && value <= max) {
              setCount(parseInt(e.target.value));
            }
          }}
        />
      </div>

      <button
        type="button"
        className="increament-button"
        datatype="plus"
        onClick={() => {
          if (count < max) {
            setCount(count + 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default IncDecBtn;
