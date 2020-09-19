import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(5)
      },
      button: {
        margin: theme.spacing(1)
      }
    }
  }));


const AddTask = ({addTask}) => {
    const classes = useStyles();
    const [getInput, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        getInput && addTask(getInput)
        setInput("");
      };


      return(
        <div>
        <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
          <div className="flex--container">
            <div>
              <TextField
                value={getInput}
                onChange={e => setInput(e.target.value)}
                id="outlined-search"
                label="Enter todo task here"
                type="search"
                size="small"
                variant="outlined"
              />
            </div>
            <div>
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="medium"
                color="primary"
                className={classes.button}
                endIcon={<AddCircleOutlineIcon />}
              >ADD
              </Button>
            </div>
          </div>
        </form>
      </div>
      );
}

export default AddTask;