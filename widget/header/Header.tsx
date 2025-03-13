import Link from "next/link";
import "../../styles/common.css";
import Nav from "./ui/Nav";

const Header = () => {
    return (  
        <header className="width-screen border-b border-gray-300 py-5">
            <nav className="flex justify-between width-max">
                <Nav />
                <Link href={"/login"}>
                    <button className="white-btn">로그인</button>
                </Link>
            </nav>
        </header>
    );
}
 
export default Header;