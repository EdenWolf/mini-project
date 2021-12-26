import { Button, Dialog, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Calls } from "../Calls";
import AddIcon from "@mui/icons-material/Add";
import AddTask from "./AddTask";
import Task from "./Task";

interface IProps {
  id: string;
}

export default function TaskList({ id }: IProps) {
  const [tasks, setTasks] = useState<ITaskData[]>([]);
  const [openAddTask, setOpenAddTask] = useState<boolean>(false);
  const [forceUpdate, setForceUpdate] = useState<boolean>(false);
  const [openTaskDetails, setOpenTaskDetails] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string>("");

  useEffect(() => {
    async function getTasks() {
      const result: ITaskData[] = await Calls.getPersonTasks(id);
      setTasks(result);
    }
    getTasks();
  }, [forceUpdate]);

  const update = () => {
    setForceUpdate(!forceUpdate);
  };

  const postNewTask = async (data: ITaskPostValues) => {
    await Calls.postPersonTasks(id, data);
    update();
  };

  const patchTask = async (id: string, data: any) => {
    await Calls.patchTask(id, data);
    closeTaskDetails();
    update();
  };

  const closeAddTask = () => {
    setOpenAddTask(false);
  };

  const closeTaskDetails = () => {
    setOpenTaskDetails(false);
  };

  const handleOpenTask = (index: number) => {
    setTaskId(tasks[index].id);
    setOpenTaskDetails(true);
  };

  const deleteTask = async (id: string) => {
    await Calls.deleteTask(id);
    closeTaskDetails();
    update();
  };

  return (
    <div>
      <h2>Tasks:</h2>
      <TasksContainer>
        {tasks.map((task, index) => (
          <Button key={index} onClick={() => handleOpenTask(index)}>
            {task.title}
          </Button>
        ))}
      </TasksContainer>
      <IconButton onClick={() => setOpenAddTask(true)}>
        <AddIcon />
      </IconButton>
      <Dialog open={openAddTask} onClose={closeAddTask}>
        <AddTask
          ownerId={id}
          postNewTask={postNewTask}
          closeAddTask={closeAddTask}
        />
      </Dialog>
      <Dialog open={openTaskDetails} onClose={closeTaskDetails}>
        <Task taskId={taskId} patchTask={patchTask} deleteTask={deleteTask} />
      </Dialog>
    </div>
  );
}

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
