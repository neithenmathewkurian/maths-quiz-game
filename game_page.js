player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;
function send() {
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    question = "<h4 id='number_display'>" + number1 +" x "+number2+ "</h4>";
    textinput = "<br>answer=<input type='text' id='input_check_box'>";
    button = "<br><br><br><button class='btn btn-success'onclick='check()'>check</button>";
    document.getElementById("output").innerHTML = question + textinput + button;
    document.getElementById("number").value = "";
    
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    answer = document.getElementById("input_check_box").value;
    if (answer == actual_answer) {
        if (answer_turn == "player1") {
                player1_score=player1_score+1;
                document.getElementById("player1_score").innerHTML=player1_score;
                
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
document.getElementById("output").innerHTML="";
if(question_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_question").innerHTML="question turn  =  "+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn  =  "+player1_name;
}
if(answer_turn=="player1"){
   answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn  =  "+player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn  =  "+player1_name;
}
}

