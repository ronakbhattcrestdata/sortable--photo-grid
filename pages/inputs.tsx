import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Header from "../components/Header";
import Paper from "@material-ui/core/Paper";
import TextInput from "../components/TextInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import MaskedInput from "react-text-mask";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Visibility from "../public/visible.png";
// import VisibilityOff from "../public/not-visible.png";
// import Avatar from "@material-ui/core/Avatar";

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: "20px",
      height: "20px",
    },
    MuiIconButtonRoot: {
      padding: '0px',
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  })
);

export default function Inputs() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <div>
      <Header />
      <div style={{ marginLeft: "30px", marginTop: "100px" }}>
        <Paper elevation={0} style={{backgroundColor: "#efeff0"}}>
          <p>Normal Text Input</p>
          <TextInput placeholder="Name" />
          <br />
          <p>Password Input</p>
          <TextInput
            placeholder="Password"
            inputType={showPassword ? "text" : "password"}
            defaultValue="12345678"
            eyeIcon={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className={classes.MuiIconButtonRoot}
                >
                  {/* {showPassword ? (
                    <Avatar
                      alt="Visibility"
                      src={Visibility.src}
                      className={classes.small}
                    />
                  ) : (
                    <Avatar
                      alt="VisibilityOff"
                      src={VisibilityOff.src}
                      className={classes.small}
                    />
                  )} */}
                  {showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <br />
          <p>Disabled Input</p>
          <TextInput placeholder="Disabled" disabled={true} />
          <br />
          <p>Error Input</p>
          <TextInput
            placeholder="Email"
            defaultValue="ronak@gmail"
            error={true}
          />
          <br />
          <p>Masking Input</p>
          <TextInput
            inputComponent={TextMaskCustom as any}
            defaultValue="7465130958"
            inputMode="tel"
          />
        </Paper>
      </div>
    </div>
  );
}
