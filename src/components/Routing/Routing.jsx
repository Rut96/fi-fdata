import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Posts } from "../../pages/Posts/Posts";
import { AddPost } from "../../pages/AddPost/AddPost";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/add-post" element={<AddPost />} />
            </Routes>
        </div>
    );
}