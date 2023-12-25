import React from "react";
import { useGet } from "../../api/useGet";

export const UserList = () => {
  const { data, loading } = useGet();

  return (
    <div style={styles.container}>
      <h1 style={styles.titleText}>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.listContainer}>
          {data.map((user) => (
            <div key={user.id} style={styles.listBody}>
              <strong>ID:</strong> {user.id} <br />
              <strong>Name:</strong> {user.name} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleText: {
    alignSelf: "center",
    marginBottom: "70px",
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  listBody: {
    margin: "30px",
    width: "250px",
  },
};
