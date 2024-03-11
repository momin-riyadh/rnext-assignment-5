import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

function HomePage() {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <h1>Home Page</h1>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default HomePage;
