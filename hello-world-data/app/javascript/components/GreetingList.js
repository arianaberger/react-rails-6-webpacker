import React from 'react';

class GreetingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('/greetings.json')
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  }

  renderGreetings() {
    console.log(this.state.data)
    return this.state.data.map(greeting => (
      <li key={greeting.id}>
        {greeting.language}: {greeting.content}
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h1>Hello Data!</h1>
        <ul>{this.renderGreetings()}</ul>
      </section>
    )
  }
}

export default GreetingList;
