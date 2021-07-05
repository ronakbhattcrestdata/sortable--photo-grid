import React, { useState } from "react";
import Header from "../components/Header";
import Paper from "@material-ui/core/Paper";
import TextInput from "../components/TextInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "../public/visible.png";
import VisibilityOff from "../public/not-visible.png";
import Avatar from "@material-ui/core/Avatar";

export default function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <div>
      <Header />
      <div style={{ marginLeft: "30px", marginTop: "100px" }}>
        <Paper elevation={0}>
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
                >
                  {showPassword ? (
                    <Avatar
                      alt="Visibility"
                      src={Visibility.src}
                      style={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                  ) : (
                    <Avatar
                      alt="VisibilityOff"
                      src={VisibilityOff.src}
                      style={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                  )}
                  {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
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
            label="Error"
            error={true}
          />
        </Paper>
      </div>
    </div>
  );
}
