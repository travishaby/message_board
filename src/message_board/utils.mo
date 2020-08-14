// Import standard libraries
import Array "mo:base/Array";
import Nat "mo:base/Nat";

// Import type properties for the Topic type definition
import types "./types";

type Topic = types.Topic;

// Add to-do item utility
func add(topics : [Topic], nextId : Nat, titl : Text, desc : Text) : [Topic] {
  let topic : Topic = {
    id = nextId;
    title = titl;
    description = desc;
  };
  Array.append<Topic>(topics, [topic])
};