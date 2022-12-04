class Nexus {
  constructor() {
    this.components = [];
  }

  registerComponent(component) {
    this.components.push(component);
  }

  render() {
    for (const component of this.components) {
      const root = document.getElementById("root");
      root.innerHTML = component.render();
      component.componentDidMount();
    }
  }
}

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    // Update the state of the component
    Object.assign(this.state, state);

    // Re-render the component's user interface
    const root = document.getElementById("root");
    root.innerHTML = this.render();
    this.componentDidMount();
  }

  render() {
    // This method should be implemented by subclasses
  }

  componentDidMount() {
    // This method can be implemented by subclasses
  }
}

export {Nexus, Component};