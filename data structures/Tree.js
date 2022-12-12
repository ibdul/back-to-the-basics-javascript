const { Queue } = require("./Queue.js");

let GRAPH = {};
GRAPH["root"] = {
  skill: "gaming",
  friends: [
    { name: "Fauz", skill: "cooking" },
    { name: "Hamza", skill: "logistics" },
    { name: "Marshall", skill: "programming" },
  ],
};
GRAPH["Fauz"] = {
  skill: "cooking",
  friends: [
    { name: "Fausta", skill: "drinks" },
    { name: "Sarah", skill: "arts" },
  ],
};
GRAPH["Hamza"] = {
  skill: "logistics",
  friends: [
    { name: "Deborah", skill: "tailoring" },
    { name: "Khadeejah", skill: "nursing" },
  ],
};
GRAPH["Marshall"] = {
  skill: "programming",
  friends: [
    { name: "Emmanuel", skill: "coordination" },
    { name: "Royale", skill: "specOps" },
  ],
};

// find a tailor from root

function searchTree(searchSkill) {
  const myQueue = new Queue();
  myQueue.enqueue("root");

  for (let friend of GRAPH["root"].friends) {
    myQueue.enqueue(friend.name);
  }
  searched = { name: true };

  while (!myQueue.isEmpty()) {
    let { value: nextName } = myQueue.dequeue();
    let person = GRAPH[nextName];
    if (!searched[person.name]) {
      if (person.skill == searchSkill) {
        return person;
      } else {
        for (let friend of person.friends) {
          myQueue.enqueue(friend.name);
        }
      }
      searched[person.name] = true;
    }
  }
  return false;

  //   let { value } = myQueue.dequeue();
  //   if (value.skill == searchSkill) {
  //     return value;
  //   } else if (value.friends) {
  //     for (let friend of value.friends) {
  //       return searchTree(searchSkill, GRAPH[friend.name]);
  //     }
  //   }
  //   return false;
}
const searchSkill = "cooking";
const current = "root";

console.log(searchTree(searchSkill, current));
