# Contact Form Component

Demo: https://gtwb.github.io/contact-form-component/

A small React contact form demo that validates fields client-side and shows a success screen with the submitted details. This project is a form component, client-side validation, and responsive styling.

## Features

- Controlled React form inputs (first name, last name, email, message)
- Query type selection (General Enquiry / Support Request)
- Consent checkbox
- Client-side validation with user-friendly error messages
- Success screen displaying submitted details
- Responsive CSS layout

## Tech stack

- React (Create React App / or similar setup)
- Plain CSS (src/index.css)
- No backend — client-only demo (no persistence)

## Getting started

1. Clone the repository

   ```bash
   git clone https://github.com/GTWB/contact-form-component.git
   cd contact-form-component
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Run locally

   ```bash
   npm start
   # or
   yarn start
   ```

   The app should open at http://localhost:3000

4. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Usage

The demo mounts the `Form` component in `src/App.js`. If you extract the form for reuse, you can import it:

```javascript
import Form from "./Form";

function App() {
  return <Form />;
}
```
