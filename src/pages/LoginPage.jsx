import {Link} from "react-router-dom";
import LoginForm from "../components/auth/LoginForm.jsx";


function LoginPage() {
    return (
        <section className="container flex items-center justify-center h-screen">
            {/*Login Form into a box center of the page*/}
            <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <LoginForm/>
                <p className="text-center">
                    Don't have an account? <Link to="/register"
                                                 className="text-indigo-600 hover:underline">Register</Link>
                </p>
            </div>
        </section>
    );
}

export default LoginPage;
