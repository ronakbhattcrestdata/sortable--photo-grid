import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface InputProps {
  error?: boolean | undefined;
  defaultValue?: string | undefined;
  disabled?: boolean | undefined;
  inputType?: string | undefined;
  placeholder?: string | undefined;
  children?: React.ReactNode;
  eyeIcon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  inputComponent?: {} | any;
}
const inputStyleCommon: React.CSSProperties = {
  background: "#fff",
  width: "300px",
  height: "50px",
  border: "none",
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    textInput: {
      boxShadow: "0 2px 20px 2px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
      fontFamily: "Futura PT Web Book",
      ...inputStyleCommon,
      "&.Mui-focused": {
        // border: "solid 2px #669ae8",
        border: "none",
        outline: "none",
      },
      "&.Mui-error": {
        // border: "solid 2px #ff1919",
        borderRadius: "5px"
      },
      "&:hover": {
        border: "none",
        outline: "none",
      },
    },
    textInputInside: {
      padding: "13px 46px 13px 16px",
    },
  })
);
export default function Inputs(props: InputProps) {
  const classes = useStyles();
  return (
    <>
      <TextField
        variant="outlined"
        placeholder={props.placeholder}
        type={props.inputType}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        error={props.error}
        InputProps={{
          inputComponent: props.inputComponent,
          endAdornment: props.eyeIcon,
          classes: {
            root: classes.textInput,
            input: classes.textInputInside,
          },
        }}
      />
    </>
  );
}


// MuiInputBase-root MuiOutlinedInput-root makeStyles-textInput-4 MuiInputBase-formControl
