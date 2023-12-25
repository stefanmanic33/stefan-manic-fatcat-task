interface FormData {
  title: string;
  body: string;
}

interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export const usePost = {
  data: {} as ApiResponse,
  isLoading: false,
  isError: false,
  submitForm: async (formData: FormData) => {
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
