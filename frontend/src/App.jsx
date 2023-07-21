import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


export default function App() {
  return (
    <BrowserRouter>
      <>
        <header className="border p-4">
          <a href="/">Shop</a>
        </header>
        <main className="">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}
