const inputid = document.getElementById("id-num");
const inputname = document.getElementById("article-name");
const inputbody = document.getElementById("article-body");

const respond = document.getElementById('respond');
const table = document.getElementById('datatable');

const postbtn = document.getElementById("postBtn");
const getbtn = document.getElementById("getBtn");
const putbtn = document.getElementById("putBtn");
const deletebtn = document.getElementById("deleteBtn");

postbtn.addEventListener('click', () => {
    var url = 'https://httpbin.org/post';
    var postxhr = new XMLHttpRequest();
    postxhr.open('POST', url, true);
    postxhr.setRequestHeader('X-Sent_By', 'javascript');
    postxhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    postxhr.onreadystatechange = function() {
        if (postxhr.readyState === XMLHttpRequest.DONE) {
            if (postxhr.status === 200) {
                var response = JSON.parse(postxhr.responseText);
                console.log(response);
                document.getElementById('respond').innerHTML = JSON.stringify(response, null, 4);
            }
            else {
                console.error('Error:', postxhr.statusText);
            }
        }
    }
    var idval = document.getElementById("id-num").value;
    var nameval = document.getElementById("article-name").value;
    var bodyval = document.getElementById("article-body").value;
    var data = {id: idval, name: nameval, body: bodyval};
    postxhr.send(JSON.stringify(data));
})

getbtn.addEventListener('click', () => {
    var url = 'https://httpbin.org/get';
    var getxhr = new XMLHttpRequest();
    getxhr.open('GET', url, true);
    getxhr.setRequestHeader('X-Sent_By', 'javascript');
    getxhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    getxhr.onreadystatechange = function() {
        if (getxhr.readyState === XMLHttpRequest.DONE) {
            if (getxhr.status === 200) {
                var response = JSON.parse(getxhr.responseText);
                console.log(response);
                document.getElementById('respond').innerHTML = JSON.stringify(response, null, 4);
                print = JSON.stringify(response);

            }
        }
    }
    var idval = document.getElementById("id-num").value;
    var nameval = document.getElementById("article-name").value;
    var bodyval = document.getElementById("article-body").value;
    var data = {id: idval, name: nameval, body: bodyval};
    console.log(data);
    getxhr.send();
})


putbtn.addEventListener('click', () => {
    var url = 'https://httpbin.org/put';
    var putxhr = new XMLHttpRequest();
    putxhr.open('PUT', url, true);
    putxhr.setRequestHeader('X-Sent_By', 'javascript');
    putxhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    putxhr.onreadystatechange = function() {
        if (putxhr.readyState === XMLHttpRequest.DONE) {
            if (putxhr.status === 200) {
                var response = JSON.parse(putxhr.responseText);
                console.log(response);
                document.getElementById('respond').innerHTML = JSON.stringify(response, null, 4);
            }
            else {
                console.error('Error:', putxhr.statusText);
            }
        }
    }
    putxhr.send();
})


deletebtn.addEventListener('click', () => {
    var url = 'https://httpbin.org/delete';
    var deletexhr = new XMLHttpRequest();
    deletexhr.open('DELETE', url, true);
    deletexhr.setRequestHeader('X-Sent_By', 'javascript');
    deletexhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    deletexhr.onreadystatechange = function() {
        if (deletexhr.readyState === XMLHttpRequest.DONE) {
            if (deletexhr.status === 200) {
                var response = JSON.parse(deletexhr.responseText);
                console.log(response);
                document.getElementById('respond').innerHTML = JSON.stringify(response, null, 4);
            }
            else {
                console.error('Error:', deletexhr.statusText);
            }
        }
    }
    deletexhr.send();
})