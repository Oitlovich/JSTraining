  // переменная, в которой хранится выбранное математическое действие
  var op; 

  // функция расчёта
  function func() {
  	// переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
        case '+':
            result = num1 + num2;
        break;

        case '-':
            result = num1 - num2;
        break;
        
        case '*':
            result = num1 * num2;
        break;
        
        case '/':
            result = num1 / num2;
        break;
        
        default:
            result = 'Вы не выбрали операцию';
    }
    document.getElementById("result").innerHTML = result;
    var operation = document.getElementById("plus").value;
    var operation = document.getElementById("minus").value;
    var operation = document.getElementById("times").value;
    var operation = document.getElementById("divide").value;
    document.getElementById("operation").innerHTML = operation;
  }