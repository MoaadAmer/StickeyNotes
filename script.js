window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    let container2 = document.getElementsByClassName('container2')[0];
    let container3 = document.getElementsByClassName('container3')[0];

    let checkIcon = document.getElementById('checkIcon');
    let xIcon = document.getElementById('xIcon');
    let createNoteBtn = document.getElementById('createNoteBtn');

    createNoteBtn.addEventListener('click', showNewNote)
    xIcon.addEventListener('click', showNewNote);
    checkIcon.addEventListener('click', createNote);



    function showNewNote() {
        container3.classList.toggle('visible');
    }

    function createNote() {
        let noteText = document.getElementById('noteText');

        let div = document.createElement('div');
        let h1 = document.createElement('h1');

        h1.innerHTML = noteText.value;
        h1.setAttribute('style', `width:250px; height:250px; font-size:26px;
                         padding:25px; margin-top:10px;overflow:hidden;
                         box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)`);

        h1.style.margin = margin();
        h1.style.transform = rotate();
        h1.style.background = color();

        div.appendChild(h1);

        container2.insertAdjacentElement('beforeend', div);

        div.addEventListener('mouseenter', function () {
            div.style.transform = 'scale(1.1)';
            div.style.cursor = 'pointer';
        });
        div.addEventListener('mouseleave', function () {
            div.style.transform = 'scale(1)';
            div.style.cursor = 'none';
        });

        div.addEventListener('dblclick', function () {
            div.remove();
        });

        noteText.value = '';

    }

    function margin() {
        let randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

        return randomMargin[Math.floor(Math.random() * randomMargin.length)];
    }

    function rotate() {
        let randomDeg = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
        return randomDeg[Math.floor(Math.random() * randomDeg.length)];
    }


    let nextColor = 0;
    function color() {
        let randomColors = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
        nextColor += 1;
        nextColor %= randomColors.length;
        return randomColors[nextColor];

    }


});


