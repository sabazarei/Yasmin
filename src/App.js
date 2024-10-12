import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import  Blog  from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Panel from "./pages/Panel/Panel";
import Login from "./pages/Login/Login";
import ClothesInfo from "./pages/ClothesInfo/ClothesInfo";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/panel" element={<Panel/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/clothesInfo/:clothID" element={<ClothesInfo/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}