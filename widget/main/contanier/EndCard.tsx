import ContentText from "@/components/ContentText";
import EndDate from "@/components/EndDate";
import ImgCard from "@/components/ImgCard";

const EndCard = () => {
    return (  
        <div className="flex flex-col gap-1 cursor-pointer">
            <ImgCard url="https://img.freepik.com/free-psd/silver-letters-on-glass-building-facade_145275-162.jpg?t=st=1666664374~exp=1666664974~hmac=db54b39b5a0660da08509181479f48e323a833f7cc874bb8b5b8d374ef9b45a2"/>
            <EndDate date="1" />
            <ContentText text="JAVA와 React로 사이드 프로젝트 같이 만들어요!" />
        </div>
    );
}
 
export default EndCard;