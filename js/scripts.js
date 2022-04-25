//business logic
userInput = text => {
  let textAreaInput = parseInt(text);

  const numbersArray = [...Array(textAreaInput+1).keys()].map (function(number) {
    string = number.toString();
    
    if (string.includes('3')) {
      return string = `\'Won't you be my neighbour?\'`;
    }

    else if (string.includes('2')) {
      return string = `\'Boop!\'`;
    }

    else if (string.includes('1')) {
      return string = `\'Beep!\'`;
    } 

    else {
      return string;
    }
  });
    
  return numbersArray.join(', ');
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