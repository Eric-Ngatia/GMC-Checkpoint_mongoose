import mongoose from "mongoose";
const server = '127.0.0.1:27017';
const database = "CheckpointMongooseDB";



class Database {


    constructor(){
        this.__connect();
    }

    __connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(
                () => {
                    console.log('Connexion établie avec succès à la bd ✅')
                }
            )
            .catch (err => console.log("Connexion échouée❌❌" + err))
    }
}


export default Database;
