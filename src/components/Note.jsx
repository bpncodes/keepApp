import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteNote } from "./firebase_actions";
import Box from "@material-ui/core/Box";
import { Grid, CardHeader } from "@material-ui/core/"

function Note(props) {
  function handleClick() {
    deleteNote(props.id);
    props.onDelete(props.id);
  }

  return (
    <Grid item >
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </Grid>
  );
}

export default Note;
