import ContainerTitle from "@/components/ContainerTitle";
import ContentText from "@/components/ContentText";
import ImgCard from "@/components/ImgCard";

const BestProject = () => {
    return (  
        <article className="width-max h-1/3 py-10 lg:py-20">
            <ContainerTitle title="이런 프로젝트는 어때요?"/>
            <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <div className="flex flex-col gap-2 cursor-pointer">
                    <ImgCard url="https://img.freepik.com/free-psd/silver-letters-on-glass-building-facade_145275-162.jpg?t=st=1666664374~exp=1666664974~hmac=db54b39b5a0660da08509181479f48e323a833f7cc874bb8b5b8d374ef9b45a2"/>
                    <ContentText text="JAVA와 React로 사이드 프로젝트 같이 만들어요!" />
                </div>
            </div>
        </article>
    );
}
 
export default BestProject;