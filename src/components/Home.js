import React from "react";
import "./Home.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";

function Home(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    console.log('login')
  };

  return (
    <div className="home">
      <div>
        <Link to="/register">
          <IconButton>
            <PersonAddIcon className="home_newUser" style={{ fontSize: 60 }} />
          </IconButton>
        </Link>
        <span className="icon_text">Create Account</span>
      </div>
      <div>
        
        <IconButton onClick={handleClickOpen}>
          <LockOpenIcon className="home_login" style={{ fontSize: 60 }} />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
          
            <DialogTitle className="login_title"><PetsIcon className="login_logo" style={{ fontSize: 50 }} />
            <span className="login_logoText">Log in to Sniffles</span>
            </DialogTitle>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Password"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={login} color="primary">
              Log in
            </Button>
          </DialogActions>
        </Dialog>
        
        <span className="icon_text">Login</span>
      </div>
    </div>
  );
}

export default Home;
