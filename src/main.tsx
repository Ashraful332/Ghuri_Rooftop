import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css"
import "./page/ui/Ui.css"
import Error404 from "./page/error/404";
import Ui from "./page/ui/Ui";
import BlogPage from "./page/blog/BlogPage";
import CartPage from "./page/cart/CartPage";
import ContactPage from "./page/contacts/ContactPage";
import GalleryPage from "./page/gallery/Gallery";
import MenuPage from "./page/menu/MenuPage";
import Reservation from "./page/Reservation/Reservation";
import About_us from "./page/about/About_us";


const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ui" element={<Ui />} />
      <Route path="/about" element={<About_us />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
);
