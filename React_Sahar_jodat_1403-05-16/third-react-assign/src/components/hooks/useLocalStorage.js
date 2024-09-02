import { useEffect, useState } from "react";

export const useLocalStorage = (value) => {

  let counter = 0;
  let totalPrice = 0;
  // const [count, setCount] = useState(0) ;

  const [data, setData] = useState(() => {
    const dataFromLocalStorage = localStorage.getItem("chairInfo");
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : value;
  });

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("chairInfo"));

    //لوکال استورج فقط یک آرایه خالی میشود
    if (dataFromLocalStorage === null) {
      localStorage.setItem("chairInfo", JSON.stringify(data));
    } else {
      const dataFromLocalStorage = JSON.parse(
        localStorage.getItem("chairInfo")
      );
      var index = -1;

      for (let i = 0; i < dataFromLocalStorage.length; i++) {
        const element = dataFromLocalStorage[i];

        if (element.id === data.id) {
          index = i;
          break;
        }
      }

      //اضافه کردن داده برای اولین بار به لوکال استورج
      if (index === -1) {
        setData({
          ...data,
          qty: 1,
        });

        dataFromLocalStorage.push(data);
      }
      //  و با توجه به تعداد کلیک ها وضعیت صندلی تغییر می کند(qty)  درصورتی که یک صندلی دوباره کلیک شود تعداد انتخاب یعنی همان کلیک کردن روی آن تغییر می کند
      else {
        dataFromLocalStorage[index].qty += 1;

        if (dataFromLocalStorage[index].qty === 1) {
              const id = dataFromLocalStorage[index].id;
              dataFromLocalStorage[index].state = "selected";
              document.getElementById(id).style.background = "green";
        }

        if (dataFromLocalStorage[index].qty === 2) {
              const id = dataFromLocalStorage[index].id;
              dataFromLocalStorage[index].state = "temp_reserved";
              document.getElementById(id).style.background = "orange";
        }

        if (dataFromLocalStorage[index].qty === 3) {
              const id = dataFromLocalStorage[index].id;
              dataFromLocalStorage[index].state = "reserved";
              document.getElementById(id).style.background = "red";

          for (let index = 0; index < dataFromLocalStorage.length; index++) {
            if (dataFromLocalStorage[index].state === "reserved") {
                counter++;
                totalPrice =
                totalPrice + parseInt(dataFromLocalStorage[index].price);
                document.getElementById("counter").innerText = counter;
                document.getElementById("totalPrice").innerText = totalPrice;
          
            }
          }
        }
        if (dataFromLocalStorage[index].qty >= 4) {
          alert("این صندلی قبلا رزرو شده است");
        }
      }

      localStorage.setItem("chairInfo", JSON.stringify(dataFromLocalStorage));
    }
  }, [data]);

  return [data, setData];
};
