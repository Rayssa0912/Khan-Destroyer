const originalFetch=window.fetch;window.fetch=async function(n,e){let t;if(n instanceof Request?t=await n.clone().text():e?.body&&(t=e.body),t&&t.includes('"operationName":"updateUserVideoProgress"'))try{const o=JSON.parse(t);if(o.variables?.input){const i=o.variables.input.durationSeconds;Object.assign(o.variables.input,{secondsWatched:i,lastSecondWatched:i}),alert("Skipped video"),t=JSON.stringify(o),n instanceof Request?n=new Request(n,{...e,body:t}):e.body=t}}catch(n){console.error("Error processing JSON:",n)}return originalFetch.call(this,n,e)},location.softReload=()=>{const n=document.getElementsByTagName("html")[0].outerHTML;document.open(),document.write(n),document.close()},location.softReload(),console.error=function(){};const s=document.createElement("style");s.innerHTML='\n        .m {\n            position: fixed;\n            top: 10%;\n            right: 10px;\n            width: 220px;\n            height: 400px;\n            background: #f89509;\n            border: 2px solid #ff8c00;\n            border-radius: 12px;\n            font-family: Arial, sans-serif;\n            color: #fff;\n            z-index: 9999;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            overflow: hidden;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n        }\n        .b {\n            width: 100%;\n            height: 160px;\n            background: url("https://raw.githubusercontent.com/ilytobias/Khan-Destroyer/refs/heads/main/test.jpg") no-repeat center center;\n            background-size: cover;\n            position: relative;\n        }\n        .b::before {\n            content: "";\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);\n            pointer-events: none;\n            border-radius: 20%;\n        }\n        .b::after {\n            content: "";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(to bottom, rgba(248, 149, 9, 0) 20%, rgba(248, 149, 9, 1) 90%);\n        }\n        .btn, .i-btn, .t {\n            padding: 8px;\n            width: 100%;\n            border-radius: 6px;\n            border: none;\n            color: white;\n            cursor: pointer;\n            font-size: 13px;\n            background-color: #ff8c00;\n            margin: 4px 0; /* Add some spacing between buttons */\n        }\n        .btn:hover, .i-btn:hover {\n            background-color: #ffb84d;\n        }\n        .t {\n            background-color: red;\n        }\n        .t.on {\n            background-color: green;\n        }\n        .i {\n            padding: 8px;\n            width: 60%;\n            border-radius: 6px;\n            border: 1px solid #ff8c00;\n            color: white;\n            background-color: #23272a;\n            font-size: 13px;\n            display: inline-block;\n        }\n        .ic {\n            display: flex;\n            width: 100%;\n            margin-top: 8px;\n        }\n        .f {\n            font-size: 12px;\n            color: #ccc;\n            text-align: center;\n            margin-top: auto;\n        }\n    ',document.head.appendChild(s);const menuHTML='\n        <div class="m" draggable="true">\n            <div class="b"></div>\n            <button class="btn" id="skipLessonBtn">Skip Lesson</button>\n            <button class="t" id="toggleButton">Minute Farmer: OFF</button>\n            <div class="ic">\n                <input class="i" id="nameInput" placeholder="Change Name..." />\n                <button class="i-btn" id="changeNameBtn">Set</button>\n            </div>\n            <div class="f">Ctrl to toggle the menu</div>\n        </div>\n    ';function skipLesson(){skipLessonBtn.onclick=function(){alert("Can't skip while in progress.")};const n=window.open(location.href,"targetWindow","width=200,height=300,resizable=no");n.onload=function(){const e=document.createElement("style");e.appendChild(document.createTextNode("#terminalOverlay {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.9);display: flex;align-items: center;justify-content: center;z-index: 1000;}#terminalContent {width: 200px;height: 300px;background-color: black;color: white;padding: 10px;font-family: monospace;overflow-y: auto;border: 2px solid white;}.warning {color: orange;}.error {color: red;}")),n.document.head.appendChild(e);const t=document.createElement("div");t.setAttribute("id","terminalOverlay");const o=document.createElement("div");function i(n,e="normal"){const t=document.createElement("div");t.appendChild(document.createTextNode(n)),"warning"===e?t.setAttribute("class","warning"):"error"===e&&t.setAttribute("class","error"),o.appendChild(t),o.scrollTop=o.scrollHeight}var s;o.setAttribute("id","terminalContent"),o.appendChild(document.createTextNode("Terminal Initialized...\n")),t.appendChild(o),n.document.body.appendChild(t),i("Injecting script..."),n.JSON.parse=(s=n.JSON.parse,function(e,t){let o=s(e,t);try{const e=n.JSON.parse(o.data.assessmentItem.item.itemData);e.question.content.includes("[[")&&(e.question.content="[[☃ radio 3]]",e.question.widgets={"radio 3":{alignment:"default",graded:!0,options:{choices:[{content:"Correct answer",correct:!0},{content:"Incorrect answer",correct:!1}],deselectEnabled:!1,displayCount:null,hasNoneOfTheAbove:!1,multipleSelect:!1,onePerLine:!0,randomize:!1},static:!1,type:"radio",version:{major:1,minor:0}}}),o.data.assessmentItem.item.itemData=n.JSON.stringify(e)}catch(n){}return o}),n.console.error=function(){},function e(){const t=n.document.getElementsByClassName("_ssxvf9l")[0],o=n.document.getElementsByClassName("_1f0fvyce")[0],s=n.document.getElementsByClassName("_rz7ls7u")[0],r=n.document.getElementsByClassName("_6t500vf")[0],c=n.document.getElementsByClassName("_ixuggsz")[0];t&&t.click(),o&&o.click(),s&&s.click(),setTimeout((function(){if(r&&(i("Going to next question..."),r.click()),c)return i("Skipped successfully. Please close this window."),void(skipLessonBtn.onclick=function(){skipLesson()});e()}),800)}()}}document.body.insertAdjacentHTML("beforeend",menuHTML),document.getElementById("skipLessonBtn").onclick=skipLesson,document.getElementById("toggleButton").onclick=function(){const n=this.classList.toggle("on");this.innerText=n?"Minute Farmer: ON":"Minute Farmer: OFF"},document.getElementById("changeNameBtn").onclick=function(){const n=document.getElementById("nameInput");document.getElementsByClassName("_quhmuv0 _13hnk7qk")[0].innerText=n.value};let isCtrlPressed=!1;document.addEventListener("keydown",(function(n){"Control"===n.key&&(isCtrlPressed=!isCtrlPressed,document.querySelector(".m").style.display=isCtrlPressed?"none":"flex")}));
