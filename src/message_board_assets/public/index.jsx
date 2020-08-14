import message_board from 'ic:canisters/message_board';
import * as React from 'react';
import { render } from 'react-dom';

class MyHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }
 
  componentDidMount() {
    this.getTopics()
  }

  async getTopics() {
    const topics = await message_board.getTopics();
    this.setState({ ...this.state, topics: topics });
  }

  renderTopics() {
    return this.state.topics.map(({title, description}) => (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <div style={{ "background-color": "grey" }}>
          <h1>Greetings, to the Guild DApp Message Board!</h1>
        </div>
        <div>
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}

render(<MyHello />, document.getElementById('app'));