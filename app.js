// app.js

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.template = props.template;
  }

  render() {
    return this.template(this.data);
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // Increment the count and re-render the component
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return `
      <div>
        <h1>Counter</h1>
        <p>Count: ${this.state.count}</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
      </div>
    `;
  }

  componentDidMount() {
    // Attach event listeners to the increment and decrement buttons
    const increment = this.increment.bind(this);
    const decrement = this.decrement.bind(this);
    
    const incrementButton = document.getElementById("increment");
    incrementButton.addEventListener("click", increment);

    const decrementButton = document.getElementById("decrement");
    decrementButton.addEventListener("click", decrement);
  }
}

const framework = new Nexus();

const template = (data) => `
    <div>
      <h1>${data.title}</h1>
      <p>${data.body}</p>
    </div>
  `;

const data = {
  title: "Hello, world!",
  body: "This is some sample data.",
};

const helloWorld = new HelloWorld({ template, data });
const counter = new Counter();

framework.registerComponent(helloWorld);
framework.registerComponent(counter);
framework.render();
