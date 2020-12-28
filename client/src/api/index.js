import axios from 'axios';

const url = 'http://localhost:5000';


export  const Adduser = (user) => axios.post(url+'/users/createUser', user);
export  const verifyUser = (inputs) => axios.post(url+'/users/verifyUser', inputs);
export  const Auth = (authInputs) => axios.post(url+'/users/authUser', authInputs);
// Update User ..
export const updateUser = (id, editUser) => axios.patch(url+ '/users/updateUser/'+id , editUser);
// Deleting User Profile ..
export const deleteUser = (id) => axios.delete(url+ '/users/deleteUser/'+id);
// Add Question ..
export const AddQuestions = (question) => axios.post(url + '/questions/createQuestion', question);
// Get All Queations ..
export const GetQuestions = (data) => axios.get(url + '/questions/getAllQuestions');
// Send An Answer ..
export const createAnswer = (answers) => axios.post(url + '/questions/createAnswer', answers);
// Get All Questions And Answers ..
export const GetAllQuestionsAndAnswers = (data) => axios.get(url + '/questions/GetAllQuestionsAndAnswers');


