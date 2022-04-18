import Database from './src/Database/Database.js';
import Person from './src/Database/models/Person.js';

let db = new Database();

// let person = new Person(
//     {
//         name : "N'Gatia Eric",
//         age : 21,
//         favoriteFoods : ["Fautou igname avec sauce pimentée et viande de brousse", "Garba bien pimentée"]
//     }
// );

// person.save().then((¨person) => {
//     console.log(person);
// })


let person = new Person();
    // Person.create([
    //     {
    //         name : "N'Gatia Eric",
    //         age : 21,
    //         favoriteFoods : ["Fautou igname avec sauce pimentée et viande de brousse", "Garba bien pimentée"]
    //     },

    //     {
    //         name : "Aokiji",
    //         age : 23,
    //         favoriteFoods : ["Crème glacée"]
    //     },

    //     {
    //         name : "Akainu",
    //         age : 2,
    //         favoriteFoods : ["boritos mexicain"]
    //     }
    // ]);

                    // get all people


// Person.find().then((people)=> {
//     console.log(people)
// })


                    // get single person based on her favoriteFoods

// Person.findOne({favoriteFoods : 'Crème glacée'}).then((person) => {console.log(person)});


                    // get person by her id


// let id = "625d7da3ed4e5bf435474d2d";

// Person.findById(id).then((person)=> {console.log(person)});



// Updates by Running Find, Edit, then Save
let id = "625d7da3ed4e5bf435474d2d";