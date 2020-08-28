type Topic = {
  id: Nat;
  title: Text;
  description: Text;
};

type Comment = {
  id: Nat;
  body: Text;
  topicId: Nat;
};