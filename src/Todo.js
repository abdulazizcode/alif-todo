import React, { useState } from "react";
import AddTask from "./AddTask";
import "./Todo.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';

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


const Todo = () =>{
  const classes = useStyles();
  const [tasks, setTasks] = useState([])

  const addTask = text => setTasks([...tasks, { text }]);
  
  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return(
    <div className="lists--contatiner">
    <AddTask addTask={addTask} />
    {tasks.map((task, index) => (
      <div className="list" key={index.toString()}>
        <p><i>{index+1})</i> {task.text}</p>

        <div className="remove__btns">
            <Button
              onClick={() => removeTask(index)}
              variant="contained"
              size="medium"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              >DELETE
            </Button>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Todo;