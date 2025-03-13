type EndDateProps = {
    date : string;
}

const EndDate = ({date}:EndDateProps) => {
    return (  
        <h6 className="text-red-600 font-bold text-xs lg:text-sm">D-{date}</h6>
    );
}
 
export default EndDate;