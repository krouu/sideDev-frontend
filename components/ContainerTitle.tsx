import Link from "next/link";

type TitleProps = {
    title : string
}

const ContainerTitle = ({title} : TitleProps) => {
    return (  
        <div className="flex justify-between">
            <h2 className="text-sm lg:text-lg font-bold">{title}</h2>
            <Link href={"/project"}>
                <button className="text-xs lg:text-sm text-gray-400 cursor-pointer">전체보기</button>
            </Link>
        </div>
    );
}
 
export default ContainerTitle;