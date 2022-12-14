const http = require('http');

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

var html = "";

global.document = new JSDOM(html).window.document;

// I guess this may be the area where the object sent from the frontend could go.  Example beneath.
var storedSendingObject = {}


// This part, exports.createPost, is the part that executes reading from and writing to the excel sheets.
exports.createPost = (req, res, _) => {

const reader = require('xlsx')

const file = reader.readFile('../project3Temp.xlsx')

var storedReceivingObject = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
    storedReceivingObject.push(res)
})
}

console.log(storedReceivingObject)


var storedSendingBox1 = "Hello, I want to go to the backend";
var storedSendingBox2 = "I also want to go to the backend";
var storedSendingBox3 = "I wish I could go to the backend too";


var storedSendingObject = {
    1:storedSendingBox1,
    2:storedSendingBox2,
    3:storedSendingBox3
}



//Attempting to convert the object to JSON
var convertedStoredSendingObject = JSON.stringify(storedSendingObject);

let XLSX = require('xlsx')

let excelFile = "../ReceivingExcelFile.xlsx";
let sheetName = "Sheet1"
let workbook = XLSX.readFile(excelFile);
let ws = workbook.Sheets[sheetName];

// here it overwrites the worksheet.  Where it says data,
// I instead need this to be the object with the name storedSendingObject
workbook.Sheets[sheetName] = XLSX.utils.json_to_sheet(convertedStoredSendingObject);
XLSX.writeFile(workbook, excelFile);


};










// const buttonPage = require('./buttonPage');  //is ./app in the course

// const server = http.createServer(buttonPage);

// const server = http.createServer((req, res) => {
// res.end('This is my server response');
// })

// const buttonPage = require('./01WorkingExcelEdit/Frontend/buttonPage.js')

// var storedReceivingObject = require('./01WorkingExcelEdit/Frontend/buttonPage.js');