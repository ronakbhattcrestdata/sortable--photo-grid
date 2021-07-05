import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface InputProps {
  label?: "Error";
  error?: boolean | undefined;
  defaultValue?: string | undefined;
  disabled?: boolean | undefined;
  inputType?: string | undefined;
  placeholder?: string | undefined;
  children?: React.ReactNode;
  eyeIcon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
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
      ...inputStyleCommon,
      "&:active": {
        border: "solid 1px #669ae8",
      },
      "&:hover": {
        border: "none",
        outline: "none",
      },
    },
    ".eye-btn": {
      padding: "0px",
    },
    textInputInside: {
      padding: "13px 46px 13px 16px",
    }
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

// const styles = (theme: {} | any) => ({
//   root: {
//     background: "#fff",
//     width: "300px",
//     height: "50px",
//     border: "none",
//     "&:hover": {
//       border: "none",
//       outline: "none",
//     },
//   },
//   inputStyle: {
//     padding: "13px 46px 13px 16px",
//     boxShadow: "0 2px 20px 2px rgba(0, 0, 0, 0.2)",
//     borderRadius: "5px",
//     flexGrow: "0",
//     height: "24px",
//     "&:active": {
//       border: "solid 1px #669ae8",
//     },
//     "&:hover": {
//       border: "none",
//       outline: "none",
//     },
//   },
// });

// function Input(props: Props) {
//   const { classes, children, className, ...other } = props;

//   return (
//     <>
//       <TextField
//         variant="outlined"
//         InputProps={{
//           endAdornment: props.eyeIcon,
//           classes: {
//             root: classes.root,
//             input: classes.inputStyle,
//           },
//         }}
//         placeholder={props.placeholder}
//         type={props.inputType}
//         disabled={props.disabled}
//         defaultValue={props.defaultValue}
//         error={props.error}
//       />
//     </>
//   );
// }

// export default withStyles(styles)(Input);
