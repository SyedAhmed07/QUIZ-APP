// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA93v8ox8S0u9AsFqvHGIaJdBuLhOXlmSM",
    authDomain: "online-web-f8fa8.firebaseapp.com",
    projectId: "online-web-f8fa8",
    storageBucket: "online-web-f8fa8.appspot.com",
    messagingSenderId: "462964716744",
    appId: "1:462964716744:web:ae0b7d7df396181a93a1fd",
    measurementId: "G-RT5DP1B11R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()


function getDataFromDatabase() {
    const reference = ref(db, 'questions/')
    onChildAdded(reference, function (data) {
        console.log(data.val())
        questions.push(data.val())
        renderQues()
    })
}
getDataFromDatabase()

var questions = [
    {
        Question: "1) MS word is software of __",
        CorrectAns: "Microsoft",
        Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
        Question: "2) Which is the word processing software?",
        CorrectAns: "MS word 2007",
        Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
        Question: "3) MS Word is __ software.    ",
        CorrectAns: "Word processing",
        Options: [
            "Web browser",
            "Word processing",
            "Operating system",
            "Antivirus",
        ],
    },
    {
        Question: "4) The valid format of MS Word is __",
        CorrectAns: ".doc",
        Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
        Question: "5) What program is used in MS-Word to check the spelling?",
        CorrectAns: "Spelling & Grammar",
        Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
        Question: "6) A word gets selected by clicking it",
        CorrectAns: "Twice",
        Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
        Question: "7) The center the selected text, the shortcut key is",
        CorrectAns: "Ctrl + E",
        Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
        Question: "8) Which option is not available in Microsoft office button?",
        CorrectAns: "Bold",
        Options: ["Bold", "New", "Save", "Open"],
    },
    {
        Question:
            "9) ______ is the change the way text warps around the selected object.",
        CorrectAns: "Text wrapping",
        Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
        Question: "10) A major step before taking print of the document is",
        CorrectAns: "Both b and c",
        Options: [
            "To save the document",
            "To set paper setting",
            "To see print preview of the document",
            "Both b and c",
        ],
    },
]

var CurrentQues = document.getElementById("CurrentQues");
var totalQues = document.getElementById("totalQues");
var Question = document.getElementById("Question");
var Answers = document.getElementById("Answers");

var index = 0;
var score = 0;

function renderQues() {
    CurrentQues.innerHTML = index + 1;
    totalQues.innerHTML = questions.length;

    var obj = questions[index]

    Question.innerHTML = obj.Question
    Answers.innerHTML = ''
    for (var i = 0; i < questions[0].Options.length; i++) {
        Answers.innerHTML += `<div class="col-md-6 pt-3">
        <div>
          <button onclick="checkQues('${obj.Options[i]}', '${obj.CorrectAns}')" class="btn btn-primary rounded-pill fs-5">${obj.Options[i]} </button>
        </div>
      </div>`

    }
}
renderQues()


window.next = function () {
    index++;
    renderQues()
}


window.checkQues = function (a, b) {
    if (a == b) {
        score++
    }
    console.log(score)

    next()
}
