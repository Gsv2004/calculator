document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
  
    let currentInput = '';
    let previousInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.dataset.value;
  
        switch(value) {
          case 'AC':
            currentInput = '';
            previousInput = '';
            break;
  
          case 'DEL':
            currentInput = currentInput.slice(0, -1);
            break;
  
          case '=':
            try {
              currentInput = eval(previousInput + currentInput).toString();
              previousInput = '';
            } catch(error) {
              currentInput = 'Error';
            }
            break;
  
          default:
            currentInput += value;
        }
  
        display.value = currentInput;
      });
    });
  });
  