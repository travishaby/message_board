import message_board from 'ic:canisters/message_board';

message_board.getTopics().then(topics => {
  const app = document.getElementById('app')
  const topicNodes = topics.map(buildTopicNode)
  topicNodes.forEach(node => app.appendChild(node))
});

function buildTopicNode({title, description}) {
  // make a div for the topic
  const topicNode = document.createElement('div')
  // set the title
  const topicTitle = document.createElement('h2')
  topicTitle.innerHTML = title
  topicNode.appendChild(topicTitle)
  // set the description
  const topicDescription = document.createElement('p')
  topicDescription.innerHTML = description
  topicNode.appendChild(topicDescription)

  return topicNode
}