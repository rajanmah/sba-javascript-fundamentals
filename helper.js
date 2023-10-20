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

// console.log(assignmentGroup.assignments) 
/*
let forTotalScore = assignmentGroup.assignments;
let pointsPossible = 0;
for (let i=0;i<forTotalScore.length;i++){
  pointsPossible +=forTotalScore[i].points_possible
}
console.log(pointsPossible)

// })*/


  
//   console.log(id);
//   console.log(assignments)



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

  // ----------------useful for last step ---------
  let test = {1:100, 2:200, 3:300}
let res = Object.entries(test).map(([id, value]) => ({id, value}))
 
console.log(res)








const search = learnerSubmissions.filter(function(item) { 
  return item.learner_id === 125 ; 
}); 
console.log(search);
console.log(typeof search)




//  console.log(item4)
  // const traveler = [
  //   { description: 'Senior', Amount: 50 },
  //   { description: 'Senior', Amount: 50 },
  //   { description: 'Adult', Amount: 75 },
  //   { description: 'Child', Amount: 35 },
  //   { description: 'Infant', Amount: 25 },
  // ];
  
  // console.log(traveler.reduce((n, {Amount}) => n + Amount, 0));
  // console.log(learnerSubmissions.reduce((n,{submission.score}) =>n+submission.score,0))


// var holder = {};

// obj.forEach(function(d) {
//   if (holder.hasOwnProperty(d.name)) {
//     holder[d.name] = holder[d.name] + d.value;
//   } else {
//     holder[d.name] = d.value;
//   }
// });

// // var obj2 = [];

// for (var prop in holder) {
//   obj2.push({ name: prop, value: holder[prop] });
// }

// console.log(obj2);

