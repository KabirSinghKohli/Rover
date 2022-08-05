canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";

rover_image="rover.png";

function add() {

    bg=new Image();
    bg.onload=uploadbackground;
    bg.src=background_image;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=rover_image;
}

function uploadbackground() {

    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover,rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keypressed=e.keyCode;
console.log(keypressed);

if (keypressed == "38"){
    up();
    console.log("up");

    
}

if (keypressed == "40"){
    down();
    console.log("down");

    
}

if (keypressed == "37"){
    left();
    console.log("left");

    
}

if (keypressed == "39"){
    right();
    console.log("right");

    
}

}

function up() {

    if (rover_y >=0){
        rover_y=rover_y -10;
        console.log ("when up arrow is pressed, x = "+rover_x +" and y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down() {

    if (rover_y <=500){
        rover_y=rover_y + 10;
        console.log ("when down arrow is pressed, x = "+rover_x +" and y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left() {

    if (rover_x >=0){
        rover_x=rover_x -10;
        console.log ("when left arrow is pressed, x = "+rover_x +" and y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {

    if (rover_x <=700){
        rover_x=rover_x +10;
        console.log ("when right arrow is pressed, x = "+rover_x +" and y = "+rover_y);
        uploadbackground();
        uploadrover();
    }
}