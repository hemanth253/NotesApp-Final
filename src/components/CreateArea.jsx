import React, { useState } from "react";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [combinedInput, setCombinedInput] = useState({
    title: "",
    content: "",
  });
  const [zoomIn, setZoomIn] = useState(false);

  function inputHandler(event) {
    const { name, value } = event.target;
    setCombinedInput((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function zoomInHandler() {
    if (!zoomIn) setZoomIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn ? (
          <input
            name="title"
            value={combinedInput.title}
            onChange={inputHandler}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          value={combinedInput.content}
          onChange={inputHandler}
          onClick={zoomInHandler}
          placeholder="Take a note..."
          rows={zoomIn ? 3 : 1}
        />
        <Zoom in={zoomIn}>
          <Fab
            onClick={(event) => {
              setCombinedInput((prevValues) => {
                return {
                  title: "",
                  content: "",
                };
              });
              props.addToList(combinedInput);
              event.preventDefault();
            }}
          >
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
        {/* <button>Add</button> */}
      </form>
    </div>
  );
}

export default CreateArea;
