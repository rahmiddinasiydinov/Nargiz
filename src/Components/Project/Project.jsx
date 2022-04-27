import './Project.scss';
import play from '../../Assets/Images/play.png';
import round from '../../Assets/Images/round.png';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from 'react';
function Project() {
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    }
     
  function sendApplication(e) {
    e.preventDefault();
    const { name, desc, title, email } = e.target.elements;
    console.log(name.value, desc.value, title.value, email.value);
    fetch("https://nargiz-back.herokuapp.com/application", {
      method: "POST", 
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: name.value,
        desc: desc.value, 
        email: email.value, 
        title:title.value
      })
    }).then(res => res.json())
      .then(data => {
        if (data?.status === 200) {
          handleClick();
          console.log(data);
        }
      });
  }
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Sent
        </Alert>
      </Snackbar>
      <section className="project">
        <div className="container">
          <div className="project__wrapper">
            <div className="project__content">
              <h2 className="project__title">
                Have a project! <br /> Let’s discuss{" "}
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
              <form className="project__appeal" onSubmit={sendApplication}>
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
                <button
                  type="submit"
                  className="project__submit"
                >
                  SENT MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Stack>
  );
}
export default Project