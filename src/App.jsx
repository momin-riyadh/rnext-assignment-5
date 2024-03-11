import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {

    return (
        <Routes>
            <Route element={<HomePage/>} path="/" exact/>
            <Route element={<LoginPage/>} path="/login"/>
            <Route element={<HomePage/>} path="/"/>
            <Route element={<HomePage/>} path="/"/>
            <Route element={<HomePage/>} path="/"/>
        </Routes>
    )
}

export default App
