## Homework task

### About aplication

A little bit about the app. The application has a home page, 
it is possible to enter the title and body in the form that 
you can send by pressing the submit button. It is also possible
 to insert some other components as desired. It is possible to 
 list a list of different users and information about them.

 #### Screenshots:

 #### Home Page

 The home page allows users to enter a title and body in the form.
 

 <img width="1390" alt="Screenshot 2023-12-25 at 20 41 58" src="https://github.com/stefanmanic33/stefan-manic-fatcat-task/assets/132456152/05149ed1-9e13-47aa-b730-464c6ca094f0">
 

#### Form Submission

Users can submit the form by pressing the submit button.
You just need to complete all the validations in the oils, 
so that you can send the entered form


<img width="1125" alt="Screenshot 2023-12-25 at 20 42 15" src="https://github.com/stefanmanic33/stefan-manic-fatcat-task/assets/132456152/564b6332-c97e-423d-b974-e2e75144e0d9">


### User List

The application also features a list of different users 
and information about them.
Feel free to customize the section and image paths based on 
your actual project structure. Including such visuals significantly 
improves the documentation and helps users better understand the application's features.


<img width="1329" alt="Screenshot 2023-12-25 at 20 42 25" src="https://github.com/stefanmanic33/stefan-manic-fatcat-task/assets/132456152/4e015a94-dd20-4f38-87ff-2ae45da593f8">


### Overview

Overview
This project involved the transition of a JavaScript codebase to TypeScript and 
the enhancement of existing React components. The primary focus was on ensuring 
a robust and type-safe codebase while implementing scalable and reusable 
components.

### TypeScript Migration

The project has been successfully migrated to TypeScript,
adhering to the following compiler options:

{
  "compilerOptions": {
    "noImplicitAny": true,
    "strict": true,
    "strictNullChecks": true,
    "noImplicitThis": true
  }
}

Additionally, import aliases have been configured using the 
format ***@homework-task/path/to/file.ts***.

### List Component

#### Implementation

A new React component, **`ListComponent`**, was developed to fetch 
and display data from the API endpoint ***https://jsonplaceholder.typicode.com/users***. 
The displayed list includes essential keys for each 
item: id, name, username, email, and phone.

Features

### 1. Validation Schema:

Accepts a validation schema prop to ensure that form data adheres to specified rules.

### 2. API Hook Call:

Incorporates an API hook that handles states such as data, isLoading, and isError.

### 3. Callback Function for Form Rendering:

Implements a callback function prop (renderForm) that renders the form elements 
and handles their state appropriately.

### Form Component

Utilizing **`ListComponent`**, a form component was created with the following specifications:

#### Input Field ('title'):

A required field with a maximum character limit.

#### Textarea Field ('body'):

Also a required field with a maximum character limit.
Both fields display error messages if the input doesn't 
meet the criteria set by the validation schema.

For form submissions, the component uses the POST method 
at ***https://jsonplaceholder.typicode.com/posts***.

### Page Generator Component

#### Implementation

A reusable React component, **`PageGeneratorComponent`**, 
was developed to build web pages dynamically. 
This component handles different page layouts, 
ensuring scalability and reusability. It takes an 
array of objects as the main prop, with each object 
representing a section of the page with its own layout and components.

#### Prop Structure

Each object in the array contains:


* **type**: Identifying the layout type.
* **components**: An array of objects, each describing a component 
to be rendered in this section.
* **props**: Properties specific to that layout (e.g., background color).

Each component object has:

* **type**: The type of the component (e.g., componentHero).
* **props**: Properties specific to that component.

You can use the components provided in **`src/components`** or 
add your own components.

### Usage

#### 1.Install Dependencies:
     npm install

#### 2.Run the Development Server:
     npm start

### Conclusion

The project now features a TypeScript codebase with enhanced React 
components for list display and dynamic page generation. These components
 are designed to be scalable, reusable, and adhere to strict typing 
 for a more robust codebase. The README provides a comprehensive 
 overview of the implemented features and usage instructions for each component.
