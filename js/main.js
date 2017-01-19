/*@enoxh*/
//initializes the first scene
function init() {
    showText();
}

//shows the scene text
function showText() {
    document.getElementById('showText').innerHTML = scenes[sceneCount][0];
}

//processes the players response
function getSaid() {
    var elem = document.getElementById('userSaid');
    var said = elem.value;
    for (var i = 0; i < scenes[sceneCount][1].length; i++) {
        if (said == scenes[sceneCount][1][i][0]) {
            sceneCount = scenes[sceneCount][1][i][1];
            elem.value = '';
            showText();
        } else {
            elem.value = '';
            showText();
        }
    }
}

//listens for enter key press
$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        getSaid();
    }
});
