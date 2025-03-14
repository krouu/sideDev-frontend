import ContainerTitle from "@/components/ContainerTitle";
import ContentText from "@/components/ContentText";
import EndDate from "@/components/EndDate";
import ImgCard from "@/components/ImgCard";
import EndCard from "./EndCard";

const EndProject = () => {
    return (  
        <article className="width-max h-1/3 py-10 lg:py-20">
            <ContainerTitle title="마감임박 프로젝트!"/>
            <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-10">
                <EndCard />
                <EndCard />
                <EndCard />
                <EndCard />
            </div>
        </article>
    );
}
 
export default EndProject;