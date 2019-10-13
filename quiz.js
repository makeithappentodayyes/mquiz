var questions = [
    {
        "title":" how many colums total?", 
        "options": ["twelve","seven","three","four"],
    "answer":"twelve"
    },

    {
        "title":" how many colums total?", 
        "options": ["twelve","seven","three","four"],
    "answer":"twelve"
    },

   {
        "title":" how many colums total?", 
        "options": ["twelve","seven","three","four"],
    "answer":"twelve"
    },
    {
        "title":" how many colums total?", 
        "options": ["twelve","seven","three","four"],
    "answer":"twelve"
    }
]






// var questions = ("4")

function gametime(){

  var questionelement = document.getElementById("question") 
  var choices = document.querySelector("choice-button")
console.log(questionelement)

  for (var i=0; i < questions.length; i++) {
    questionelement.innerText = questions[i].title
    choices.innerHTML = questions[i].options[0]
    console.log(choices)
}

}