import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState({
    inputShow: false,
    rows: 1,
    addShow: false,
    showTitle: "none"

  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandAll(){
    setExpand(
      {
        inputShow: true,
        rows: 3,
        addShow: true,
        showTitle: ""
    
      }
    )
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: expand.showTitle }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={expandAll}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand.rows}
        />
        <Zoom in={expand.addShow}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


// You can just set a bool var and use ternary operator to update the rest