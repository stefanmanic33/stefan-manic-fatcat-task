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
    return true;
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
