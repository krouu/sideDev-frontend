import AddText from "@/components/AddText";
import ContentText from "@/components/ContentText";

const NewComent = () => {
    return (  
        <div className="flex flex-col gap-2 justify-center">
            <ContentText text="JAVA와 React로 같이 만들어요!" />
            <AddText text="JAVA, React, AWS" />
            <AddText text="2명 모집" />
        </div>
    );
}
 
export default NewComent;