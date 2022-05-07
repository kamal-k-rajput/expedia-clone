import { createContext, useState } from "react";

const StaysInputContext = createContext();

const StaysInputContextProvider = ({ children }) => {
  const [inputData, setinputData] = useState({
    location: "",
    checkin: "",
    checkout: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  return (
    <StaysInputContext.Provider value={{ inputData, handleChange }}>
      {children}
    </StaysInputContext.Provider>
  );
};

export { StaysInputContext, StaysInputContextProvider };
