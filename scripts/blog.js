const createBtn = document.getElementById('createbtn');
const createDialog = document.getElementById('createDialog');

const selectEl = createDialog.querySelector('input');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

const btncancel = document.getElementById('btncancel');
const btncreate = document.getElementById('btncreate');
const btnedit = document.getElementById('btnedit');
const btndelete = document.getElementById('btndelete');

let realtitle = document.getElementById('realtitle');
let realdate = document.getElementById('realdate');
let realsummary = document.getElementById('realsummary');

let input = document.querySelector('input');
let titlein = input[0];
let datein = input[1];
let summaryin = input[2];
let count = 0;

createBtn.addEventListener('click', () => {
    createDialog.showModal();
});

btncreate.addEventListener('click', () => {
    count = count + 1;
    input = document.querySelector('input');
    titlein = document.getElementById('titleinput');
    datein = document.getElementById('dateinput');
    summaryin = document.getElementById('summaryinput');
    
    let myPost = {
        title : titlein,
        date : datein,
        summary : summaryin
    }
    
    window.localStorage.setItem(`myPost${count}`, JSON.stringify(myPost));

    var titlee = document.createTextNode(titlein.value);
    var datee = document.createTextNode(datein.value);
    var summaryy = document.createTextNode(summaryin.value);
    document.body.appendChild(titlee);

    document.body.appendChild(datee);

    document.body.appendChild(summaryy)

    var buttone = document.createElement("button")
    var buttonc = document.createElement("button")

    buttone.innerHTML = "Edit";
    buttonc.innerHTML = "Create";

    document.body.appendChild(buttone);
    document.body.appendChild(buttonc);

})
