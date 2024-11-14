let content = document.querySelector('#container');

let p = document.createElement('p');
p.style['color'] = 'red';
p.textContent = 'Hey I’m red!';

let h3 = document.createElement('h3');
h3.style['color'] = 'blue';
h3.textContent = 'I’m a blue h3!'

let div = document.createElement('div');
div.style['background-color'] = 'pink';
div.style['border'] = '2px solid black'; 

let h1 = document.createElement('h1');
h1.textContent = 'I’m in a div'
let p2 = document.createElement('p');
p2.textContent = 'ME TOO!'
div.appendChild(h1)
div.appendChild(p2)

content.appendChild(p)
content.appendChild(h3)
content.appendChild(div)


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

/* 

    function alertFunction() 
    {
        alert("YAY! YOU DID IT!");
    } 
    btn.addEventListener("click", alertFunction);

*/

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.id);
    });
});