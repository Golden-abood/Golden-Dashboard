import { defineStore } from "pinia";

export const useFilesStore = defineStore("file", () => {
  const files = [
    {
      type: "pdf",
      Author: "Elzero",
      size: "5.5MB",
      date: "20/06/2020",
      src: "/images/pdf.svg",
    },
    {
      type: "avi",
      Author: "Admin",
      size: "12.5MB",
      date: "16/05/2021",
      src: "/images/avi.svg",
    },
    {
      type: "eps",
      Author: "Uploader",
      size: "2.7MB",
      date: "16/5/2021",
      src: "/images/eps.svg",
    },
    {
      type: "psd",
      Author: "Osama",
      size: "15.7MB",
      date: "16/5/2021",
      src: "/images/psd.svg",
    },
    {
      type: "dll",
      Author: "Coder",
      size: "2.2MB",
      date: "12/5/2021",
      src: "/images/dll.svg",
    },
    {
      type: "png",
      Author: "Designer",
      size: "1.1MB",
      date: "12/5/2021",
      src: "/images/png.svg",
    },
    {
      type: "dll",
      Author: "Coder",
      size: "2.2MB",
      date: "12/5/2021",
      src: "/images/dll.svg",
    },
    {
      type: "pdf",
      Author: "Elzero",
      size: "5.5MB",
      date: "20/06/2020",
      src: "/images/pdf.svg",
    },
    {
      type: "avi",
      Author: "Admin",
      size: "12.5MB",
      date: "16/05/2021",
      src: "/images/avi.svg",
    },
    {
      type: "eps",
      Author: "Uploader",
      size: "2.7MB",
      date: "16/5/2021",
      src: "/images/eps.svg",
    },
    {
      type: "psd",
      Author: "Osama",
      size: "15.7MB",
      date: "16/5/2021",
      src: "/images/psd.svg",
    },
    {
      type: "pdf",
      Author: "Elzero",
      size: "5.5MB",
      date: "20/06/2020",
      src: "/images/pdf.svg",
    },
    {
      type: "avi",
      Author: "Admin",
      size: "12.5MB",
      date: "16/05/2021",
      src: "/images/avi.svg",
    },
    {
      type: "eps",
      Author: "Uploader",
      size: "2.7MB",
      date: "16/5/2021",
      src: "/images/eps.svg",
    },
    {
      type: "psd",
      Author: "Osama",
      size: "15.7MB",
      date: "16/5/2021",
      src: "/images/psd.svg",
    },
  ];
  return {
    files,
  };
});
