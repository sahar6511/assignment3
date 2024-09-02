import axios from "axios";
import { useEffect, useState } from "react";

//ورودی نام هر استیج و خروجی اطلاعات مربوط به آن
export const useFetchData = (section) => {

const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/chairs.json")
      .then((result) =>
        result.data.map(
          (chairInfo) =>
            chairInfo.section === section && setData((data) => [...data, chairInfo])
        )
      );
  }, []);
  return [data];
};
