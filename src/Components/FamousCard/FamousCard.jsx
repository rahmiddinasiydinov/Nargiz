import './FamousCard.scss';
import {ReactComponent as Like} from '../../Assets/SVG/like.svg'
function FamousCard(props) {
    const {img, title, price} =props
    return (
      <div className="card">
        <Like className='card__like' />
        <div className="card__img--wrapper">
          <img className="card__img" src={img} alt="" />
        </div>
        <p className="card__text">{title.substr(0, 80) + ' . . .'}</p>
        <span className="card__price">{price} $</span>
      </div>
    );
}
export default FamousCard;