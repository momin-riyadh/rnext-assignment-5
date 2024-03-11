import {Link, useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login")
    }

    return (
        <Link onClick={handleLogout}
              to="/login"
              className="text-white/50 hover:text-white transition-all duration-200"
        >
            {
                navigate("/") ? ("Login") : ("Logout")
            }

        </Link>
    )
}


export default Logout;
