const correctAnswer = ['B','A','B','A'];
const form = document.querySelector('.quiz-form');
const displayPercentage = document.querySelector('.displayPercentage');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
  e.preventDefault();
  let score=0;
  const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //check answer

    userAnswer.forEach((answer, index) =>{
      if(answer === correctAnswer[index])
      score +=25;
    });
    window.scrollTo(0,0);
    result.style = 'display: block ';
    //displayPercentage.innerHTML = ` ${score}% `;
    let output = 0;
    const timer = setInterval(()=> {
      displayPercentage.innerHTML = ` ${output}% `;
      if(output === score){
        clearInterval(timer);
      }else{
        output++;
      }
    },10);

})