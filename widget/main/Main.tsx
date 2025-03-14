import "../../styles/common.css";
import BestProject from "./contanier/BestProject";
import EndProject from "./contanier/EndProject";
import NewProject from "./contanier/NewProject";

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