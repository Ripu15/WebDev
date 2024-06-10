/*
Why do we need React?
-We donot require it for static websites
-Static websites means , websites that do not change content once loaded


-For dynamic websites, these libs make it easier to do DOM manipulation
-React is just an easier way to write normal HTML/CSS/JS.
 It's new syntax that under he hood gets converted to HTML/CSS/JS
 -When command 'npm run build' is ran on react code, it gets converted to HTML/CSS/JS
 as browser understands it

 Problem with traditional way:
 -Need to write a lot of code
 -As app gets scaled it becoms very hard to write the code(DOM maipulation becomes tough)
 -React created new syntax to do frontends

-To create a react app you need to know:
1. state
2. component
3. re-rendering

1.state:
An object that represents the current state of the app. Its the dynamic things in your app
ex: the value of the counter
The dynamic website for counter on click has state:
{
    count: 1
}

2. Component:
How a DOM element should render,given state
Its a re-usable, dynamic, that changes , given a state
ex; for linkedIn app topbar Home,My Network,Jobs,Messaging, Notification are components
dynamic website for counter on click has click count is an input and is
supposed to render accordingly.

3. Rerendering:
React takes care of re-rendering by changing the component
A state change triggers a re-render
A re-render represents the actual DOM being manipulated when state changes

Virtual DOM is DOM's presently in react keeps in memory for updating

"You have to define all your components once , and then you have to do is update state of your app
React takes care of re-rendering your App"

Creating a React app
-run command:
npm create vite@latest //It creates a boiler React app 

Understanding File structure :
-index.html:it hs script has src as main.jsx
-jsx(Java script xml): can support both JS and XML code
-main.jsx: renders App component
-App.jsx:

npm run build: takes react code and converts
it into html/css/js in dist folder,
now lets run app using these files:
cd dist
serve
it serves the app at http://localhost:8080/
*/