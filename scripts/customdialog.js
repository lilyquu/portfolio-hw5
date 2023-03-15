const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

const selectEl = promptDialog.querySelector('input');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

const btncancel = document.getElementById('btn1');
const btnok = document.getElementById('btn2');

// "Show the dialog" button opens the <dialog> modally
alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    confirmDialog.showModal();
});

promptBtn.addEventListener('click', () => {
    promptDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('input', (e) => {
    btnok.value = selectEl;
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
confirmDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${confirmDialog.returnValue}.`;
});

promptDialog.addEventListener('close', () => {
    outputBox.value = `${promptDialog.returnValue}`;
});
