import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Autocomplete from "../autocomplete";
import "./style.css";

function Page(props) {
  const { text, suggestions, onChangeText, onChangeSelection } = props;

  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Autocomplete
          text={text}
          suggestions={suggestions}
          onChangeText={onChangeText}
          onChangeSelection={onChangeSelection}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Page;
