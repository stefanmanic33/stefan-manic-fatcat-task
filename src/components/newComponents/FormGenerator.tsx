import React, { useState } from "react";

import { FormGeneratorProps } from "@homework-task/assets/constants/types";

interface FormData {
  title?: string;
  body?: string;
}

export const FormGenerator = ({
  validationSchema,
  apiHook,
  renderForm,
}: FormGeneratorProps) => {
  const [formData, setFormData] = useState<FormData>({});
  const { isLoading, isError, submitForm } = apiHook;
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await submitForm(formData);
      setSuccessMessage(true);
    }
  };

  const checkIsDisabledButton = () => {
    if (
      (validationSchema.title.maxLength &&
        formData.title &&
        formData.title.length > validationSchema.title.maxLength) ||
      (validationSchema.body.maxLength &&
        formData.body &&
        formData.body.length > validationSchema.body.maxLength) ||
      !formData.title ||
      !formData.body
    ) {
      return true;
    } else {
      return false;
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
        checkIsDisabledButton,
        setSuccessMessage,
        successMessage,
        isLoading,
        isError,
        validationSchema,
      })}
    </div>
  );
};
