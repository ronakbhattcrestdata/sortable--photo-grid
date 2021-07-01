import { useRouter } from "next/router";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Link href="/">Home</Link>
          <Link href="/inputs">Inputs</Link>
          <Link href="/photoGrid">PhotoGrid</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <Button
      color="inherit"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </Button>
  );
};
