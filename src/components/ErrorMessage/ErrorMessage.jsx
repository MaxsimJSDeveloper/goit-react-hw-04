import { useEffect } from "react";
import toast from "react-hot-toast";

const Error = () => {
  useEffect(() => {
    toast.error("This didn't work.");
  }, []);

  return null;
};

export default Error;
