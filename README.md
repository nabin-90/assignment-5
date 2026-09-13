# 🚀 DevStack

> Build your ideal development stack by exploring, comparing, and selecting the right technologies for your next project.

## 📖 About The Project

**DevStack** is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack.

Users can browse frontend, backend, database, and development tools, compare their options, and add technologies to their personal stack.

The project is designed with a clean, modern UI and responsive layout for mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

- ⚛️ **React.js**
- 📘 **TypeScript**
- 🎨 **Tailwind CSS**
- 🔔 **React-Toastify**
- ⚡ **Vite**
- 🧩 **React Icons**
- 📄 **JSON** for technology data

---

## ✨ Features

### 1. 🔍 Explore Technologies
Browse different development technologies with useful information such as:

- Technology name
- Category
- Difficulty level
- Rating
- Description
- Technology badge

### 2. 🧩 Build Your Own Stack
Add your favorite technologies to your personal **Your Stack** section.

You can also remove individual technologies or remove all selected technologies at once.

### 3. 🔔 Interactive Notifications
The application uses **React-Toastify** to provide instant feedback when:

- A technology is added
- A duplicate technology is selected
- Technologies are removed

---

## 📱 Responsive Design

DevStack is fully responsive and works smoothly across:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop screens

---

## 🎯 Project Goal

The goal of DevStack is to provide developers with a simple and interactive way to discover technologies and create a development stack that fits their project needs.

---

## 👨‍💻 Author

**Mahmudun Nabin**

Built with ❤️ using React, TypeScript & Tailwind CSS.

---

## ❓ React Questions & Answers

### 1. What is the difference between props and state?

Props are used to pass data from one component to another. They are basically read-only.

State is used to store data inside a component, and we can change it when needed.

---

### 2. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript/TypeScript.

It makes writing React UI easier and more readable.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component.

In my project, I used it to keep track of the technologies that I added to my stack.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders, like fetching data.

**In my project, I didn't use `useEffect` for this. I used React `Suspense` to handle the loading state while the JSON data was being fetched.**

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.

It helps React know which item was changed, added, or removed.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something different depending on a condition.

In my project, I used it to show an empty message when no technology has been added to the stack.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty. Add some technologies!</p>
) : (
  selectedTechnologies.map((technology) => (
    <div key={technology.id}>{technology.name}</div>
  ))
)}