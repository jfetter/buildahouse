
$(document).ready(init)

function init (){
  console.log("im in it");

 // identifies all images as dragable  
$("img").draggable({
  addClasses: false
});
// identifies all divs in the class "to" as drop targets, where images can be
// placed
$('.to').droppable({
    drop: function(event, ui) {
// identifies that draggable ojbects will be detached in the drop zone and
// added will stick to the div where they are dropped
        $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
    }
});

}

