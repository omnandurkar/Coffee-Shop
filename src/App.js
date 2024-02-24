import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./views/Home/Home";
import AllCoffee from "./views/AllCoffee/AllCoffee";
import Cart from "./views/Cart/Cart";
import CoffeeDetail from "./views/CoffeeDetail/CoffeeDetail";
import ContactUs from "./views/ContactUs/ContactUs";
import FaQ from "./views/FaQ/FaQ";
import Review from "./views/Review/Review";
import Subscriptions from "./views/Subscriptions/Subscriptions";
import Blog from "./views/Blog/Blog";
import LoginPage from "./views/LoginPage/LoginPage";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/menu",
      element: <AllCoffee/>
    },

    {
      path: "/cart",
      element: <Cart/>
    },

    {
      path: "/menu/:id",
      element: <CoffeeDetail/>
    },

    {
      path: "/contact",
      element: <ContactUs/>
    },

    {
      path: "/faq",
      element: <FaQ/>
    },

    {
      path: "/review",
      element: <Review/>
    },

    {
      path: "/subscriptions",
      element: <Subscriptions/>
    },

    {
      path: "/blog",
      element: <Blog/>
    },

    {
      path: "/login",
      element: <LoginPage/>
    }



  ]);
  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
