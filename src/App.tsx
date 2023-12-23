import React from "react";
import "./styles.css";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import { styles } from "./style";

function App() {
  return (
    <main style={styles.UserFormContainer}>
      {/* <UserList></UserList> */}
      <h1 style={{ fontWeight: "bold" }}>Form Example</h1>
      <UserForm />
    </main>
  );
}

export default App;
