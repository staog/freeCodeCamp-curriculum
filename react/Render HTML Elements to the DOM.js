const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

let target = document.getElementById('challenge-node');

ReactDOM.render(JSX, target);
