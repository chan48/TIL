# Mongo DB CRUD

equality match :


## Comparison Operators
- $gt : greater than
- $gte : greater than equal too
- $lt : less than
- $lte :
- $ne :
- $in : matches any of the values specified in the array
- $nin : reverse usage of $in

## Element Operators
- $or :
- $and :

## Logical Operators
- $

## Regex Operator
- $regex : regular expression operator
  ex) /^Won\s./

## Question
Q. How many movies list "Sweden" second in the the list of countries.
A) db.movieDetails.find({"countries.1":"Sweden"}, {countries:1}).count()

Q. As a follow up to the previous question, how many documents in the video.movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed?
A) db.movieDetails.find({"genres" : {$all: ["Comedy", "Crime"]}}, {"genres": 1).pretty().count()
