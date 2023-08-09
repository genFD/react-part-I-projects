# Travel List - State, events, forms and interactive components

## Table of contents

- [✅ Project completed Repo](#project-completed-repo)
- [⌛️ Project starter Repo](#project-starter-repo)
- [🧩 Concepts to review](#concepts-to-review-for-this-project)
- [🎯 Learning goal](#learning-goal)
- [💻 Application Overview](#overview)
  - [📸Screenshot](#screenshot)
  - [🔗Links](#links)
- [🔍 Code walkthrough](#code-walkthrough)
  - [App component](#the-app-component)
  - [Header component](#the-header-component)
  - [Menu component](#the-menu-component)
  - [Footer component](#the-footer-component)
  - [Order component](#the-order-component)

## Project completed repo

- check out the code here `->` [completed](https://github.com/hermkan/react-part-I-projects/tree/main/01-components-props-jsx/completed)

## Project starter repo

- check out the code here `->` [starter](https://github.com/hermkan/react-part-I-projects/tree/main/01-components-props-jsx/starter)

## Concepts to review for this project

- JSX, Components, Props, check out my [notes](https://github.com/hermkan/code-journey-notes/tree/main/notes/04-building-UI/02-react/01-react-introduction/Part%20I)!

## Learning Goal

In building this application, we will sharpen our skills in React components by practicing using props as well as defining, rendering, and referencing components.

## Overview

### Screenshot

![Design preview for pizza-menu](./preview-pizza-menu.png)

### Links

- Live Site URL: [Pizza-menu](https://pizza-menu-props-jsx-components.vercel.app/)

### Built with

- React
- CSS

## Code walkthrough

In this project, the challenge was to build out this this pizza menu for a fictionnal restaurant!

In the **src/** folder :

- **data.js** contains an array of pizzas objects with _name_, _ingredients_, _price_, _photoName_, and _soldOut_ as its properties. We used this to populate the pizza menu.

```js
// data.js
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]
```

- **index.js** renders the `App` component. React relies on two things to render:

1. what content to render
2. and where to place the content at.

We used `.createRoot()` from the `react-dom/client` library to supply a container (this is the where to render):

```js
const container = document.getElementById('root')
const root = createRoot(container)
```

Then, we used `.render()` method to render `App` into the DOM! (this is the what to render)

```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- `style.css` handles styling.

In the **public/** folder :

- `index.html` handles the markup

### The `App` component

React applications are made up of [components](https://github.com/hermkan/code-journey-notes/blob/main/notes/04-building-UI/02-react/01-react-introduction/Part%20I/3.react-components.md#whats-a-component). Components are responsible for rendering pieces of the user interface.

![Components](./assets/components-page.png)

For our project, `App` is the top-level component, and it is responsible for returning the interface to be rendered. In this case, it will be returning an instance of :

- Header
- Menu
- Footer

In other words, `App` will be the outer “shell” that contains three smaller components.

Application components tree :

![component tree](./assets/comp-tree.png)

`App` is the parent, and `Header`, `Menu` and `Footer` are the child components.

We can render `Header`, `Menu`, and `Footer` components inside `App` like so :

```jsx
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
```

### The `Header` component

`Header` is responsible for displaying the restaurant's name.

The `header` component render some [jsx](https://github.com/hermkan/code-journey-notes/blob/main/notes/04-building-UI/02-react/01-react-introduction/Part%20I/2.jsx-virtual-dom.md#what-is-jsx) :

- a `<header>` element
- and a `<h1>` element nested inside, displaying `Fast React Pizza Co.`.

<!-- whose src attribute will receive the profileImg property from props, -->

```jsx
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
```

Header :
![Header](./assets/header.png)

### The `Menu` component

`Menu` is responsible for rendering mutiple instances of the `Pizza` component(a list of pizzas).

We can accomplish this like so :

```jsx
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
      <Pizza>
      <Pizza>
      <Pizza>
      </ul>
    </main>
  )
}
```

- But we also want to render this list conditionally. If the list is empty we want to display a message saying `"We're still working on our menu. Please come back later"`. If the list is not empty, then we will render it. We will use the [ternary operator](https://github.com/hermkan/code-journey-notes/blob/main/notes/02-language-mastery/JS/01-fundamentals/1-fundamentals.md#conditionals) to accomplish this because of the _compact syntax_ for writing conditional expressions:

```jsx
function Menu() {
  // save the pizza array in the constant pizzas
  const pizzas = pizzaData

  // save the array's length in the constant numPizzas
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </ul>
      ) : (
        //
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  )
}
```

You can read it as "if `numPizzas` is _greater_ than 0" (i.e the list is not empty, so the condition is true) then `(?)` display the list, otherwise `(:)` render `<p>We're still working on our menu. Please come back later </p>`

**Note**: Notice how we defined two constants `pizzas` and `numPizzas` locally (inside the function component) . This is because we want to keep the function _pure_. React components have to be _pure_ functions (must not have side effects) in terms of props and state.

- In react, when you want to display multiple similar components from a collection of data, you can use a JavaScript array method like `map()`. We only need to show several instances of the same component using different data : the `pizza name`, `the image`, the `ingredients`, `the price`, and `soldOut`.

As a reminder, our `pizzaData` array looks like this:

```js
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]
```

1. `Using map()`: With this in mind, in the `Menu` component body, we can map over the `pizzaData` array with an argument named `pizza` and return an instance of the `Pizza` component for each pizza object.

Before :

```jsx
{
  numPizzas > 0 ? (
    <ul className="pizzas">
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </ul>
  ) : (
    //
    <p>We're still working on our menu. Please come back later </p>
  )
}
```

After :

```jsx
{
  numPizzas > 0 ? (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza />
      ))}
    </ul>
  ) : (
    <p>We're still working on our menu. Please come back later </p>
  )
}
```

2. `Passing a key for each menu item` : if we check our console in the browser we notice this error message :

![error message](./assets/error-key.png)

This is because JSX elements directly inside a `map()` call always need _keys_! We need to give each array item, a key (a string or a number) that uniquely identifies it among other items in that array (we'll use the `name` property).

```jsx
{
  numPizzas > 0 ? (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza key={pizza.name} />
      ))}
    </ul>
  ) : (
    <p>We're still working on our menu. Please come back later </p>
  )
}
```

3. `Passing props` : Finally, for each `pizza` component we'll pass the `pizzaObj` [props](https://github.com/hermkan/code-journey-notes/blob/main/notes/04-building-UI/02-react/01-react-introduction/Part%20I/4.components-interaction.md#props), which is an object full of information about each pizza.

pizzaObj :

```js
{
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  }
```

passing `pizzaObj` props:

```jsx
{
  numPizzas > 0 ? (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza key={pizza.name} pizzaObj={pizza} />
      ))}
    </ul>
  ) : (
    <p>We're still working on our menu. Please come back later </p>
  )
}
```

Nice! we’ve set up `Menu` to pass down information to the `Pizza` component.
The data in `data.js` is retrieved in `Menu` and flow downward from `Menu` to `Pizza`.
If we put the pieces together, the final version of the `Menu` component looks like so :

```jsx
function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  )
}
```

Recap :

- In react we can generate a set of similar components with JavaScript’s `map()`
- We need to set a _key_ on each component in a collection of items, so React can keep track of each of them even if their position or data changes.
- In react, you can conditionally render some JSX using the ternary operator or `&&` shortcut :
  - `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
  - `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.
- Props are used to pass data from parent components to child components (down the component tree).

### The `Pizza` component

The `Pizza` component is responsible for showing the description and photo of a pizza. It will work with the properties of our passed-down `pizzaObj` object extracted from the **pizzas** array.

- First, we need to read the `pizzaObj` [props](https://github.com/hermkan/code-journey-notes/blob/main/notes/04-building-UI/02-react/01-react-introduction/Part%20I/4.components-interaction.md#props) inside `pizza` component :

```jsx
function Pizza(props) {
  const {
    pizzaObj: { name, photoName, ingredients, price, soldOut },
  } = props
}
```

We used [object destructuring](https://github.com/hermkan/code-journey-notes/blob/main/notes/02-language-mastery/JS/01-fundamentals/5-objects.md#advanced-objects) syntax, to unpack the `props` object and the `pizzaObj` props

- Then inside the return statement, we can apply style conditionnally like so :

```jsx
{
 <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
}
```

You can read it as "if `soldOut` is `true` apply `"sold-out"` css rules otherwise nothing”

We used the same technique to display the string `'SOLD OUT'` or the `price`.

```jsx
<span>{soldOut ? 'SOLD OUT' : `$${price}`}</span>
```

The final version of `pizza` component:

```jsx
function Pizza(props) {
  const {
    pizzaObj: { name, photoName, ingredients, price, soldOut },
  } = props
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : `$${price}`}</span>
      </div>
    </li>
  )
}
```

Menu and Pizza components :

![Menu](./assets/menu.png)

### The `Footer` component

Footer is responsible for rendering an instance of the `Order` component or a message indicating the opening hour.

The `Footer` component starts with the definition of 4 constants:

```jsx
const hour = new Date().getHours()
const openHour = 12
const closeHour = 22
const isOpen = hour >= openHour && hour <= closeHour
```

- `hour` : stores the current hour
- `openHour`: hour the restaurant opens
- `closeHour` : hour the restaurant closes
- `isOpen` : evaluates to a boolean, indicating whether the restaurant is open. You can read it as "if the current hour (`hour`) is greater than or equal to `openHour` _and_ less than or equal to `closeHour`, evaluates to `true`, otherwise return `false”`

Inside the `return` statement, we use conditionnal rendering to render the `Order` component or a `<p>` element.

```jsx
<footer className="footer">
  {isOpen ? (
    <Order closeHour={closeHour} openHour={openHour} />
  ) : (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  )}
</footer>
```

If `isOpen` evaluates to `false` we display a message indicating the opening hours.
If `isOpen` evaluates to `true`, then `Order` will be rendered.
Notice how we pass two props :`closeHour`
and `openHour` to `Order`.
We will use them in `Order` to display the opening and closing hour.

### The `Order` component

This component will be responsible for displaying the `closeHour` and `openHour` properties of our passed-down `closeHour` and `openHour` props.

- First, we used [object destructuring](https://github.com/hermkan/code-journey-notes/blob/main/notes/02-language-mastery/JS/01-fundamentals/5-objects.md#advanced-objects) syntax, to unpack the `props` object.

```jsx
function Order(props) {
  const { closeHour, openHour } = props
}
```

- Then inside the return statement, we access `closeHour` and `openHour` inside the `jsx` expression:

```jsx
return (
  <div className="order">
    <p>
      We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
      online.
    </p>
    <button className="btn">Order</button>
  </div>
)
```

The final version of order :

```jsx
function Order(props) {
  const { closeHour, openHour } = props
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}
```

Footer and order components :

![Footer](./assets/footer.png)

## Concepts Recap - WORKING WITH COMPONENTS, PROPS, AND JSX

### About JSX

- `JSX` is a syntax extension for JavaScript which allows us to treat HTML as expressions.They can be stored in variables, objects, arrays, and more!

- `JSX` elements can have attributes and be nested within each other, just like in HTML.

- `JSX` must have exactly one outer element, and other elements can be nested inside.

### About React components

- React applications are made up of components.

- Components are responsible for rendering pieces of the user interface.

- Function components must return some React elements in JSX syntax.

- A React component can be used by calling the component name in an HTML-like self-closing tag syntax : `<MyComponent />`

- Function components can return multiple JSX lines by nesting the elements in a parent element.

- Components can conditionally return JSX elements by putting conditional statements inside of the components.

- Components can interact with each other by returning instances of each other.

- Components interacting allows them to be broken into smaller components, stored into separate files, and reused when necessary.

### About props

- Information that gets passed from one component to another is known as `props`

- Props can be used to customize the output of each component depending on the information that is passed in

- A component’s props is an object. It holds information about that component.

- We pass props by giving the component an attribute :

```jsx
<Greeting name="Jamy" />
```

- Anything can be passed as props: single values, arrays, objects, functions, even other components :

```jsx
function courseRating() {
  const rating = 5
  const calculateRating = ()=>{...}
  return (
    <Rating
      text="Course rating"
      currentRating={rating}
      numOption={3}
      options={['terrible', 'beautiful', 'amazing']}
      allRatings={{avg: 3.9, num: 3244}}
      setRating={calculateRating}
      component={Star}
    />
  )
}
```

- To display the information that you pass, define your function component with props as a parameter and the object values are accessed with the dot notation.

```jsx
function Button(props) {
  return <button>{props.displayText}</button>
}
```

- Components have to be pure functions in terms of props and state, so Props in React travel in a _one-way direction_, from the top to bottom, parent to child.

<!-- Export the Body component after its function definition so that it can be imported and used in Card.js. -->

<!-- Let’s take a brief detour back to App.js. -->

<!-- Open Card.js and import the Header and Body components.  -->

<!-- Previously in App.js, you’ve passed down a commentObject attribute to Card which contains an object with three properties (profileImg, username, and comment).

It’s time to access those and finally pass them to the children components: Header and Body. -->

<!-- Header expects two props, profileImg and username. -->

<!-- Give the Header instance an attribute named profileImg and the value of props.commentObject.profileImg. -->

<!-- If you’ve succeeded, you should see three comments rendered on the web browser, engaging in a riveting discussion about animals. -->
