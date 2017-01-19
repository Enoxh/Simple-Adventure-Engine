var sceneCount = 0;

/*game scenes*/

/*
Phrase to match = scenes[sceneCount][1][i][0]
Destination if matched =  scenes[sceneCount][1][i][1]
Scene Text = scenes[sceneCount][0]

*/

var scenes = [
    ["You can go left or right, what do you do?<br/> Commands:('go left' 'go right')",
    [
    ["go left", 1],
    ["go right", 2]
    ]
    ],
    ["You walk down a hallway. it's a dead end.<br/> Commands:('go back')",
    [
    ["go back", 0]
    ]
    ],
    ["You stand at a door. What do you do?<br/> Commands:('open it' 'go back' )",
    [
    ["open it", 3],
    ["go back", 0]
    ]
    ],
    ["There is an empty room? What do you do?<br/> Commands:('look around' 'go back')",
    [
    ["look around", 4],
    ["go back", 0]
    ]
    ],
    ["You find a book. The end. <br/> Commands:('play again')",
    [
    ["play again", 0]
    ]
    ]
];

