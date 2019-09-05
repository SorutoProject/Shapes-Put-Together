var bgmPlayed = false;

sound = {
    "bubble": new Howl({
        src: ["./component/sound/bubble-burst1.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "bound": new Howl({
        src: ["./component/sound/table-tennis-ball1.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "clear": new Howl({
        src: ["./component/sound/decision27.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "decision": new Howl({
        src: ["./component/sound/decision23.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "cancel": new Howl({
        src: ["./component/sound/cancel4.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "warning": new Howl({
        src: ["./component/sound/warning1.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    }),
    "bgm": {
      play:function(){}  
    },
    "finish": new Howl({
        src:["./component/sound/trumpet2.mp3"],
        preload: true,
        volume:0.4,
        html5: true
    })
    
}

window.onload = function () {

    document.getElementById("startClick").addEventListener("click", function () {
        document.getElementById("startClick").style.display = "none";
        sound.bgm.play();
    })
}

/*var bgmPlay = function(){
    sound.bgm.play();
}

var bgmStop = function(){
    sound.bgm.stop();
}*/
