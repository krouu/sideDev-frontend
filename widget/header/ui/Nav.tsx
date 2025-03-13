import Link from "next/link";

const Nav = () => {
    return (  
        <article className="flex items-center gap-10 lg:gap-20">
            <Link href={"/"}>
                <h1 className="text-lg lg:text-3xl font-black text-blue-900">SideDev</h1>
            </Link>
            <li className="list-none text-xs lg:text-sm">
                <Link href={"/project"}>
                    <ul className="hover:text-blue-500 cursor-pointer">프로젝트 찾기</ul>
                </Link>
            </li>
        </article>
    );
}
 
export default Nav;