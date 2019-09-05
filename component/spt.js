/*
    Shapes Put Together 2
    (C)2019 SatoKei@YSFH 航空宇宙工学部
*/

//URLパラメータの取得
var arg = new Object;
var pair = location.search.substring(1).split('&');
for (var i = 0; pair[i]; i++) {
    var kv = pair[i].split('=');
    arg[kv[0]] = kv[1];
}


var $$ = function (e) {
    var el = document.querySelectorAll(e);
    if (el.length == 1) {
        return el[0];
    } else {
        return el;
    }
}

//「スタート」が押されたらtrueにする
var startedFlag = false;

window.onload = function () {
    //for nw.js
    if (typeof nw !== "undefined") {
        var Menu = new nw.Menu({
            type: "menubar"
        });
        var fileSubmenu = new nw.Menu();
        var levelSubmenu = new nw.Menu();
        var helpSubmenu = new nw.Menu();
        fileSubmenu.append(new nw.MenuItem({
            label: "終了",
            click: function () {
                window.parent.sound.warning.play();
                Swal.fire({
                    "title": "本当に終了しますか。",
                    "html": "<small>今プレイしているレベルから再開することはできません。</small>",
                    "confirmButtonText": "はい",
                    "showCancelButton": true,
                    "cancelButtonText": "いいえ"
                }).then(function (result) {
                    if (result.value) {
                        var gui = require('nw.gui');
                        gui.App.quit();
                    }else{
                        window.parent.sound.cancel.play();
                    }
                });
            }
        }));
        /*levelSubmenu.append(new nw.MenuItem({
            label: "最初の画面に戻る",
            click: function () {
                if (runner) runner.enabled = false;
                Swal.fire({
                    title: "最初の画面に戻る",
                    html: '<span style="font-size:11pt">最初の画面に戻りますか？<br>今プレイしているレベルから再開することはできません。</span>',
                    type: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "はい",
                    "cancelButtonText": "いいえ",
                    "animation": false
                }).then(function (result) {
                    if (result.value) {
                        location.href = "index.html";
                    } else {
                        if (runner) runner.enabled = true;
                    }
                })
            }
        }));
        levelSubmenu.append(new nw.MenuItem({
            label: "やり直す",
            click: function () {
                if (runner) runner.enabled = false;
                window.parent.sound.warning.play();
                Swal.fire({
                    title: "レベルのやり直し",
                    text: "このレベルをやり直しますか？",
                    type: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "はい",
                    "cancelButtonText": "いいえ",
                    "animation": false
                }).then(function (result) {
                    if (result.value) {
                        window.parent.sound.decision.play();
                        setTimeout(function () {
                            location.reload();
                        }, 500);
                    } else {
                        window.parent.sound.cancel.play();
                        if (runner) runner.enabled = true;
                    }
                });
            }
        }));*/

        helpSubmenu.append(new nw.MenuItem({
            label: "著作権表示",
            click: function () {
                Swal.fire({
                    title: "著作権表示",
                    html: '<div style="text-align:left;font-size:10pt"><h2 id="shapes-put-together">Shapes Put Together</h2><p><img src="./component/img/Shapes-Put-Together-JDENTICON.png" width="50px"><br>(C)2019 SatoKei All rights reserved.</p><h2 id="音源などの著作権情報">音源などの著作権情報</h2><li>BGM<ul><li>All BGM created by MusMus.</li></ul></li></ul><li>SE<ul><li>All Sound Effects created by 効果音ラボ.</li></ul></li></ul><h2 id="オープンソースライセンス">オープンソースライセンス</h2><h3 id="nwjs">nw.js</h3><p>Copyright (c) 2011-2019 NW.js Authors<br>Copyright (c) 2011-2019 The Chromium Authors<br>Copyright (c) 2011-2018 Intel Corp</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN ANACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="jquery">jQuery</h3><p>Copyright JS Foundation and other contributors, <a href="https://js.foundation/" target="_blank">https://js.foundation/</a></p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="matterjs">Matter.js</h3><p>The MIT License (MIT)</p><p>Copyright (c) Liam Brummitt and contributors.</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="howlerjs">howler.js</h3><p>Copyright (c) 2013-2019 James Simpson and GoldFire Studios, Inc.</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="sweetalert2">sweetalert2</h3><p>The MIT License (MIT)</p><p>Copyright (c) 2014 Tristan Edwards &amp; Limon Monte</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p></div>',
                    animation: false
                }).then(function(){
                    window.parent.sound.cancel.play();
                });
            }
        }));

        Menu.append(new nw.MenuItem({
            label: 'ファイル',
            submenu: fileSubmenu
        }));
        /*Menu.append(new nw.MenuItem({
            label: "レベル",
            submenu: levelSubmenu
        }));*/
        Menu.append(new nw.MenuItem({
            label: "ヘルプ",
            submenu: helpSubmenu
        }));
        nw.Window.get().menu = Menu;
    }
    if (arg["level"] === "" || arg["level"] === undefined) {
        window.parent.document.title = "Shapes Put Together";
        $$("#level").innerHTML = '<span style="color:#f00;font-weight:bold;text-shadow:0px 0px 2px #f00;">赤色</span>の図形同士をぶつけよう<br>ピンク色の部分ではドラッグできないよ<br><br>「やり直す」を押すとそのステージを最初からやり直せるよ。<br><br><button id="startNormal">ノーマルモードでPLAY</button><br><br><button id="startChamp">カスタムモードでPLAY</button><br><br><button id="copyrightButton">著作権情報</button>';
        $$("#start").style.display = $$("#refreshButton").style.display = $$("#homeButton").style.display = "none";
        $$("#copyrightButton").addEventListener("click", function(){
            Swal.fire({
                    title: "著作権表示",
                    html: '<div style="text-align:left;font-size:10pt"><h2 id="shapes-put-together">Shapes Put Together</h2><p><img src="./component/img/Shapes-Put-Together-JDENTICON.png" width="50px"><br>(C)2019 SatoKei All rights reserved.</p><h2 id="音源などの著作権情報">音源などの著作権情報</h2><li>SE<ul><li>All Sound Effects created by 効果音ラボ.</li></ul></li></ul><h2 id="オープンソースライセンス">オープンソースライセンス</h2><h3 id="nwjs">nw.js</h3><p>Copyright (c) 2011-2019 NW.js Authors<br>Copyright (c) 2011-2019 The Chromium Authors<br>Copyright (c) 2011-2018 Intel Corp</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN ANACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="jquery">jQuery</h3><p>Copyright JS Foundation and other contributors, <a href="https://js.foundation/" target="_blank">https://js.foundation/</a></p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="matterjs">Matter.js</h3><p>The MIT License (MIT)</p><p>Copyright (c) Liam Brummitt and contributors.</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="howlerjs">howler.js</h3><p>Copyright (c) 2013-2019 James Simpson and GoldFire Studios, Inc.</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3 id="sweetalert2">sweetalert2</h3><p>The MIT License (MIT)</p><p>Copyright (c) 2014 Tristan Edwards &amp; Limon Monte</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p></div>',
                    animation: false
                }).then(function(){
                    window.parent.sound.cancel.play();
                });
        });
        $$("#startNormal").addEventListener("click", function () {
            //window.parent.bgmStop();
            //window.parent.bgmPlay();
            location.href = "?level=1";
        });
        $$("#startChamp").addEventListener("click", function () {
            /*var gravity = prompt("[重力加速度の設定]\n重力加速度は地球の何倍にしますか。");
            if(gravity === null) return false;
            var opacity = prompt("[透明度の設定]\n赤色以外の図形の透明度を設定します。\n透明度を0~1の間の数値で入力してください\n数値が小さいほど、透明に近くなります。");
            if(opacity === null) return false;
            var levelNum = prompt("[スタートするレベル]\n最初にプレイするステージの番号を入力してください。\nステージの番号は、「level○」の○に入る数字です。");*/

            Swal.mixin({
                input: "text",
                confirmButtonText: "次へ",
                showCancelButton: true,
                cancelButtonText: "キャンセル",
                progressSteps: ["1", "2", "3"],
                animation: false
            }).queue([
                {
                    title: "重力加速度の設定",
                    html: "重力加速度は地球の何倍にしますか<br>(デフォルト値:1)<br>負の数を設定すると、重力が上向きになります。"
               }, {
                    title: "透明度の設定",
                    html: "赤色以外の図形の透明度を設定します。<br>透明度を0~1の間の数値で入力してください<br>デフォルト値:0.5<br>小数第２位以下は無視されます。"
               }, {
                    title: "スタートするレベル",
                    html: "最初にプレイするステージの番号を入力してください。<br>ステージの番号は、「level○」の○に入る数字です。"
               }
            ]).then(function (result) {
                if (result.value) {
                    //window.parent.bgmStop();
                    //window.parent.bgmPlay();
                    window.parent.sound.clear.play();
                    if (result.value[0] == "") result.value[0] = 1;
                    if (result.value[1] == "") result.value[1] = 0.5;
                    if (result.value[2] == "") result.value[2] = 1;
                    location.href = "?level=" + result.value[2] + "&g=" + result.value[0] * 10 + "&opacity=" + result.value[1] * 10;
                }
            });
        });
        return false;
    }
    //リセットボタンとかを隠す
    $$("#refreshButton").style.display = $$("#homeButton").style.display = "none";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./levels/level" + arg["level"] + ".json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                levelLoad(JSON.parse(xhr.responseText));
                $$("#start").addEventListener("click", function () {
                    levelStart();
                });
                $$("#start").focus();
            } catch (e) {
                Swal.fire({
                    "title": "Oops...",
                    "html": "An error occursed:<div>" + e + "</div>",
                    "type": "error",
                    "confirmButtonText": "Back to the HOME",
                    "footer": "Check the URL Parameters."
                }).then(function () {
                    location.href = "game.html";
                });
                console.error(e);
            }
        } else if (xhr.readyState === 4 && xhr.status === 0) {
            try {
                levelLoad(JSON.parse(xhr.responseText));

                $$("#start").addEventListener("click", function () {
                    levelStart();
                });

                $$("#start").focus();
            } catch (e) {
                Swal.fire({
                    "title": "Oops...",
                    "html": "An error occursed:<div>" + e + "</div>",
                    "type": "error",
                    "confirmButtonText": "Back to the HOME",
                    "footer": "Check the URL Parameters."
                }).then(function () {
                    location.href = "game.html";
                });
                console.error(e);
            }
        }
    }

    xhr.send(null);
    $$("#level").textContent = "Level " + arg["level"];

    window.parent.document.title = "Level " + arg["level"] + " - Shapes Put Together";
    $$("#homeButton").addEventListener("click", function () {
        window.parent.sound.warning.play();
        if (runner) runner.enabled = false;
        Swal.fire({
            title: "最初の画面に戻る",
            html: '<span style="font-size:11pt">最初の画面に戻りますか？<br>今プレイしているレベルから再開することはできません。</span>',
            type: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "はい",
            "cancelButtonText": "いいえ",
            "animation": false
        }).then(function (result) {
            if (result.value) {
                window.parent.sound.decision.play()
                location.href = "game.html";
            } else {
                window.parent.sound.cancel.play();
                if (runner) runner.enabled = true;
            }
        })
    });
    $$("#refreshButton").addEventListener("click", function () {
        if(arg["level"] == "random") var textHTML = "新しいランダムステージを生成しますか？<br><small>※ランダムステージは、同じ構成でやり直すことはできません。</small>";
        else var textHTML = "このレベルをやり直しますか？"
        if (runner) runner.enabled = false;
        window.parent.sound.warning.play();
        Swal.fire({
            title: "レベルのやり直し",
            html: textHTML,
            type: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "はい",
            "cancelButtonText": "いいえ",
            "animation": false
        }).then(function (result) {
            if (result.value) {
                window.parent.sound.decision.play();
                setTimeout(function () {
                    location.reload();
                }, 500);
            } else {
                window.parent.sound.cancel.play();
                if (runner) runner.enabled = true;
            }
        });
    });
}

var levelLoad = function (level) {
    //クリア時の処理
    if (level.stageName == "finish") {
        window.parent.sound.finish.play();
        $$("#level").innerHTML = '<b>Congratulation!!</b><br>全レベルをクリアしたよ！<br>最後まで遊んでくれてありがとう！<br><br><button id="randomStart">ランダムモードをプレイ</button>';
        $$("#refreshButton").style.display = $$("#start").style.display = "none";
        $$("#randomStart").addEventListener("click", function () {
            window.parent.sound.decision.play();
            location.href = "?level=random";
        });
    } else if (level.stageName == "random") {
        //ランダムなステージデータを生成
        //テンプレ
        var level = {
            "stageName": "levelRandom",
            "map": []
        }
        var numberOfShapes = makeNum(10, 17); //いくつ図形を作るか
        //当たり判定をつける図形が固定されたときにtrueにする
        var collisionStaticed = false;
        //当たり判定オブジェクトがいくつあるか
        var numberOfCollision = 0;
        for (var i2 = 0; i2 < numberOfShapes; i2++) {
            //初期化
            var object = {};
            //どの図形にするか
            var selectShapes = makeNum(0, 6);
            //X座標を生成
            var x = makeNum(100, 200);
            //y座標を生成
            var y = makeNum(100, 400);
            //isStatic
            if (makeNum(0, 3) === 1) {
                var isStatic = true;
            } else {
                var isStatic = false;
            }
            //collision
            if (numberOfCollision < 2) {
                var label = "collision";
                var fillStyle = "#f00";
                numberOfCollision++
                console.log(numberOfCollision);
                if (collisionStaticed === true) {
                    var isStatic = false;
                } else if (isStatic === true) {
                    collisionStaticed = true;
                }
            } else {
                var label = "other";
                var fillStyle = "";
            }
            //1個目の当たり判定オブジェクト
            if (numberOfCollision === 0 && label == "collision") {
                var y = makeNum(300, 400);
            }
            //四角形
            if (selectShapes === 4 || selectShapes === 1) {
                var object = {
                    "shapeType": "rectangle",
                    "x": x,
                    "y": y,
                    "width": makeNum(30, 150),
                    "height": makeNum(30, 200),
                    "options": {
                        "label": label,
                        "isStatic": isStatic,
                        "render": {
                            "fillStyle": fillStyle
                        }
                    }
                }
            }
            //丸
            else if (selectShapes === 0) {
                var object = {
                    "shapeType": "circle",
                    "x": x,
                    "y": y,
                    "radius": makeNum(10, 30),
                    "options": {
                        "label": label,
                        "restitution": makeNum(0, 10) * 0.1,
                        "isStatic": isStatic,
                        "render": {
                            "fillStyle": fillStyle
                        }
                    }
                }
            } else {
                var object = {
                    "shapeType": "polygon",
                    "x": x,
                    "y": y,
                    "sides": selectShapes,
                    "radius": makeNum(10, 50),
                    "options": {
                        "label": label,
                        "isStatic": isStatic,
                        "render": {
                            "fillStyle": fillStyle
                        }
                    }
                }
            }

            if (object.shapeType) {
                level.map.push(object);
            }
        }
        //ブロッカー
        var blockerX = [0, 100, 200][makeNum(0, 2)];
        var blockerY = [0, 100, 200, 300, 400][makeNum(0, 4)];
        var object = {
            "shapeType": "blocker",
            "x": blockerX,
            "y": blockerY,
            "width": 300 - blockerX,
            "height": 500 - blockerY
        }
        level.map.push(object);
    }

    //グローバル変数にする
    levelJSON = level;


    /*Matter js オブジェクト群を定義*/
    Engine = Matter.Engine;
    World = Matter.World;
    Bodies = Matter.Bodies;
    Render = Matter.Render;
    Runner = Matter.Runner;
    MouseConstraint = Matter.MouseConstraint;
    Mouse = Matter.Mouse;

    // Matter.js エンジン作成
    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
        element: $$("#main"),
        engine: engine,
        options: {
            width: 300,
            height: 500,
            wireframes: false,
            enabled: false
        }
    });

    Render.run(render);

    /*
    // 二つの箱(四角)と地面を作る
    var boxA = Bodies.rectangle(400, 100, 80, 80,{
        render:{
            fillStyle:"black"
        },
        label:"rectangle"
    });
    var boxB = Bodies.rectangle(200, 50, 160, 80,{
        label:"rectangle"
    });
    
    var boxC = Bodies.circle(375, 10, 50, {
    //バウンドさせたい場合はrestitutionに任意の値を渡す
    restitution: 0.8
    });
    */

    //取得したlevelから図形を生成
    var additionalBodies = [];
    for (var i = 0; i < level.map.length; i++) {
        var bodiesData = level.map[i];
        if (bodiesData.options) {
            //追加処理
            if (bodiesData.options.label !== "collision" && bodiesData.options.render) {
                if (arg["opacity"]) bodiesData.options.render.opacity = parseInt(arg["opacity"]) / 10;
                else bodiesData.options.render.opacity = "0.5";
            }
            if (bodiesData.options.label == "collision" && bodiesData.options.render) {
                /*bodiesData.options.render.sprite = {
                    "texture":"./component/img/texture.png",
                    "xScale":2,
                    "yScale":2
                };*/
            }
        }
        if (bodiesData.shapeType == "rectangle") {
            var newBodies = Bodies.rectangle(bodiesData.x, bodiesData.y, bodiesData.width, bodiesData.height, bodiesData.options);
            additionalBodies.push(newBodies);
        } else if (bodiesData.shapeType == "circle") {
            var newBodies = Bodies.circle(bodiesData.x, bodiesData.y, bodiesData.radius, bodiesData.options);
            additionalBodies.push(newBodies);
        } else if (bodiesData.shapeType == "blocker") {
            $("#blocker").css({
                "position": "absolute",
                "left": bodiesData.x,
                "top": bodiesData.y,
                "width": bodiesData.width,
                "height": bodiesData.height,
                "background-color": "rgba(192, 54, 54, 0.38)",
                "cursor": "not-allowed"
            });
        } else if (bodiesData.shapeType == "polygon") {
            var newBodies = Bodies.polygon(bodiesData.x, bodiesData.y, bodiesData.sides, bodiesData.radius, bodiesData.options);
            additionalBodies.push(newBodies);
        }


    }

    //壁を作る(どのレベルでも共通)
    // isStatic:静的(完全固定)
    var ground = Bodies.rectangle(150, 510, 490, 60, {
        isStatic: true,
        render: {
            fillStyle: "#7f7fff"
        }
    });


    var wallLeft = Bodies.rectangle(0, 250, 30, 600, {
        isStatic: true,
        render: {
            fillStyle: "#7f7fff"
        }
    });

    var wallRight = Bodies.rectangle(300, 250, 30, 600, {
        isStatic: true,
        render: {
            fillStyle: "#7f7fff"
        }
    });

    var wallTop = Bodies.rectangle(250, 0, 810, 30, {
        isStatic: true,
        render: {
            fillStyle: "#7f7fff"
        }
    })

    mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                strokeStyle: "rgba(115, 155, 217, 0.83)"
            }
        }
    });

    var defaultBodies = [ground, wallLeft, wallRight, wallTop, mouseConstraint];

    //追加要素とデフォルト要素を結合
    var addBodies = additionalBodies.concat(defaultBodies);

    //  定義した要素をワールドに追加
    World.add(world, addBodies);
    render.mouse = mouse;
    // Matter.js エンジン起動
    runner = Runner.create();
    Runner.run(runner, engine);

    //物理演算を停止
    runner.enabled = false;

    //重力(9.8に対する倍)
    if (arg["g"]) engine.world.gravity.y = arg["g"] / 10;
    else engine.world.gravity.y = 1;

    if (level.stageName == "finish") {
        runner.enabled = true;
    }

    Matter.Events.on(engine, "collisionStart", function (event) {
        var pair = event.pairs[0];
        if (pair.bodyA.label === "collision" && pair.bodyB.label === "collision") {
            window.parent.sound.bubble.play();
            Matter.World.remove(world, pair.bodyA);
            Matter.World.remove(world, pair.bodyB);
            setTimeout(function () {
                window.parent.sound.clear.play();
                Swal.fire({
                    "title": "Clear!!",
                    "text": "レベル" + arg["level"] + "をクリアしました！",
                    "type": "success",
                    "cancelButtonText": "次のレベルへ",
                    "showCancelButton": true,
                    "cancelButtonColor": "#0045ff",
                    "confirmButtonText": "リトライ",
                    "focusCancel": true,
                    "confirmButtonColor": "#4c4c4c"
                }).then(function (result) {
                    if (result.value) {
                        window.parent.sound.cancel.play();
                        setTimeout(function () {
                            location.reload();
                        }, 500);

                    } else {
                        window.parent.sound.decision.play();
                        setTimeout(function () {
                            if (arg["level"] === "random") location.href = "?level=random";
                            else if (arg["g"] && arg["opacity"]) location.replace("?level=" + parseInt(parseInt(arg["level"]) + 1) + "&g=" + arg["g"] + "&opacity=" + arg["opacity"]);
                            else location.replace("?level=" + parseInt(parseInt(arg["level"]) + 1));
                        }, 500);
                    }
                });

            }, 500);
        } else {
            //window.parent.sound.bound.play();
        }
    })
};

var levelStart = function () {
    $$("#startMessage").style.display = "none";
    runner.enabled = true;
    startedFlag = true;
    $$("#refreshButton").style.display = $$("#homeButton").style.display = "inline";
}

function makeNum(min, max) {
    var max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}
