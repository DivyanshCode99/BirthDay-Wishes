var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var block_image_object="";
 var image_object="";

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });

    
}

function image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        obj=Img;
        obj.scaleToWidth(700);
       obj.scaleToHeight(510);
        obj.set({
            top:0,
            left:0
        });
        canvas.add(obj);
    });

    
}
function mom()
{
    fabric.Image.fromURL('Mom.jpeg',function(Img){
        image_object=Img;
        image_object.scaleToWidth(700);
        image_object.scaleToHeight(510);
        image_object.set({
            top:0,
            left:0
        });
        canvas.add(image_object);
    });

    
}
function mom2()
{
    fabric.Image.fromURL('mom2.jpeg',function(Img){
        object=Img;
        object.scaleToWidth(700);
        object.scaleToHeight(510);
        object.set({
            top:0,
            left:0
        });
        canvas.add(object);
    });

    
}

function playSound(){
	x.play()
}
