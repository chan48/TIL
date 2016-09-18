db.companies.aggregate( [
{ $unwind: "$relationships" },
{ $match: { "relationships.person.permalink": { $eq: "roger-ehrenberg" } } },
	{ $group: {
         _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
])


db.companies.aggregate( [
    { $match: { "relationships.person.permalink": { $eq: "josh-stein" } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )


// 퀴즈 1번 되는쿼리
db.companies.aggregate( [
	{ $match: { "relationships.person.permalink": { $eq: "roger-ehrenberg" } } },
    { $project: { name: 1, relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person.permalink",
        companies : { $push: "$name" } ,
        count : {$sum : 1}
    } },
    { $sort: { count: -1 } }
])


// 퀴즈 2번 정답
db.grades.aggregate([
	{ $unwind: "$scores" },
	{ $match: { "scores.type": { $in: ["homework", "exam"]} } },
    { $project : { class_id : "$class_id", student_id : "$student_id", _id: 0, scores: "$scores" } },
    { $group: {
            _id: {class: "$class_id", student: "$student_id" , type: "$scores.type"},
            averageScore: { $avg: "$scores.score" },
    } },
    { $group: {
            _id: {class: "$_id.class"},
            averageScore: { $avg: "$averageScore" },
        } },
	{ $sort : { averageScore : -1 } }
])


// 퀴즈 3번 정답
db.companies.aggregate( [
{ $match: {  founded_year: { $eq: 2004 },  
        "funding_rounds.raised_amount": {$ne: null},  
         "funding_rounds.4": { $exists: true } } },
  { $project: { name:1,  
               _id:0, 
               avg: { $avg: "$funding_rounds.raised_amount" }} },
    { $sort: { avg: -1 } }
] )





