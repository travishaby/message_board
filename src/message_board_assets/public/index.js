import message_board from 'ic:canisters/message_board';

message_board.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
