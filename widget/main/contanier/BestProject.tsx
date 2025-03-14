import ContainerTitle from "@/components/ContainerTitle";
import ContentText from "@/components/ContentText";
import ImgCard from "@/components/ImgCard";
import BestCard from "./BestCard";

const BestProject = () => {
    return (  
        <article className="width-max h-1/3 py-10 lg:py-20">
            <ContainerTitle title="이런 프로젝트는 어때요?"/>
            <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-10">
                <BestCard />
                <BestCard />
                <BestCard />
                <BestCard />
            </div>
        </article>
    );
}
 
export default BestProject;