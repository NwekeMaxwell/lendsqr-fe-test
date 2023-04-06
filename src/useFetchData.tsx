import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = () => {
  const [userData, setUserData] = useState([]);
  // const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // setLoading(true);
    try {
      await axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((res) => {
          setUserData(res.data);
          // console.log(res.data);
        });
      // setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { userData };
};
export default useFetchData;

//api type description
export interface iContext {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  email: string;
  id: string;
  lastActiveDate: string;
  orgName: string;
  userName: string;
  phoneNumber: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: string[];
  };
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    address: string;
    bvn: string;
    currency: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
}
