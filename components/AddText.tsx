type AddTextProps = {
    text : string;
}

const AddText = ({text} : AddTextProps) => {
    return (  
        <h6 className="text-xs lg:text-sm font-semibold text-gray-400">{text}</h6>
    );
}
 
export default AddText;