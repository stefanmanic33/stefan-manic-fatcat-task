import React from "react";
import { styles } from "./style";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import { PageGenerator } from "./components/PageGenerator";
import cats from "./assets/icons/cats.png";

function App() {
  const sections = [
    {
      type: "singleColumn",
      components: [
        {
          type: "Hero",
          props: { title: "Welcome to My Website", image: cats },
        },
        // { type: "Hero", props: { title: "Welcome to My Website" } },
      ],
      props: {
        backgroundColor: "#e0e0e0",
      },
    },
    {
      type: "twoColumns",
      components: [
        {
          items: [{ type: "UserForm" }],
        },
        {
          items: [{ type: "UserList" }],
        },
      ],
      props: { backgroundColor: "#d3d3d3" },
    },
  ];

  return (
    // <main style={styles.UserFormContainer}>
    <main>
      {/* <UserList></UserList> */}
      {/* <h1 style={{ fontWeight: "bold" }}>Form Example</h1>
      <UserForm /> */}
      <PageGenerator sections={sections} />
    </main>
  );
}

export default App;
