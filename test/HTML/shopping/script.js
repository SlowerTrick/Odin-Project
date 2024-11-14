let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener("click", () =>{
    add_item(input.value, ul, input);
});

function add_item(name, ul, input) 
{
    let item = document.createElement('li');
    let text = document.createElement('p');
    let button = document.createElement('button');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    text.textContent = name;
    button.textContent = 'Delete';
    button.style.height = '20px';
    button.setAttribute('id', 'delete');
    button.addEventListener("click", () =>{
        delete_item(item);
    });
    item.appendChild(text);
    item.appendChild(button);
    ul.appendChild(item);
    input.value = '';    
    input.focus();
}

function delete_item(li) {
    li.remove();
}