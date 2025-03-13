import "../../styles/common.css";
import BestProject from "./contaniers/BestProject";
import EndProject from "./contaniers/EndProject";
import NewProject from "./contaniers/NewProject";

const Main = () => {
    return (  
        <section className="width-screen">
            <EndProject />
            <NewProject />
            <BestProject />
        </section>
    );
}
 
export default Main;