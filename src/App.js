import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Newlywords from '../src/static/Newlywords.jpg'

import './App.css'

const App = () => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  // getModalStyle is not a pure function, we roll the style only on the first render
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <button className="close-modal" onClick={handleClose}>X</button>
        <img src={Newlywords} alt="logo" />
        <h2 className="modal-title">Let's get going!</h2>
        <p>Follow these tips to get your <br/> project off to a great start and <br/>create a truly memorable book!</p>
        <Stepper>
          <Step className="modal-dots">
            <StepLabel />
            <StepLabel />
            <StepLabel />
          </Step>
        </Stepper>
        <button className="next-button">Next</button>
    </div>
  );

  return (
    <div className="App">
      <button className="open-modal" type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default App;
