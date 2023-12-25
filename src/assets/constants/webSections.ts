import cats from "../icons/cats.png";

export const sections = [
  {
    type: "singleColumn",
    components: [
      {
        type: "Hero",
        props: { title: "Welcome to Cats Family Website" },
      },
    ],
    props: {
      backgroundColor: "#ff7f50",
      backgroundImage: `url(${cats})`,
    },
  },
  {
    type: "singleColumn",
    components: [
      {
        type: "UserForm",
        props: {},
      },
    ],
    props: {
      backgroundColor: "#afeeee",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    type: "singleColumn",
    components: [
      {
        type: "UserList",
        props: {},
      },
    ],
    props: {
      backgroundColor: "#fa8072",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
];
