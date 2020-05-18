import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function Page(props) {
  return (
    <AppBar position="static">
      <Toolbar className="appbar"></Toolbar>
    </AppBar>
  );
}

export default Page;
