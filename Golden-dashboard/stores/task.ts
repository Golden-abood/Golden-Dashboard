import { defineStore } from "pinia";
type task = {
  title: string;
  text: string;
  isDone: boolean;
};
export const useTaskStore = defineStore("task", () => {
  const tasks = ref([
    {
      title: "Record One New Video",
      text: "Record Python Create Exe Project",
      isDone: false,
    },
    {
      title: "Write Article",
      text: "Write Low Level vs High Level Languages",
      isDone: false,
    },
    {
      title: "Finish Project",
      text: "Publish Academy Programming Project",
      isDone: false,
    },
    {
      title: "Attend The Meeting",
      text: "Attend The Project Business Analysis Meeting",
      isDone: true,
    },
    {
      title: "Finish Lesson",
      text: "Finish Teaching Flex Box",
      isDone: false,
    },
  ]);
  // to do
  // Create

  const addTask = (task: task) => {
    const taskObject = {
      title: task?.title,
      text: task?.text,
      isDone: false,
    };

    tasks.value.push(taskObject);

    task.title = "";
    task.text = "";
  };

  // Delete
  const deleteTask = (index: number) => {
    console.log(index);
    tasks.value.splice(index, 1);
    console.log(tasks.value);
  };

  // Update

  const updateTask = (index: number, task: task) => {
    let taskSeclect = tasks.value[index];
    taskSeclect.title = task.title;
    taskSeclect.text = task.text;
  };

  return {
    tasks,
    deleteTask,
    addTask,
    updateTask,
  };
});
