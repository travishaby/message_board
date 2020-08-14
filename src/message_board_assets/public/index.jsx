import message_board from 'ic:canisters/message_board';
import * as React from 'react';
import { render } from 'react-dom';

import './message_board.css'; // Import custom styles

class MessageBoard extends React.Component {
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
        <div class="message-board-title">
          <h1>Greetings, to the Guild DApp Message Board!</h1>
        </div>
        <div>
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}

render(<MessageBoard />, document.getElementById('app'));