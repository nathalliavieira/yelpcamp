const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose.default); //Usando esse plugin eu nao preciso passar para o nosso schema que iremos também receber um username e password

module.exports = mongoose.model('User', UserSchema);