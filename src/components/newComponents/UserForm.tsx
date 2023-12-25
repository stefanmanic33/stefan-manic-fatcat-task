import React from "react";
import { FormGenerator } from "./FormGenerator";
import { Button } from "../Button";
import { UserFormProps } from "../../assets/constants/types";
import { usePost } from "../../api/usePost";

export const UserForm = () => {
  const validationSchema = {
    title: {
      required: true,
      maxLength: 20,
    },
    body: {
      required: true,
      maxLength: 200,
    },
  };

  const renderForm = ({
    formData,
    setFormData,
    handleSubmit,
    checkIsDisabledButton,
    successMessage,
    isError,
    validationSchema,
  }: UserFormProps) => (
    <>
      <form style={styles.formContainer}>
        <h1>User Form</h1>
        <div style={styles.formFieldContainer}>
          <label
            style={{ marginBottom: "10px", fontSize: "20px" }}
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            style={styles.inputStyle}
            value={formData.title || ""}
            maxLength={21}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            onFocus={(e) => (e.target.style.outline = "2px solid gray")}
            onBlur={(e) => (e.target.style.outline = "0px solid gray")}
          />
          {validationSchema.title.required && !formData.title && (
            <div style={styles.errorValidationMessage}>Title is required</div>
          )}
          {validationSchema.title.maxLength &&
            formData.title &&
            formData.title.length > validationSchema.title.maxLength && (
              <div style={styles.errorValidationMessage}>
                Title can have a maximum of 20 characters
              </div>
            )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            style={{
              marginTop: formData.title ? "35px" : "0px",
              marginBottom: "10px",
              fontSize: "20px",
            }}
            htmlFor="body"
          >
            Body
          </label>
          <textarea
            id="body"
            style={styles.textareaStyle}
            value={formData.body || ""}
            maxLength={201}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            onFocus={(e) => (e.target.style.outline = "2px solid gray")}
            onBlur={(e) => (e.target.style.outline = "0px solid gray")}
          />
          {validationSchema.body.required && !formData.body && (
            <div style={styles.errorValidationMessage}>Body is required</div>
          )}
          {validationSchema.body.maxLength &&
            formData.body &&
            formData.body.length > validationSchema.body.maxLength && (
              <div style={styles.errorValidationMessage}>
                Body can have a maximum of 200 characters
              </div>
            )}
        </div>
        <div style={styles.buttonContainer}>
          <Button
            className={{
              marginTop: formData.body ? "50px" : "15px",
            }}
            children={"Submit"}
            onClick={handleSubmit}
            isDisabled={checkIsDisabledButton()}
          />
          {isError && <div>Error submitting the form</div>}
          {successMessage && (
            <div style={styles.successValidationMessage}>
              Success submit form!
            </div>
          )}
        </div>
      </form>
    </>
  );

  return (
    <div style={styles.listContainer}>
      <h1 style={styles.text}>Hello User</h1>
      <div style={styles.formGeneratorContainer}>
        <FormGenerator
          validationSchema={validationSchema}
          apiHook={usePost}
          renderForm={renderForm}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  listContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formGeneratorContainer: {
    marginTop: "40px",
    border: "3px solid gray",
  },
  text: {
    fontWeight: "bold",
  },
  formContainer: {
    padding: "30px",
    width: "500px",
  },
  formFieldContainer: {
    display: "flex",
    flexDirection: "column" as const,
  },
  errorValidationMessage: {
    fontSize: "14px",
    marginBottom: "14px",
    marginTop: "5px",
    color: "red",
  },
  successValidationMessage: {
    fontSize: "20px",
    marginTop: "10px",
    color: "green",
    alignSelf: "center",
  },
  inputStyle: {
    border: "2px solid gray",
    height: "30px",
    width: "100%",
  },
  textareaStyle: {
    border: "2px solid gray",
    height: "100px",
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: "200px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
};
