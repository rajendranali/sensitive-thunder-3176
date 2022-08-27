const getLocalData = (key) => {
    if (key) {
      const data = localStorage.getItem(key);
      return data;
    }
  };
  
  const setdata = (key, value) => {
    if (key && value) {
      const data = localStorage.setItem(key, value);
    }
  };
  
  export { getLocalData, setdata };