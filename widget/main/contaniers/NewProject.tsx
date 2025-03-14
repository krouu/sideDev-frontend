import AddText from "@/components/AddText";
import ContainerTitle from "@/components/ContainerTitle";
import ContentText from "@/components/ContentText";
import ImgCard from "@/components/ImgCard";
import NewImg from "./NewImg";
import NewComent from "./NewComent";

const NewProject = () => {
    return (  
        <article className="width-max h-1/3 ">
            <ContainerTitle title="최근 등록된 따끈따끈 프로젝트!!"/>
            <div className="py-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8 md:gap-10">
                <NewImg />
                <NewComent />
                <NewImg />
                <NewComent />
                <NewImg />
                <NewComent />
                <NewImg />
                <NewComent />
            </div>
        </article>
    );
}
 
export default NewProject;