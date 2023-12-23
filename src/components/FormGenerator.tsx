import React, { useState } from 'react';

const FormGenerator = ({ validationSchema, apiHook, renderForm }) => {
  const [formData, setFormData] = useState({});
  const { data, isLoading, isError, submitForm } = apiHook;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await submitForm(formData);
    }
  };

  const validateForm = () => {
    // Implement your validation logic based on validationSchema
    // Return true if the form is valid, false otherwise
    // Display error messages as needed
    return true; // Placeholder, replace with actual validation
  };

  return (
    <div>
      {renderForm({
        formData,
        setFormData,
        handleSubmit,
        isLoading,
        isError,
        validationSchema,
      })}
    </div>
  );
};

export default FormGenerator;
