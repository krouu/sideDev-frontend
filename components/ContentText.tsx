type ContentTextProps = {
    text : string;
}

const ContentText = ({text} : ContentTextProps) => {
    return (  
        <h3 className="text-xs lg:text-sm font-semibold">{text}</h3>
    );
}
 
export default ContentText;