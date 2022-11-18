
let btnOverWriteAccess = document.querySelector('.btnOverWriteAccess');

function btnOverWrite(){
    fetch("http://localhost:3000/posts", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        },
    })
}