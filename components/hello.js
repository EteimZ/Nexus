import { Nexus, Component } from '../nexus.js';

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