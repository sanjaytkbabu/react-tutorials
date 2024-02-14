// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { MouseEventHandler } from 'react';

interface MyButtonProps {
  clickFunction: MouseEventHandler<HTMLButtonElement>;
}

function MyButton ({clickFunction}: MyButtonProps) {
  return (
    <button onClick={clickFunction}>Click Me!</button>
  );
}

const user = {name: 'sanjay',
              age: 30,
              city: 'Victoria',
              imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
              imageSize: 90};

              const products = [
                { title: 'Cabbage', id: 1, isFruit: false },
                { title: 'Garlic', id: 2, isFruit: false },
                { title: 'Apple', id: 3, isFruit: true },
              ];

              const listItems = products.map(product =>
                <li key={product.id} style={ {color: product.isFruit? 'magenta': 'green'} }>
                  {product.title}
                </li>
              );

function handleClick(){
  alert('Clicked!');
}
export default function App () {
  return (
    <div>
      <h1> {listItems[0]} </h1>
     <h1>I am a Button</h1> 
    <MyButton clickFunction={handleClick}/> 
    <h2>My name is {user.name}</h2>
    <img src={user.imageUrl} alt="images" style={ {width: user.imageSize, height: user.imageSize} } className="avatar"/>
    <ul>{listItems}</ul>
    </div>
  );
}
