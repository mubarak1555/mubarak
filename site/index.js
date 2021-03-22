
const doIt = document.getElementById('enter');
doIt.addEventListener('click', onDoItClick);
function onDoItClick(){
    const userInput = document.getElementById('userInput').value;
    const myList = document.querySelector('ul');
    const newTask = document.createElement('li');
    const taskTest = document.createTextNode(userInput);
    newTask.appendChild(taskTest);
    myList.appendChild(newTask);
    newTask.addEventListener('click', () => {
        newTask.remove();
    } );
};

