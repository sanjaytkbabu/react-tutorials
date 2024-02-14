# react-tutorials
A repo to hold all my react tutorials 

https://react.dev/learn

You will learn
How to create and nest components
How to add markup and styles
How to display data
How to render conditions and lists
How to respond to events and update the screen
How to share data between components

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}


The export default keywords specify the main component in the file.

To create a react app:

npx create-react-app <app-name>

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:
return (
  <h1>
    {user.name}
  </h1>
);


### To include jsx inside html use {} and to include html inside jsx use ().

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
