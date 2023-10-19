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
      learner_id: 125,
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

  // OUTPUT
//   [
//     {
//     id: ID of the learner 125/132
//     avg:score1+score2/possible-points1+possible-points2 in PERCENTAGE
//     assignment_id:{ 
//     id:1,2;
//     percentage scored : %%
//      }
//      }
//     {
//     id:
//     avg:
//     assignment_id:
//   }
    
//   ]
//OUTPUT

function getLearnerData(courseInfo,assignmentGroup,learnerSubmission){
  const { id, course_id, group_weight,assignments} = assignmentGroup;

  for (const points of assignments){
    let pointsPossible=[];
    pointsPossible.push(pointsPossible = points.points_possible)// points possible
    // console.log(pointsPossible) 

// console.log(assignments[0].points_possible)

  }
// average of scores
  let scoresOne=[];
  let totalOne = 0

  for (let i=0; i<learnerSubmissions.length; i++){
    total+= learnerSubmissions[i].submission.score
    scores.push(learnerSubmissions[i].length)

  }
  console.log(total);

  let scoresTwo=[];
  let totalTwo = 0

  for (let i=0; i<learnerSubmissions.length; i++){
    total+= learnerSubmissions[i].submission.score
    scores.push(learnerSubmissions[i].length)

  }
  // console.log(total); //776







let [student1, student2] = learnerSubmission;
console.log(student1);

for (let learnerId in learnerSubmission){
  if (learnerSubmission.learner_id===125){
    console.log("its true")
  } else {
    console.log("its false")
  }
}



// let avg = function () {
  const learner1=learnerSubmission.filter(function(uniqueLearner){
     uniqueLearner.learner_id===125;

  });
  console.log(learner1);
  
//   const search = objArr.filter(function(item) { 
//     return item.name === 'julie'; 
// }); 
// console.log(search);

// }



//   for (let i=0; i<assignments.length; i++){
//     const courseId = assignments.course_id[i]
// console.log(courseId)
//   }



  


// return result;//
}
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

// console.log(result);

// destructuring Object
// function displayCourseId({course_id, group_weight}){
//     console.log(`the course is ${course_id} and weight is ${group_weight} `);
// }
// displayCourseId(assignmentGroup)


// let learnerId = [];
// learnerSubmissions.forEach((LearnId) => )

//Array Destructure
// const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

// const [one, sond, third] = colorArr;
// console.log(one, sond, third );

//-----------------------------------
// Object Desstructure
// const freeCodeCamp = {
//   frontend: "React",
//   backend: "Node",
//   database: "MongoDB",
// };
//------------------------------------
// const { frontend, backend } = freeCodeCamp;

// console.log(one, two);



// let arr = [
//   {val:"a"},
//   {val:"b"}
// ];

// const [{val: valueOfA}, {val: valueOfB}] = arr

// console.log(
//   valueOfA, valueOfB
// )

// learnerSubmissions.filter(function(learId){
// console.log(learId)
//   });

//Array Destruction ------>

  // const learner1 = learnerSubmissions.filter(function(learId){
  //   return learId.learner_id === 125;
  // });
  // // console.log(learner1)


  // const learner2 = learnerSubmissions.filter(function(learId){
  //   return learId.submission[0];
  // });
  // console.log(learner2)



// const {assignments} = assignmentGroup;
//   console.log( assignments)
// console.log(assignments[2].points_possible)
// const pointsPossible= assignments[2].points_possible
// if (assignments[2].points_possible > 400){
// console.log("you passed")
// }





// Array of objects -------------------useful--------

var objArr = [ 
    { 
        name: 'john', 
        age: 12, 
        gender: 'male'
    }, 
    { 
        name: 'jane', 
        age: 15, 
        gender: 'female'
    }, 
    { 
        name: 'julie', 
        age: 20, 
        gender: 'trans'
    } 
]; 
  
// console.log("Accessing the Array using the forEach loop:") 
// objArr.filter(function(item) { 
//     console.log(item); 
// }); 
console.log("Using the Filer method to acces value") 
const search = objArr.filter(function(item) { 
    return item.name === 'julie'; 
}); 
console.log(search);



// // console.log(learnerSubmissions.map(({learner_id})=>learner_id))
// // console.log(learnerSubmissions.map(({assignment_id})=>assignment_id))
// console.log(learnerSubmissions.map(({submission})=>submission))
// // console.log(learnerSubmissions.map(({assignment_id})=>assignment_id))



// console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));



  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  