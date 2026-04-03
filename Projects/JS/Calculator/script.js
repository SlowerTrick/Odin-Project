let expression = document.getElementById('expression');
let blink;

function initCalculator() {
    let buttons = document.querySelector('.buttonsContainer');
    blinkPanel();

    for(let i = 0; i < buttons.childElementCount; i++)
    {
        buttons.children[i].addEventListener("click", () => {
            handleInput(buttons.children[i].id);
        });
    }
}

function blinkPanel() {
    if (expression.textContent != '|')
    {
        expression.style.visibility = 'visible';
        clearInterval(blink);
    }
    else
    {
        clearInterval(blink);
        blink = setInterval(()=> {
            expression.style.visibility = expression.style.visibility == 'hidden' ? 'visible' : 'hidden';
        }, 500);
    }
}

function handleInput(input) {
    if (input === 'ac')
        expression.textContent = '|';
    else if (input === '=')
        calculate(expression.textContent);
    else if (expression.textContent === '|' || expression.textContent === 'Input error')
        expression.textContent = '';

    // Adicionar o caso para o +/- e para %


    if (input != 'ac' && input != '=' )
        expression.textContent += input;
    blinkPanel();
}

function calculate(equation) {
    equation = equation.match(/(\d+|[+\-*/])/g);

    // Verificando se o último elemento é válido
    if (!parseFloat(equation[equation.length - 1]) && equation[equation.length - 1] != '0') 
    {
        expression.textContent = 'Input error';
        return;
    }

    // Verificando se existe erro de dois operadores consecutivos
    for (let i = 0; i < equation.length - 1; i++) 
    {
        if (!parseFloat(equation[i]) && !parseFloat(equation[i + 1])) 
        {
            expression.textContent = 'Input error';
            return;
        }
    }

    // Resolvendo multiplicações e divisões primeiro
    for (let i = 0; i < equation.length - 1; i++) 
    {
        if (equation[i] === '*' || equation[i] === '/') 
        {
            let num1 = parseFloat(equation[i - 1]);
            let operation = equation[i];
            let num2 = parseFloat(equation[i + 1]);
            
            let result = solveEquation(num1, operation, num2);

            // Substituindo os valores na equação
            equation[i - 1] = result;
            equation.splice(i, 2); // Remover o operador e o próximo número
            i--; // Reposiciona o índice para continuar corretamente
        }
    }

    // Resolvendo o restante da equação
    let result = parseFloat(equation[0]);
    for (let i = 1; i < equation.length - 1; i += 2) {
        let operation = equation[i];
        let num = parseFloat(equation[i + 1]);
        result = solveEquation(result, operation, num);
    }

    // Exibindo o resultado
    expression.textContent = result
    if (!Number.isInteger(result))
        expression.textContent = result.toFixed(2);
    return result;
}

function solveEquation(num1, operation, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                expression.textContent = 'Division by zero error';
                return;
            }
            return num1 / num2;
        default:
            return 0;
    }
}

initCalculator();