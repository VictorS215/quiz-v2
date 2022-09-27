var score= 0 

document.querySelector('.score').innerHTML= "Score:" + score
function generateQuestion (){
    let a=  Math.floor(Math.random()* 10)
    let b=  Math.floor(Math.random()* 10)

    document.querySelector('.question').innerHTML= `Tell me what ${a} * ${b} is?`
    let correctAnswerIndex = Math.floor(Math.random()* 4)
    for (let i = 0; i<4; i++){
        let answerDiv = document.createElement('div')
        answerDiv.classList.add ('answer')
        if (i=== correctAnswerIndex) {
            answerDiv. innerHTML = a * b 
        }
        else {
            answerDiv. innerHTML= Math.round(Math.random() * 20)
        }
        document.querySelector(".answers").appendChild(answerDiv)
    
     answerDiv.addEventListener('click', () => {
            if (i === correctAnswerIndex) {
                document.body.style.background = "green"
               score++
                document.querySelector('.score').innerHTML= "Score:" + score
            } else {
                document.body.style.background = "red"
                score--
                document.querySelector('.score').innerHTML= "Score:" + score
            }
            setTimeout(()=> {
                document.body.style.background = "white"
                document. querySelector ('.answers'). innerHTML = ""
                generateQuestion()
            }, 1000)
           
    
        })
        
    }
      
}
generateQuestion()




//let answerDiv. classList. add ('answer')
//answerDiv. innerHTML = 
//document. querySelector('.answers').appendChild(awnsersDiv)
//addEventListener('click, ()' => {})

/*
document.body.style.background = 'red'
setTimeout(()=> {})
document. querySelector('.answers'). innerHTML =*/