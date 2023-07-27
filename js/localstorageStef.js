window.onload = opdrachtenVoltooid();

function opdrachtenVoltooid() {
    var C1 = localStorage.getItem("C1");
        if (C1 === "true"){
            const image1 = document.getElementById('iO1');
            const image1_1 = document.getElementById('iO1_1');
            document.getElementById('textOpdracht1').style.color = '#04AA6D';
            image1.src = "../img/check-mark-1292787.svg";
            image1_1.src = "../img/check-mark-1292787.svg";
            document.getElementById("button1").style.display = 'none';
            document.getElementById("button1_hidden").style.display = 'initial';
        }
            else {
                const image1 = document.getElementById('iO1');
                const image1_1 = document.getElementById('iO1_1');
                document.getElementById('textOpdracht1').style.color = 'black'
                image1.src = "../img/opdrachten/question-mark-1829459_1280.png"
                image1_1.src = "../img/opdrachten/question-mark-1829459_1280.png"
            }
    var C2 = localStorage.getItem("C2");
        if (C2 === "true"){
            const image1 = document.getElementById('iO2');
            const image1_1 = document.getElementById('iO2_1');
            document.getElementById('textOpdracht2').style.color = '#04AA6D';
            image1.src = "../img/check-mark-1292787.svg";
            image1_1.src = "../img/check-mark-1292787.svg";
            document.getElementById("button2").style.display = 'none';
            document.getElementById("button2_hidden").style.display = 'initial';
        }
            else {
                const image1 = document.getElementById('iO2');
                const image1_1 = document.getElementById('iO2_1');
                document.getElementById('textOpdracht2').style.color = 'black'
                image1.src = "../img/opdrachten/people-3111280_1280.jpg"
                image1_1.src = "../img/opdrachten/people-3111280_1280.jpg"
            }
    var C3 = localStorage.getItem("C3");
        if (C3 === "true"){
            const image1 = document.getElementById('iO3');
            const image1_1 = document.getElementById('iO3_1');
            document.getElementById('textOpdracht3').style.color = '#04AA6D';
            image1.src = "../img/check-mark-1292787.svg";
            image1_1.src = "../img/check-mark-1292787.svg";
            document.getElementById("button3").style.display = 'none';
            document.getElementById("button3_hidden").style.display = 'initial';
        }
            else {
                const image1 = document.getElementById('iO3');
                const image1_1 = document.getElementById('iO3_1');
                document.getElementById('textOpdracht3').style.color = 'black'
                image1.src = "../img/opdrachten/bar-209148_1920.jpg"
                image1_1.src = "../img/opdrachten/bar-209148_1920.jpg"
            }
    var C4 = localStorage.getItem("C4");
        if (C4 === "true"){
            const image1 = document.getElementById('iO4');
            const image1_1 = document.getElementById('iO4_1');
            document.getElementById('textOpdracht4').style.color = '#04AA6D';
            image1.src = "../img/check-mark-1292787.svg";
            image1_1.src = "../img/check-mark-1292787.svg";
            document.getElementById("button4").style.display = 'none';
            document.getElementById("button4_hidden").style.display = 'initial';
        }
            else {
                const image1 = document.getElementById('iO4');
                const image1_1 = document.getElementById('iO4_1');
                document.getElementById('textOpdracht4').style.color = 'black'
                image1.src = "../img/opdrachten/soccer-1490541_1280.jpg"
                image1_1.src = "../img/opdrachten/soccer-1490541_1280.jpg"
            }
    // var C5 = localStorage.getItem("C3");
    //     if (C3 === "true"){
    //         const image1 = document.getElementById('iO3');
    //         const image1_1 = document.getElementById('iO3_1');
    //         document.getElementById('textOpdracht3').style.color = '#04AA6D';
    //         image1.src = "../img/check-mark-1292787.svg";
    //         image1_1.src = "../img/check-mark-1292787.svg";
    //         document.getElementById("button3").style.display = 'none';
    //         document.getElementById("button3_hidden").style.display = 'initial';
    //     }
    //         else {
    //             const image1 = document.getElementById('iO3');
    //             const image1_1 = document.getElementById('iO3_1');
    //             document.getElementById('textOpdracht3').style.color = 'black'
    //             image1.src = "../img/opdrachten/frog-914520_1280.jpg"
    //             image1_1.src = "../img/opdrachten/frog-914520_1280.jpg"
    //         }
    var C6 = localStorage.getItem("C6");
        if (C6 === "true"){
            const image1 = document.getElementById('iO6');
            const image1_1 = document.getElementById('iO6_1');
            document.getElementById('textOpdracht6').style.color = '#04AA6D';
            image1.src = "../img/check-mark-1292787.svg";
            image1_1.src = "../img/check-mark-1292787.svg";
            document.getElementById("button6").style.display = 'none';
            document.getElementById("button6_hidden").style.display = 'initial';
        }
            else {
                const image1 = document.getElementById('iO6');
                const image1_1 = document.getElementById('iO6_1');
                document.getElementById('textOpdracht6').style.color = 'black'
                image1.src = "../img/opdrachten/beer-advertising-2712521_1920.jpg" 
                image1_1.src = "../img/opdrachten/beer-advertising-2712521_1920.jpg" 
            }
}

//Script opdracht 1
function aC1() {
    const image1 = document.getElementById('iO1');
    const image1_1 = document.getElementById('iO1_1');
    document.getElementById('textOpdracht1').style.color = '#04AA6D';
    image1.src = "../img/check-mark-1292787.svg";
    image1_1.src = "../img/check-mark-1292787.svg";
    var done1 = "true";
    localStorage.setItem("C1", done1);
    
};
// AC stands for 'assessmentCompleted'
function aC1Herstel(){
    localStorage.removeItem("C1");
    document.getElementById("button1_hidden").style.display = 'none';
    
};
//Script opdracht 2
function aC2() {
    const image1 = document.getElementById('iO2');
    const image1_1 = document.getElementById('iO2_1');
    document.getElementById('textOpdracht2').style.color = '#04AA6D';
    image1.src = "../img/check-mark-1292787.svg";
    image1_1.src = "../img/check-mark-1292787.svg";
    var done2 = "true";
    localStorage.setItem("C2", done2);
    
}
function aC2Herstel(){
    localStorage.removeItem("C2");
    document.getElementById("button2_hidden").style.display = 'none';
    
}
//Script opdracht 3
function aC3() {
    const image1 = document.getElementById('iO3');
    const image1_1 = document.getElementById('iO3_1');
    document.getElementById('textOpdracht3').style.color = '#04AA6D';
    image1.src = "../img/check-mark-1292787.svg";
    image1_1.src = "../img/check-mark-1292787.svg";
    var done3 = "true";
    localStorage.setItem("C3", done3);
    
}
function aC3Herstel(){
    localStorage.removeItem("C3");
    document.getElementById("button3_hidden").style.display = 'none';
    
}
//Script opdracht 4
function aC4() {
    const image1 = document.getElementById('iO4');
    const image1_1 = document.getElementById('iO4_1');
    document.getElementById('textOpdracht4').style.color = '#04AA6D';
    image1.src = "../img/check-mark-1292787.svg";
    image1_1.src = "../img/check-mark-1292787.svg";
    var done4 = "true";
    localStorage.setItem("C4", done4);
    
}
function aC4Herstel(){
    localStorage.removeItem("C4");
    document.getElementById("button4_hidden").style.display = 'none';
    
}
//Script opdracht 5
// function aC2() {
//     const image1 = document.getElementById('iO2');
//     const image1_1 = document.getElementById('iO2_1');
//     document.getElementById('textOpdracht2').style.color = '#04AA6D';
//     image1.src = "../img/check-mark-1292787.svg";
//     image1_1.src = "../img/check-mark-1292787.svg";
//     var done2 = "true";
//     localStorage.setItem("C2", done2);
    
// }
// function aC2Herstel(){
//     localStorage.removeItem("C2");
//     document.getElementById("button2_hidden").style.display = 'none';
    
// }
//Script opdracht 6
function aC6() {
    const image1 = document.getElementById('iO6');
    const image1_1 = document.getElementById('iO6_1');
    document.getElementById('textOpdracht6').style.color = '#04AA6D';
    image1.src = "../img/check-mark-1292787.svg";
    image1_1.src = "../img/check-mark-1292787.svg";
    var done6 = "true";
    localStorage.setItem("C6", done6);
    
}
function aC6Herstel(){
    localStorage.removeItem("C6");
    document.getElementById("button6_hidden").style.display = 'none';
    
}


function reloadOnpress(){
    location.reload();
};

