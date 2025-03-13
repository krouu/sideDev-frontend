import AddText from "@/components/AddText";
import ContainerTitle from "@/components/ContainerTitle";
import ContentText from "@/components/ContentText";
import ImgCard from "@/components/ImgCard";

const NewProject = () => {
    return (  
        <article className="width-max h-1/3 ">
            <ContainerTitle title="최근 등록된 따끈따끈 프로젝트!!"/>
            <div className="py-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-8 md:gap-10">
                <div className="w-40 sm:w-full cursor-pointer">
                    <ImgCard url="https://img.freepik.com/free-psd/silver-letters-on-glass-building-facade_145275-162.jpg?t=st=1666664374~exp=1666664974~hmac=db54b39b5a0660da08509181479f48e323a833f7cc874bb8b5b8d374ef9b45a2"/>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <ContentText text="JAVA와 React로 같이 만들어요!" />
                    <AddText text="JAVA, React, AWS" />
                    <AddText text="2명 모집" />
                </div>
            </div>
        </article>
    );
}
 
export default NewProject;