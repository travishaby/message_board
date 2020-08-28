import types "types";
import Array "mo:base/Array";

type Topic = types.Topic;
type Comment = types.Comment;

actor Board {
    var topics : [Topic] = [];
    var nextId : Nat = 1;
    var comments : [Comment] = [];
    var nextCommentId : Nat = 1;

    public query func getTopics () : async [Topic] {
        topics;
    };

    public func addTopic (titl : Text, desc : Text) : async Topic {
        let topic : Topic = {
            id = nextId;
            title = titl;
            description = desc;
        };
        topics := Array.append<Topic>(topics, [topic]);
        nextId += 1;
        topic;
    };

    public func getComments (topicId : Nat) : async [Comment] {
        Array.filter<Comment>(comments, func (comment) {
            comment.topicId == topicId;
        });
    };
};
