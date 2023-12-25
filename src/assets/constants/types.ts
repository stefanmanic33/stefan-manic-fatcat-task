export interface ValidationSchema {
  title: {
    required: boolean;
    maxLength?: number;
  };
  body: {
    required: boolean;
    maxLength?: number;
  };
}

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ApiHook {
  data: PostData;
  isLoading: boolean;
  isError: boolean;
  submitForm: (formData: any) => Promise<void>;
}

export interface FormGeneratorProps {
  validationSchema: ValidationSchema;
  apiHook: ApiHook;
  renderForm: any;
}

export interface UserFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<{}>>;
  handleSubmit: () => void;
  checkIsDisabledButton: () => boolean;
  successMessage: boolean;
  isLoading: boolean;
  isError: boolean;
  validationSchema: ValidationSchema;
}
