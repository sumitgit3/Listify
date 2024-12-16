import { BrowserRouter, Routes, Route } from "react-router";
import About from "./routes/About";
import Home from "./routes/Home";
import ShoppingList from "./routes/ShoppingList";
import Header from "./components/Header";
import SignUp from './routes/SignUp'
import Login from './routes/Login'
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='' element={<ProtectedRoute/>}>
          <Route path="/mylist" element={<ShoppingList/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


