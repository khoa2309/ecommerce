import NavBarLeft from "./NavLeft/page";
import NavBarRight from "./NavRight/page";

export default function Navbar() {
    return (
        <nav className="nav_wrap">
            <NavBarLeft />
            <NavBarRight />
        </nav>
    );
}
