var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Sang:sangpham@cluster0.erqnjbj.mongodb.net/IT_NHT?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
const quizSchema = new Schema({
  quiz: Array
}, {
    name: String,
    public: Boolean,
    collection: 'quiz'
});


const quizModel = mongoose.model('quiz', quizSchema)

module.exports = quizModel