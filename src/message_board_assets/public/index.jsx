import message_board from 'ic:canisters/message_board';
import * as React from 'react';
import { render } from 'react-dom';

import './message_board.css'; // Import custom styles

class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTopic: {},
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

  handleInputChange({target: {value, name}}) {
    this.setState(oldState => ({ newTopic: { ...oldState.newTopic, [name]: value}}))
  }

  async handleCreate(submitEvent) {
    submitEvent.preventDefault()
    const { title, description } = this.state.newTopic
    await message_board.addTopic(title, description)
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
        <div class="new-message">
          <form>
            <label htmlFor="title-input">Title</label>
            <input onChange={this.handleInputChange.bind(this)} name="title" id="title-input" type="text" placeholder="Your topic's title"/>
            <label htmlFor="description-input">Description</label>
            <input onChange={this.handleInputChange.bind(this)} name="description" id="description-input" type="text" placeholder="Your topic's description"/>
            <button onClick={this.handleCreate.bind(this)}>Create</button>
          </form>
        </div>
        <div>
          {this.renderTopics()}
        </div>
      </div>
    );
  }
}

render(<MessageBoard />, document.getElementById('app'));