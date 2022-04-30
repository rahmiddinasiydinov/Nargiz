import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {ReactComponent as Sent } from '../../Assets/SVG/sent.svg';
import './SaleModel.scss';
const style = {
    backgroundColor: '#FFFFFF',
    borderRadius:'15px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {
  const { open, handleClose, id } = props;
  
  const handleOrder = e => {
           setData(
             <>
               {" "}
               <h3 className="modal__title">Yoborilmoqda...</h3>
               <div className="modal__icon modal__loading">
                 <div className="modal__loading--small"></div>
               </div>
             </>
           );
        e.preventDefault();
    const { name, tel } = e.target.elements;
    console.log(name.value, tel.value, id);
      fetch("https://nargiz-back.herokuapp.com/orders", {
        method: "POST", 
        headers: {
          "Content-Type":"application/json",
        }, 
        body: JSON.stringify({
          name: name.value, 
          phone: tel.value, 
          order:id
        })
      }).then(res => res.json()).then(data => {
        if (Number(data?.status) === 200) {
          setData(
            <>
              {" "}
              <h3 className="modal__title">
                Raqaming qoldirildi, siz bilan tez orada bog’lanamamiz!
              </h3>
              <div className="modal__icon">
                <Sent />
              </div>
              <a href="#telegram" className="modal__link">
                Istasangiz bizni telegramda kuzating
              </a>
            </>
          );
        } else {
          setData(
            <>
              <h3 className="modal__error">Xatolik yuz berdi</h3>
            </>
          );
        }
      });
  
  
    }
 
    const [data, setData] = React.useState(
      <>
        {" "}
        <h3 className="modal__title">
          Buyurtma berish uchun raqamingizni qoldiring
        </h3>
        <form className="modal__form" onSubmit={handleOrder}>
          <input
            type={"text"}
            name="name"
            className="modal__input"
            placeholder="Isminigz"
          />
          <div className="modal__input--wrapper">
            <input
              type={"tel"}
              name="tel"
              className="modal__input--tel"
              placeholder="+998 90 500 00 00"
            />
            <button type="submit" className="modal__submit">
              Send
            </button>
          </div>
        </form>
      </>
    );

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style} className="modal__wrapper">
              <button className="modal__exit" onClick={handleClose}>
                X
              </button>
              {data}
            </Box>
          </Fade>
        </Modal>
      </div>
    );
    }