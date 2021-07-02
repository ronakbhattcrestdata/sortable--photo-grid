import React from "react";
import Header from "../components/Header";
import Paper from "@material-ui/core/Paper";
import TextInput from "../components/TextInput";

export default function Inputs() {
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
            inputType="password"
            defaultValue="12345678"
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
