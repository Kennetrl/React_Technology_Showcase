import { type View } from "./pages";

export const menuItems: {
  key: string;
  title: string;
  items: {
    label: string;
    view: View;
  }[];
}[] = [
  {
    key: "ui",
    title: "UI Frameworks",
    items: [
      { label: "Chakra UI", view: "chakra" },
      { label: "Material UI", view: "material" },
    ],
  },

  {
    key: "state",
    title: "State Management",
    items: [
      { label: "MobX", view: "mobx" },
    ],
  },

  {
    key: "routing",
    title: "Routing",
    items: [
      { label: "React Router", view: "react-router" },
    ],
  },

  {
    key: "forms",
    title: "Forms & Validation",
    items: [
      { label: "Formik", view: "formik" },
      { label: "React Hook Form", view: "react-hook-form" },
      { label: "Zod", view: "zod" },
    ],
  },
];