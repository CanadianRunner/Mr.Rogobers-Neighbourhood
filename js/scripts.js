//business logic
userInput = text => {
  let outputtedValuesArray = [];
  let textAreaInput = parseInt(text);


  for (let i = 0; i <= textAreaInput; i++) {
    
  
    stringIteration = i.toString();
    
    if (stringIteration.includes('3')) {
      outputtedValuesArray.push(`\'Won't you be my neighbour?\'`);
    }

    else if (stringIteration.includes('2')) {
      outputtedValuesArray.push(`\'Boop!\'`);
    }

    else if (stringIteration.includes('1')) {
      outputtedValuesArray.push(`\'Beep!\'`);
    } 

    else {
      outputtedValuesArray.push(stringIteration);
    }
  };
    
  return outputtedValuesArray.join(', ');
};



//UI Logic
$(document).ready(function () {
  $('#submit_button').click(function(event){
    event.preventDefault();
    const textBox = $('#text_area').val();
    $('div#user-response').show();
    $('div#user-response').text(userInput(textBox))
  });
});
