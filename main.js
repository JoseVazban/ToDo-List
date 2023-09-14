const choreInput = document.getElementById('chore');
const choreList = document.getElementById("list1");

function addButton() {

    var regEx = /^\S/;
    if (choreInput.value.match (regEx)) {
        const li = document.createElement('li');
        li.innerHTML = choreInput.value;
        choreList.appendChild(li);

        const btn = document.createElement('button');
        btn.innerHTML = 'x';
        btn.classList.add('borrar');
        li.appendChild(btn);
        li.classList.add('element');

        choreInput.value = '';
        saveData();

        btn.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        saveData();
    });
        
    } else {
        alert('Escribe algo por favor.');
        return;
    }

}

function saveData(){

    localStorage.setItem('data', choreList.innerHTML)
    
}

function showTask() {
    
    choreList.innerHTML = localStorage.getItem('data')
} showTask()

function initialize() {
    const deleteButtons = document.querySelectorAll('.borrar');
    deleteButtons.forEach(function(btn) {
        btn.addEventListener('click', function (e) {
            e.target.parentElement.remove();
            saveData();
        });
    });
}

document.addEventListener("DOMContentLoaded", initialize);