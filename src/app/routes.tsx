import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import CastDetail from "../features/cast/pages/CastDetail";

const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../features/home/pages/Home"))
const Bookmark = lazy(()=> import("../features/bookmark/pages/Bookmark"))
const Movies = lazy(()=> import("../features/movies/pages/Movies"))
const MovieDetail = lazy(()=> import("../features/movies/pages/MovieDetail"))
const Search = lazy(()=> import("../features/search/page/Search"))

const AppRoutes = () => {
  return useRoutes([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
          {index:true, element:<Home/> },
          {path:"bookmark", element:<Bookmark/> },
          {path:"movies", element:<Movies/> },
          {path:"search", element:<Search/> },
          {path:"movie/:id", element:<MovieDetail/> },
          {path:"cast/:id", element:<CastDetail/> },
        ]
    }
  ]);
};

export default React.memo(AppRoutes);
