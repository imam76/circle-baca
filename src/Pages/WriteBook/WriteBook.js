import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

//react quill
import ReactQuill from "react-quill";
import CustomToolbar from "./CustomToolbar";

function WriteBook() {

  const [stateStory, setStateStory] = useState("");

  const textEditorTool = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],

      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  //---------- function ---------------
  console.log("ini state =>", stateStory);
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6} className="margin-top-64">
          <Grid item xs={12}>
            <Paper elevation={0}>
              <CustomToolbar />
              <ReactQuill
                theme="bubble"
                value={stateStory}
                onChange={setStateStory}
                modules={textEditorTool}
                placeholder="Write your story here..."
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WriteBook;
