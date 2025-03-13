type ImgProps = {
    url : string;
}

const ImgCard = ({url} : ImgProps) => {
    return (  
        <div className="w-full h-24 lg:h-40 object-fill">
            <img className="w-full h-full rounded-xl" src={url} alt="" />
        </div>
    );
}
 
export default ImgCard;