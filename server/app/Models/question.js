const db = require('./database') 

//Connect With questions Table from our DB .. 

module.exports= {
    //Create Questions ..
    createQuestions:(params,callback)=>{
        var queryStr = `INSERT INTO questions ( question ,user_Id) VALUES (?,?)`;
        db.query(queryStr,params,function(err,result){ 
            callback(err,result)
        })
    
    },
   
    // Get All Questions And Answers ..
    getAllQuestionsAndAnswers:(callback)=>{
        var query = ` SELECT questions.question , answers.answer ,doctors.doctorName  from  ((answers INNER JOIN questions ON answers.question_Id = questions.questionId) INNER JOIN doctors ON answers.doctor_Id = doctors.doctorId); `;
        db.query(query,function(err,results){
            callback(err,results)
        })
    },
  
    // Get All Questions ..
    getAllQuestions:(callback) => {
        var query = `SELECT * FROM questions`;
        db.query(query,function(err,result){
            callback(err,result)
        })
    },

    //Create Answer ..
    createAnswer: (params, callback) => {
        var query = `INSERT INTO answers (answer,question_Id) VALUES (?,?)`;
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    } ,   

    // Get All Questions And Answers For OneUser ..
    getAllQuestionsAndAnswersForOneUser:(params ,callback)=>{
        var query = ` SELECT questions.question , answers.answer ,doctors.doctorName  from  ((answers INNER JOIN questions ON answers.question_Id = questions.questionId) INNER JOIN doctors ON answers.doctor_Id = doctors.doctorId) WHERE questions.user_Id= ?; `;
        db.query(query,params ,function(err,results){
            callback(err,results)
        })
    }
}
