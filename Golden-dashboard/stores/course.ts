import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", () => {
  const courses = [
    {
      title: "Mastering Web Design",
      desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      num: "950",
      salary: "165",
      bg: "/images/course-01.jpg",
      avatar: "/images/team-01.png",
    },
    {
      title: "Data Structure And Algorithms",
      desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
      num: "1150",
      salary: "210",
      bg: "/images/course-02.jpg",
      avatar: "/images/team-02.png",
    },
    {
      title: "Responsive Web Design",
      desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
      num: "650",
      salary: "90",
      bg: "/images/course-03.jpg",
      avatar: "/images/team-03.png",
    },
    {
      title: "Mastering Python",
      desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
      num: "950",
      salary: "250",
      bg: "/images/course-04.jpg",
      avatar: "/images/team-04.png",
    },
    {
      title: "PHP Examples",
      desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
      num: "850",
      salary: "150",
      bg: "/images/course-05.jpg",
      avatar: "/images/team-05.png",
    },
    {
      title: "Data Structure And Algorithms",
      desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
      num: "1150",
      salary: "210",
      bg: "/images/course-02.jpg",
      avatar: "/images/team-02.png",
    },
    {
      title: "Responsive Web Design",
      desc: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
      num: "650",
      salary: "90",
      bg: "/images/course-03.jpg",
      avatar: "/images/team-03.png",
    },
    {
      title: "Mastering Web Design",
      desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      num: "950",
      salary: "165",
      bg: "/images/course-01.jpg",
      avatar: "/images/team-01.png",
    },
    {
      title: "PHP Examples",
      desc: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
      num: "850",
      salary: "150",
      bg: "/images/course-05.jpg",
      avatar: "/images/team-05.png",
    },
    {
      title: "Mastering Python",
      desc: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
      num: "950",
      salary: "250",
      bg: "/images/course-04.jpg",
      avatar: "/images/team-04.png",
    },
  ];
  return {
    courses,
  };
});
