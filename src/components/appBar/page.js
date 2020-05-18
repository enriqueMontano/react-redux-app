import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Autocomplete from "../autocomplete";
import "./style.css";

function Page(props) {
  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Autocomplete
          text={""}
          suggestions={[]}
          onChangeText={(text) => {}}
          onChangeSelections={(text) => {}}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Page;
