import { useState, useEffect } from "react";

import { Constants } from "../assets/constants/constants";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const useGet = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Constants.apiGet);
        const data: User[] = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};
