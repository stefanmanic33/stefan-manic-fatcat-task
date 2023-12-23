// MyForm.js

import React from 'react';
import FormGenerator from './FormGenerator';

export const UserForm = () => {
  const validationSchema = {
    title: {
      required: true,
      maxLength: 50,
    },
    body: {
      required: true,
      maxLength: 200,
    },
  };

  const apiHook = {
    // Implement your API hook logic here
    // Example: usePostApi from a custom hook
    data: {}, // Your API response data
    isLoading: false, // Loading state
    isError: false, // Error state
    submitForm: async (formData) => {
      // Implement your form submission logic here
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  };

  const renderForm = ({ formData, setFormData, handleSubmit, isLoading, isError, validationSchema }) => (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {/* Display error message if validation fails */}
        {validationSchema.title.required && !formData.title && <div>Title is required</div>}
        {validationSchema.title.maxLength &&
          formData.title &&
          formData.title.length > validationSchema.title.maxLength && (
            <div>Title exceeds maximum length</div>
          )}
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={formData.body || ''}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        {/* Display error message if validation fails */}
        {validationSchema.body.required && !formData.body && <div>Body is required</div>}
        {validationSchema.body.maxLength &&
          formData.body &&
          formData.body.length > validationSchema.body.maxLength && (
            <div>Body exceeds maximum length</div>
          )}
      </div>
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
      {isError && <div>Error submitting the form</div>}
    </form>
  );

  return <FormGenerator validationSchema={validationSchema} apiHook={apiHook} renderForm={renderForm} />;
};
