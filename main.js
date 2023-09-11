let chores = []
const choreInput = document.getElementById('chore');
const choreList = document.getElementById("list1");

function addButton() {
    const choreText = choreInput.value.trim();
    if (choreText.value != '') {
        const li = document.createElement('li');
        li.innerHTML = choreInput.value;
        choreList.appendChild(li);
        const btn = document.createElement('button');
        btn.innerHTML = 'x';
        li.appendChild(btn);
        li.classList.add('element')
    }
    choreInput.value = "";
    saveData();
}

choreList.addEventListener('click', function (e) {
    e.target.parentElement.remove();
    saveData();
});

function saveData(){
    localStorage.setItem('data', choreList.innerHTML)
}

function showTask() {
    choreList.innerHTML = localStorage.getItem('data')
} showTask()
