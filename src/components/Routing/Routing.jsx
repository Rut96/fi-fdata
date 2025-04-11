import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Posts } from "../../pages/Posts/Posts";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </div>
    );
}