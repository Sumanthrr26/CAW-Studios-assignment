import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder, updateProductStatus } from "../redux/orderSlice";

const MainScreen = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.data);

  const handleUpdateStatus = (productId, status) => {
    dispatch(updateProductStatus({ productId, status }));
  };

  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/order");
      const data = await response.json();
      dispatch(setOrder(data));
    };

    fetchData();
  }, [dispatch]);

  return <div></div>;
};

export default MainScreen;
