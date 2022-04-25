import './Project.scss';
import play from '../../Assets/Images/play.png';
import round from '../../Assets/Images/round.png';
import { Link } from 'react-router-dom';
function Project() {
    
    return (
      <section className="project">
        <div className="container">
          <div className="project__wrapper">
            <div className="project__content">
              <h2 className="project__title">
                Have a project! <br/> Let’s discuss{" "}
              </h2>
              <p className="project__text">
                Thank you for getting in touch!
                <br /> Kindly.
                <br /> Fill the form, have a great day!
              </p>
            </div>
            <div className="project__form">
              <img src={play} alt="form" className="project__play" />
              <img
                src={round}
                alt="rounding pottery"
                className="project__round"
              />
              <h3 className="project__form--title">
                Get in touch of the world
              </h3>
              <p className="project__form--text">
                To contact us leave your number below
              </p>
              <form className="project__appeal">
                <div className="project__input--wrapper">
                  <input
                    className="project__input name__input"
                    type={"text"}
                    placeholder="Enter your name"
                    name="name"
                  />
                  <input
                    className="project__input name__input"
                    type={"email"}
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <input
                  type={"text"}
                  className="project__input"
                  placeholder="Enter your subject title"
                  name="title"
                />
                <textarea
                  placeholder="Enter your subject"
                  name="desc"
                  className="project__textarea"
                ></textarea>
                <Link to='/products' className='project__submit'>SENT MESSAGE</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Project