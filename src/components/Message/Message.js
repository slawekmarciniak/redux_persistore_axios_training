import "./styles.css";
import { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { showMessage } from "../../redux/actions/messageActions";
import { connect } from "react-redux";

const Message = ({ type, message, showMessage }) => {
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  useEffect(() => {
    const openMessage = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        showMessage("", "");
      }, 2000);
    };
    openMessage();
  }, [showMessage]);

  const handleClose = () => {
    setOpen(false);
    showMessage("", "");
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          variant="filled"
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showMessage: (type, message) =>
    dispatch(
      showMessage({
        type,
        message,
      })
    ),
});

export default connect(null, mapDispatchToProps)(Message);
