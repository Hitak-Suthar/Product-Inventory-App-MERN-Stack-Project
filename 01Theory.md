# Week 2 – React Fundamentals 

## 1. Introduction to React

React is a JavaScript library created to build fast, interactive UIs. It uses components to structure the interface and a Virtual DOM for efficient updates.

Why it matters:

* Helps build scalable applications
* Works with huge ecosystems
* Used widely across industries

React follows declarative programming, making UI predictable and easier to maintain.
React is a JavaScript library for building user interfaces. It helps create fast, interactive, and component-based web applications.

### Why React?

* Component-based architecture
* Fast rendering using Virtual DOM
* Reusable UI building blocks
* Large ecosystem and community
* Used by top companies

### How React Works

* Uses components to build UI
* Uses Virtual DOM for efficient updates
* UI automatically updates when state changes

---

## 2. Vite

Vite is a lightning-fast frontend build tool. It uses ES Modules in development, enabling instant reloads.

Key advantages:

* Extremely fast dev server
* Optimized builds with Rollup
* Minimal config

Project structure:

* index.html — root
* main.jsx — connects React to DOM
* App.jsx — main component
* components/ — reusable blocks + React Setup

### What is Vite?

* A modern build tool
* Extremely fast development server
* Lightweight and optimized for React

### Steps to Create a React App Using Vite

1. Create project: `npm create vite@latest`
2. Select template: React → JavaScript
3. Install dependencies: `npm install`
4. Start app: `npm run dev`

### Project Structure Overview

* **src/** → All components and logic
* **main.jsx** → React entry file
* **App.jsx** → Main application component

---

## 3. Components

Components are reusable UI building blocks. Everything on the screen is a component.

Types:

* Functional Components (modern standard)
* Class Components (legacy)

Why components?

* Reusability
* Cleaner structure
* Faster development

React re-renders components only when their state or props change. in React
Components are the building blocks of a React application.

### Types of Components

1. **Functional Components** (modern, preferred)
2. **Class Components** (older)

### Features of Components

* Reusable
* Independent
* Return JSX

### JSX

* JavaScript + HTML-like syntax
* Allows embedding expressions

---

## 4. Props

Props are used to pass data from parent to child. They are read-only.

State

State stores internal data inside a component. Updating state triggers re-renders.

Difference:

* Props: external, immutable
* State: internal, mutable

Best practices:

* Keep state minimal
* Do not mutate state directly & State

### Props

* Data passed from parent to child
* Read-only
* Helps make components dynamic

### State

* Internal data of a component
* Can change over time
* Causes UI re-render

### Difference Between Props and State

| Props                  | State                      |
| ---------------------- | -------------------------- |
| Read-only              | Mutable                    |
| Passed from parent     | Managed inside component   |
| No re-render by itself | Re-renders UI when updated |

---

## 5. Event Handling

React uses synthetic events for consistency across browsers.

Common events:

* onClick
* onChange
* onSubmit

Use handler functions instead of inline logic for maintainability.

Forms require e.preventDefault() to stop page reload. in React
React uses camelCase event names and functions as event handlers.

### Common Events

* `onClick`
* `onChange`
* `onSubmit`

### Example

React handles events using functions passed to JSX elements.

---

## 6. Lists

Lists are rendered using array.map(). Each item must have a unique key to help React track changes.

Forms

Forms in React are controlled components, meaning their values come from state. This allows full control over input values.

Best practices:

* Use one state object for multiple fields
* Validate input on change or submit & Forms

### Rendering Lists

* Use JavaScript `.map()` to loop and display data
* Must include a **unique key** for each element

### Forms in React

* React uses **controlled components**
* Form inputs update state using `onChange`

### Why Controlled Components?

* React manages input values
* Easier to validate and process data

---

## 7. Fetching

Fetching data connects your frontend with APIs. Usually done inside useEffect().

Fetch lifecycle:

1. Component loads
2. useEffect triggers API call
3. Loading state appears
4. Data arrives → UI updates
5. Errors handled gracefully

Always handle loading and error states. API Data

### Why We Fetch Data?

* To display backend information on UI

### What We Use?

* `fetch()` (built-in browser API)
* Use inside `useEffect()` to avoid infinite loops

### Important Note for Week 2

We ONLY learn how to fetch data in theory this week.
Actual integration with your backend API will happen in **Week 3** along with React Router.

---


