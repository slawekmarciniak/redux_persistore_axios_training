import { connect } from "react-redux";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Paper, TextField, Button } from "@mui/material";
import { sendEmail } from "../../api/emailApi";
import { showMessage } from "../../redux/actions/messageActions";

import "./styles.css";

type Inputs = {
  subject: string;
  emailText: string;
};

interface ContactProps {
  sendingMessage: (type: string, message: string) => void;
}

const Contact: FC<ContactProps> = ({ sendingMessage }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendingMessage("info", "message is send");
    setTimeout(() => {
      sendingMessage("", "");
    }, 1000);
    sendEmail(data);
    reset();
  };

  console.log(watch("subject")); // watch input value by passing the name of it

  return (
    <Paper elevation={5} className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("subject", { required: true })}
          label="subject"
          style={{ width: 400 }}
          color="secondary"
        />
        <span className="errorInfo">
          {errors.subject && "This field is required"}
        </span>
        <TextField
          {...register("emailText", { required: true })}
          multiline
          rows={5}
          label="text"
          style={{ width: 400 }}
          color="secondary"
        />
        <span className="errorInfo">
          {errors.emailText && "This field is required"}
        </span>
        <Button
          style={{ width: 100 }}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  sendingMessage: (type: string, message: string) =>
    dispatch(
      showMessage({
        type,
        message,
      })
    ),
});

export default connect(null, mapDispatchToProps)(Contact);
