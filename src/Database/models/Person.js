import mongoose from "mongoose";



export const PersonSchema = new mongoose.Schema({
    
    name : {type : 'string', required : true},
    age : {type : Number},
    favoriteFoods : Array,

})


const Person = new mongoose.model('person', PersonSchema);
export default Person;