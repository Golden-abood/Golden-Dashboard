import { defineStore } from "pinia";
export const useProjectStore = defineStore("project", () => {
  const projects: Array = [
    {
      one: true,
      two: true,
      pro: true,
      market: true,
      design: true,
      host: true,
      title: "Elzero Dashboard",
      desc: "Elzero Dashboard Project Design And Programming And Hosting",
      w: "40%",
      bg: "#f44336",
    },
    {
      pro: true,
      market: true,
      title: "Academy Portal",
      desc: "Academy Portal Project Design And Programming",
      w: "70%",
      bg: "#22c55e",
    },
    {
      design: true,
      title: "Chatting Application",
      desc: "Chatting Application Project Design",
      w: "90%",
      bg: "#0075ff",
    },
    {
      one: true,
      pro: true,
      market: true,
      design: true,
      host: true,
      title: "Ahmed Dashboard",
      desc: "Ahmed Dashboard Project Design And Programming And Hosting",
      w: "20%",
      bg: "#22c55e",
    },
    {
      pro: true,
      design: true,
      title: "Ahmed  Portal",
      desc: "Ahmed Portal Project Design And Programming And Hosting",
      w: "50%",
      bg: "#f44336",
    },
    {
      design: true,
      title: "Mohamed Application",
      desc: "Mohamed Application Project Design And Programming And Hosting",
      w: "60%",
      bg: "#f44336",
    },
    {
      pro: true,
      design: true,
      title: "Mohamed Portal",
      desc: "Mohamed Portal Project Design And Programming And Hosting",
      w: "30%",
      bg: "#0075ff",
    },
    {
      design: true,
      title: "Ahmed Application",
      desc: "Ahmed Application Project Design And Programming And Hosting",
      w: "80%",
      bg: "#22c55e",
    },
  ];
  return {
    projects,
  };
});
