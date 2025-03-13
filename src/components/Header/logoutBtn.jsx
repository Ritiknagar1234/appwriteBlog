import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <button
      onClick={logoutHandler}
      className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
