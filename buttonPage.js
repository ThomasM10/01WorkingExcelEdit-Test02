

var receiver1 = document.querySelector('.receiver1')
var receiver2 = document.querySelector('.receiver2')
var receiver3 = document.querySelector('.receiver3')


// These are just examples.  These variables will actually be blank, and they will be populated with what gets sent from the backend.
var storedReceivingBox1 = "Hello, I want to come from the Backend";
var storedReceivingBox2 = "Hi, I also want to come from the Backend";
var storedReceivingBox3 = "I wish I could come from the Backend too, ";


// This is the object that will need to come from the backend.  
var storedReceivingObject = {
    1:storedReceivingBox1,
    2:storedReceivingBox2,
    3:storedReceivingBox3
}

function receiveFromBackendBtn(){
    receiver1.innerHTML = storedReceivingBox1;
    receiver2.innerHTML = storedReceivingBox2;
    receiver3.innerHTML = storedReceivingBox3;
}






var sender1 = document.querySelector('.sender1')
var sender2 = document.querySelector('.sender2')
var sender3 = document.querySelector('.sender3')

var storedSendingBox1 = "Hello, I want to go to the backend"
var storedSendingBox2 = "I also want to go to the backend"
var storedSendingBox3 = "I wish I could go to the backend too"

sender1.innerHTML = storedSendingBox1;
sender2.innerHTML = storedSendingBox2;
sender3.innerHTML = storedSendingBox3;


// This is the object that will need to be sent to the backend.  
var storedSendingObject = {
    1:storedSendingBox1,
    2:storedSendingBox2,
    3:storedSendingBox3
}















let btnOverWriteAccess = document.querySelector('.btnOverWriteAccess');

function btnOverWrite(){
    fetch("http://localhost:3000/posts", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        },
    })
}


/*
const objectTransfer = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/storedReceivingObject", {
        method: 'POST',
        body: JSON.stringify(storedReceivingObject),
        headers: {
        'Accept': 'application/json',
        },
    }
)}






let token = 1234;

const fetchFunctionButton = document.querySelector("fetchFunction")

fetchFunctionButton.addEventListener("click", fetchFunction)

function fetchFunction(){
    fetch('http://localhost:3000/posts/createPost', {
        storedReceivingObjectTest
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then((response) => {
        console.error(response);
    }).catch((error) => {
        console.error(error);
    })
};




*/





