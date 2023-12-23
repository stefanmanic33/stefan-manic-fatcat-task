// MyForm.js

import React from "react";
import FormGenerator from "./FormGenerator";
import { Button } from "./Button";
import { styles } from "./styles/style";

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

  const apiHook = {
    data: {},
    isLoading: false,
    isError: false,
    submitForm: async (formData) => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  };

  const renderForm = ({
    formData,
    setFormData,
    handleSubmit,
    isLoading,
    isError,
    validationSchema,
  }) => (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <div style={styles.formFieldContainer}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          style={{ border: "1px solid gray" }}
          value={formData.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {validationSchema.title.required && !formData.title && (
          <div style={styles.errorValidationMessage}>Title is required</div>
        )}
        {validationSchema.title.maxLength &&
          formData.title &&
          formData.title.length > validationSchema.title.maxLength && (
            <div style={styles.errorValidationMessage}>
              Title exceeds maximum length
            </div>
          )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          style={{ marginTop: formData.title ? "33px" : "0px" }}
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          id="body"
          style={{ border: "1px solid gray" }}
          value={formData.body || ""}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        {validationSchema.body.required && !formData.body && (
          <div style={styles.errorValidationMessage}>Body is required</div>
        )}
        {validationSchema.body.maxLength &&
          formData.body &&
          formData.body.length > validationSchema.body.maxLength && (
            <div>Body exceeds maximum length</div>
          )}
      </div>
      <Button className={formData.body ? "mt-8" : ""} children={"Submit"} />
      {isError && <div>Error submitting the form</div>}
    </form>
  );

  return (
    <div style={styles.formGeneratorContainer}>
      <FormGenerator
        validationSchema={validationSchema}
        apiHook={apiHook}
        renderForm={renderForm}
      />
    </div>
  );
};
