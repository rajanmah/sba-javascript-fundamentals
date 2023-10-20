// The provided course information.
const courseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const learnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id:125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];


function getLearnerData(courseInfo,assignmentGroup,learnerSubmissions){

  try{
    if (assignmentGroup.course_id !== courseInfo.id){
  throw new Error ("Invalid Input. The Assignment Id and CourseInfo Id did not match.")
} 

}catch(error) {
  // console.log(error)  // try catch to ensure course Ids are matched.
}



  // const { id, course_id, group_weight,assignments} = assignmentGroup; //Destructuring the object assignmentGroup
  
  // let newAssignments=[];
  // let dateInput = assignments.due_at;
  //   let dateObject = new Date(dateInput)
  //   console.log(dateObject);

  // for (let i=0; i<assignments.length; i++){
  //    if (assignments.due_at!===)
  
  // }
 
  
  

  
  let forTotalScore = assignmentGroup.assignments;
  let pointsPossible = 0;
  for (let i=0;i<forTotalScore.length;i++){
     pointsPossible +=forTotalScore[i].points_possible
  }
  // console.log(pointsPossible) //returns 700 sum of points_possible of all 3 assignments



// Number of Objects Each learner Id have -----SHOW

const individualLearner = (learnerSubmissions = []) => {
  const res = {};
  for (let i=0; i<learnerSubmissions.length;i++){
    const{learner_id} = learnerSubmissions[i];
    if (res.hasOwnProperty(learner_id)){
      res[learner_id]++;
    } else {
      res[learner_id] =1;
    };
  };
  return res
}
// console.log(individualLearner(learnerSubmissions)) //{ '125': 3, '132': 2 } >>> Shows learner #125 has submitted 3 assignments and #132 has submitted 2 assignment (now need to add the scores)



const learnerOne = learnerSubmissions.filter(function(item) { 
  return item.learner_id === 125 ; 
}); 
// console.log(learnerOne); // Array of objects only relating to learner with id 125 


const learnerTwo = learnerSubmissions.filter(function(item) { 
  return item.learner_id === 132 ; 
}); 
// console.log(learnerTwo); // Array of objects only relating to learner with id 132

let scoresOne=[];
let totalOne = 0;

for (let i=0; i<learnerOne.length; i++){
  totalOne+= learnerOne[i].submission.score
  scoresOne.push(learnerOne[i].length)

}
// console.log(totalOne); // result 597 score scored by learner 1



let scoresTwo=[];
let totalTwo = 0;

for (let i=0; i<learnerTwo.length; i++){
  totalTwo+= learnerTwo[i].submission.score
  scoresTwo.push(learnerTwo[i].length)

}
// console.log(totalTwo); // result 179 scire scored by learner2

 let learnerScored = [totalOne, totalTwo]
//  console.log(learnerScored); //returns [ 597, 179 ] array of total scores scored by each learner



const learners= learnerSubmissions.map(({learner_id})=>learner_id) 


function uniqueLearners(ids){
  return ids.filter((value,index) => ids.indexOf(value) === index)
  
};
// console.log(uniqueLearners(learners)) // returns [ 125, 132 ]  unique learners


function setID(item, index) {
  let fullname = "learner_id: " + item;
    return fullname;
}
let output= uniqueLearners(learners).map(setID);
// console.log(output);  // returns [ 'learner_id: 125', 'learner_id: 132' ]   given keys to unique learners






let learnerScores = [totalOne, totalTwo];
learnerScores.forEach((v,i,arr) => arr[i] = `learner score: ${v}`)

// console.log(learnerScores) //returns [ 'learner: 597', 'learner: 179' ] given keys to array of scores obtained by each learner



const avg = [];
for (let i=0;i<learnerScored.length;i++){
  avg.push(learnerScored[i]/pointsPossible*100)
 
}
// console.log(avg) // returnsv[ 85.28571428571429, 25.571428571428573 ] array of average scores scored by each learner

function setIDs(item, index) {
  let fullname = "avg: " + item;
    return fullname;
}
let avgOutput= avg.map(setIDs);
// console.log(avgOutput);  //returns [ 'avg: 85.28571428571429', 'avg: 25.571428571428573' ] assigned keys to array of average scored by each learner



let result = [output, avgOutput]
return result
/*returns [
  [ 'id: 125', 'id: 132' ],
  [ 'avg: 85.28571428571429', 'avg: 25.571428571428573' ]
]
*/


}
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

console.log(result);
