
function Questions(question, answer, option) {
    this.question = question;
    this.answer = answer;
    this.option = option;
}

var q1 = new Questions(
    "The term ‘Computer’ is derived from?",
    "Latin",
    ["Latin", "German", "French", "Arabic"]
);

var q2 = new Questions(
    "Who is the father of Computer?",
    "Charles Babbage",
    ["Allen Turing", "Charles Babbage", "Simur Cray", "Augusta Adaming"]
);

var q3 = new Questions(
    "The basic operations performed by a computer are?",
    "All the above",
    ["Arithmetic operation", "Logical operation", "Storage and relative", "All the above"]
);


var q4 = new Questions(
    "Who is the father of Internet?",
    "Vint Cerf",
    ["Chares Babbage", "Vint Cerf", "Denis Riche", "Martin Cooper"]
);

var q5 = new Questions(
    "WWW stands for?",
    "World Wide Web",
    ["World Whole Web", "Wide World Web", "Web World Wide", "World Wide Web"]
);

var questionArray = [q1, q2, q3, q4, q5];
var count = 0;
var score = 0;

function showQuestion(e) {
    var ques = document.getElementById("ques");
    var quesNo = document.getElementById("quesNo");
    quesNo.innerHTML = "Q" + (e + 1) + ". ";
    ques.childNodes[1].nodeValue = questionArray[e].question;

    var choice_list = document.getElementById("choice-list");
    var li = choice_list.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        li[i].innerHTML = questionArray[e].option[i];
    }
}

function nextQuestion(e) {
    questionCorrect(e, count);
    count++;
    if (count < questionArray.length) {
        showQuestion(count);
    }
    else if (count == questionArray.length) {
        result();
    }
}

function quizStart() {
    var inputName = document.getElementById("inputName");
    if (inputName.value != "") {
        var question_div = document.getElementById("question-div");
        var main = document.getElementById("main");
        question_div.style.display = "block";
        main.style.display = "none";
        showQuestion(0);
    }
    else {
        alert("Please enter your name.");
    }
}

function questionCorrect(e, count) {
    if (e.innerHTML == questionArray[count].answer) {
        score++;
    }
}

function result() {
    var name = document.getElementById("result-name");
    var correct = document.getElementById("result-correct");
    var wrong = document.getElementById("result-wrong");
    var total = document.getElementById("result-total");
    var percent = document.getElementById("result-percent");

    var question_div = document.getElementById("question-div");
    question_div.style.display = "none";
    var result_div = document.getElementById("result-div");
    result_div.style.display = "block";

    var inputName = document.getElementById("inputName");

    name.innerHTML = inputName.value;
    correct.innerHTML = score;
    wrong.innerHTML = questionArray.length - score;
    total.innerHTML = questionArray.length;
    percent.innerHTML = (score * 100) / questionArray.length;
    percent.innerHTML = percent.innerHTML + "%";

    inputName.value = "";
}

function gotoHome() {
    location.reload()
}