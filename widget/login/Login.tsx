import Link from "next/link";
import "../../styles/common.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
    return (  
        <section className="width-screen py-52 md:py-80">
            <article className="width-max flex flex-col gap-2 items-center justify-center">
                <Link className="w-full" href={"/"}>
                    <div className="flex justify-center items-center gap-3 border border-gray-300 p-4 rounded-xl">
                        <FaGithub className="text-base sm:text-xl md:text-2xl lg:text-3xl" />
                        <h6 className="text-xs sm:text-sm md:text-base font-semibold">GIthub로 계속하기</h6>
                    </div>
                </Link>
                <Link className="w-full" href={"/login/email"}>
                    <div className="flex justify-center items-center gap-3 border border-gray-300 p-4 rounded-xl">
                        <MdEmail className="text-base sm:text-xl md:text-2xl lg:text-3xl" />
                        <h6 className="text-xs sm:text-sm md:text-base font-semibold">이메일로 계속하기</h6>
                    </div>
                </Link>
            </article>
        </section>
    );
}
 
export default Login;