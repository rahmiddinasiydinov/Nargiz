import './Spinner.scss';
import { Spinner} from "react-activity";
import "react-activity/dist/library.css";






function Spin() {
    return (
      <div className="spinner">
        <Spinner color="#FFFFFF" size={60} speed={0.4} animating={true} />
        <span className='spinner__text'>Loading . . .</span>
      </div>
    );
}
export default Spin;