var canvas = new fabric.Canvas("myCanvas");
block_image_height = 30;
block_image_width = 30;
player_x = 10;
player_y = 10;

var player_object = "";

function player_update() 
{

    fabric.Image.fromURL("player.png" , function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y ,
            left:player_x

        })
        canvas.add(player_object);
    });
    
}

function new_image(get_image) 
{

    fabric.Image.fromURL( get_image , function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y ,
            left:player_x

        })
        canvas.add(block_image_object);
    });
    
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{

    key_Pressed = e.keyCode;
    console.log(key_Pressed);
    if(e.shiftKey == true && key_Pressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && key_Pressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(key_Pressed == '37')
    {
        left();
        console.log("left");
    }
    if(key_Pressed == '38')
    {
        up();
        console.log("up");
    }
    if(key_Pressed == '39')
    {
        right();
        console.log("right");
    }
    if(key_Pressed == '40')
    {
        down();
        console.log("down");
    }
    if(key_Pressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t"); 
    }
    if(key_Pressed == '68')
    {
        new_image('dark_green.png');
        console.log("d"); 
    }
    if(key_Pressed == '76')
    {
        new_image('light_green.png');
        console.log("l"); 
    }
    if(key_Pressed == '71')
    {
        new_image('ground.png');
        console.log("g"); 
    }
    if(key_Pressed == '87')
    {
        new_image('wall.jpg');
        console.log("w"); 
    }
    if(key_Pressed == '89')
    {
        new_image('yellow_wall.png');
        console.log("y"); 
    }
    if(key_Pressed == '82')
    {
        new_image('roof.jpg');
        console.log("r"); 
    }
    if(key_Pressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c"); 
    }
    if(key_Pressed == '85')
    {
        new_image('unique.png');
        console.log("u"); 
    }
    
}

function up()
{
    if(player_y >= 0);
    {
        player_y = player_y - block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When up arrow key is pressed , " + player_x + " , y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <= 500);
    {
        player_y = player_y + block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When down arrow key is pressed , " + player_x + " , y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x > 0);
    {
        player_x = player_x - block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When left arrow key is pressed , " + player_x + " , y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x >= 850);
    {
        player_x = player_x + block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When right arrow key is pressed , " + player_x + " , y = " + player_y );
        canvas.remove(player_object);
        player_update();
    }
}