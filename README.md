## ❓ React Questions & Answers

### 1. What is the difference between props and state?

Props are data that we pass from one component to another. State is data that we keep and change inside a component.

### 2. What is JSX, and why is it used in React?

JSX lets us write HTML-like code in JavaScript. It makes building the UI much easier.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` helps us store and update data. I used it to keep track of the technologies in my stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after the component loads. I didn't use it for the JSON in this project because I used `Suspense` for the loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React tell each item apart and update the list properly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition. I used it to show a message when my stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from parent to child using props. To send something back, the child can call a function given by the parent.