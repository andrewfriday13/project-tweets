import { Route, Routes,  Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./Navigation/Navigation";
// import HomePage from "pages/Home/HomePage";
// import { TweetsPage } from "pages/Tweets/TweetsPage";

const HomePage = lazy(() => import("pages/Home/HomePage"));
const TweetsPage = lazy(() => import("pages/Tweets/TweetsPage"));

export const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage/>} />
          <Route path="*" element={<Navigate to='/' />}>
          </Route>
        </Routes>
    </Suspense>
    </>
  );
};
