import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "../pages/book-listing";
import { RoutePaths } from "../utils/enum";
// import PrivateRoute from "./PrivateRoute";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register/index"));

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route  path={"/"} element={<Login/>} />
			<Route  path={RoutePaths.Register} element={<Register/>} />
			<Route  path={RoutePaths.BookListing} element={<BookList/>} />
		</Routes>
	);
};

export default AppRoutes;
