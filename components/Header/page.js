import Navbar from "../Navbar/page";
import SearchBar from "../SearchBar/page";

export default function Header() {
    return (
        <header className="header">
            <div className="wrap">
                <Navbar />
                <SearchBar />
            </div>
        </header>
    );
}
