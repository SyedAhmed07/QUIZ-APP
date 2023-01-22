  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase, set, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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




var question = document.getElementById("question")
var option = document.getElementById("option")
var optionsparent = document.getElementById("optionsparent")
var correctanswer = document.getElementById("correctanswer")

var options = []
var correctans


function renderOptions(){
    optionsparent.innerHTML = ""
    for(var i = 0; i < options.length; i++){
        optionsparent.innerHTML += `<li onclick="setcorrectans('${options[i]}')" class="fs-5 rounded shadow my-2 py-2 px-3 bg-white">${options[i]}</li>`
    }
}

window.AddOption = function(){
    options.push(option.value)
    // console.log(options)

    renderOptions()

}

window.setcorrectans = function(a){

    correctans = a
    correctanswer.innerHTML = correctans

}


window.SubmitQues = function(){
  var obj = {
    question : question.value,
    options : options,
    correctans : correctans
  }

  obj.id = push(ref(db,'questions/')).key

  const reference = ref(db,`questions/${obj.id}`)
  set(reference, obj)


  console.log(obj)




}