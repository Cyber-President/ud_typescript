"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'oppai_majin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
let favorite_activities;
favorite_activities = ['Sports'];
console.log(person.name);
