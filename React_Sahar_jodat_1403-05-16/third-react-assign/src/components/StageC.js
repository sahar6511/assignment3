import React from "react";
import { useFetchData } from "./hooks/useFetchData";
import { useLocalStorage } from "./hooks/useLocalStorage";

const StageC = () => {
  const [data] = useFetchData("C");
  const [chairInfo, setChairInfo] = useLocalStorage([]);
  return (
    <div>
      {data.length !== 0 &&
        data.map((item) => {
          return (
            <button
              title={item.price}
              key={item.number}
              id={item.number}
              data-number={item.number}
              data-section={item.section}
              data-price={item.price}
              data-state={item.state}
              onClick={(event) =>
                setChairInfo({
                  id: event.currentTarget.dataset.number,
                  section: event.currentTarget.dataset.section,
                  price: event.currentTarget.dataset.price,
                  state: event.currentTarget.dataset.state,
                  qty: 0,
                })
              }
            >
              {item.number}
            </button>
          );
        })}
    </div>
  );
};
export default StageC;
