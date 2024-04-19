/*
 * @Description:
 * @Author: Devin
 * @Date: 2024-04-19 12:04:53
 */
import { lazy, Suspense } from "react";
import "./index.css";
import "./tailwind.css";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
