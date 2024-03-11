import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {

    return (
        <Routes>
            <Route element={<HomePage/>} path="/" exact/>
        </Routes>
    )
}

export default App
