const fs=require('fs');                                      //Getting inbuild fileSystem module 
const questions=require('./questions');                       //Created Module
fs.writeFileSync('questions.json',JSON.stringify(questions));//COnvert into json