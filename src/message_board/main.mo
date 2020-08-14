import types "types";
import utils "utils";

type Topic = types.Topic;

actor Board {
    var topics : [Topic] = [];
    var nextId : Nat = 1;

    public query func getTopics () : async [Topic] {
        topics;
    };

    public func addTopic (title : Text, description : Text) : async () {
        topics := utils.add(topics, nextId, title, description);
        nextId += 1;
    };
};
