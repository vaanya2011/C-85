canvas = document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
array=['mars.jpg', 'bg_2.jpg', 'bg_3.jpg', 'bg_4.jpg'];
random_no=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img=array[random_no];
rover_img="rover.png";
function add(){
    background_Imgtag=new Image();
    background_Imgtag.onload= upload_bg;
    background_Imgtag.src=background_img;
    rover_Imgtag=new Image();
    rover_Imgtag.onload=upload_rover;
    rover_Imgtag.src=rover_img;
}
function upload_bg(){
    ctx.drawImage(background_Imgtag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_Imgtag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown)
 function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='37'){
        Left();
        console.log("left is pressed");
    }
    if(keypressed=='38'){
        Up();
        console.log("up is pressed");
    }
    if(keypressed=='39'){
         Right();
        console.log("right is pressed");
    }
    if(keypressed=='40'){
        Down();
        console.log("down is pressed");
    }
 }

 function Left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_bg();
        upload_rover();
    }}
 function Up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_bg();
        upload_rover();
 }  
    }
    function Right(){
        if(rover_x<=700){
            rover_x=rover_x+10;
            upload_bg();
            upload_rover();
        }
    }
    function Down(){
        if(rover_y<=500){
            rover_y=rover_y+10;
            upload_bg();
            upload_rover();
        }


    }
    
 
