import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface Props extends WithStyles<typeof styles> {
  label?: "Error";
  error?: boolean | undefined;
  defaultValue?: string | undefined;
  disabled?: boolean | undefined;
  inputType?: string | undefined;
  placeholder: string | undefined;
  children?: React.ReactNode;
  className?: string;
  classes: {} | any;
  theme?: {} | any;
}

const styles = (theme: {} | any) => ({
  root: {
    background: "#fff",
    width: "300px",
    height: "50px",
    border: "none",
    "&:hover": {
      border: "none",
      outline: "none",
    },
  },
  inputStyle: {
    padding: "13px 46px 13px 16px",
    boxShadow: "0 2px 20px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    flexGrow: "0",
    height: "24px",
    "&:active": {
      border: "solid 1px #669ae8",
    },
  },
});

function Input(props: Props) {
  const { classes, children, className, ...other } = props;
  console.log(props);
  const passwordInput = props.inputType === "password";
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <>
      {passwordInput ? (
        <TextField
          variant="outlined"
          type={showPassword ? "text" : "password"} // <-- This is where the magic happens
          InputProps={{
            classes: {
              root: classes.root,
              input: classes.inputStyle,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextField
          variant="outlined"
          InputProps={{
            classes: {
              root: classes.root,
              input: classes.inputStyle,
            },
          }}
          placeholder={props.placeholder}
          type={props.inputType}
          disabled={props.disabled}
          defaultValue={props.defaultValue}
          error={props.error}
        />
      )}
    </>
  );
}

export default withStyles(styles)(Input);
