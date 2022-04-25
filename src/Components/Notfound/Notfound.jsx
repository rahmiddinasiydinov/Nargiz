import Not from '../../Assets/Images/notfound.png';
import './Notfound.scss'
function Notfound() {
    
    return (
        <div className='notfound'>
            <img width={1000} src={Not} alt='not found' className='notfound__img'/>
            <button className='notfound__btn' onClick={() => {
                window.history.back()
            }}>Back</button>
        </div>
    )
}
export default Notfound;