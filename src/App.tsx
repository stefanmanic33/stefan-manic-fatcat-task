import React from "react";
import "./styles.css";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <main>
      {/* <UserList></UserList> */}
      <h1>Form Example</h1>
      <UserForm />
    </main>
  );
}

export default App;
