

/*@Desc: This function moves the object based
 * on the keys that are pressed. Using the arrows
 */

var $block=$('#block');
$(document).keydown(function(e) {
    switch (e.which) {
       case 65://Going Left
            if(detectCollide("#block", "#wall1")){ //collision with wall1
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall1");
            }
            else if(detectCollide("#block", "#wall2")){ //collision with wall2
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall2");
            }
            else if(detectCollide("#block", "#wall3")){ //collision with wall3
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall3");
            }
             else if(detectCollide("#block", "#wall4")){ //collision with wall4
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall4");
            }
             else if(detectCollide("#block", "#wall5")){ //collision with wall5
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall5");
            }
            else if(detectCollide("#block", "#wall6")){ //collision with wall6
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall6");
            }
             
             else if(detectCollide("#block", "#wall7")){ //collision with wall7
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall7");
            }
              else if(detectCollide("#block", "#wall8")){ //collision with wall8
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall8");
            }
            else if(detectCollide("#block", "#wall9")){ //collision with wall9
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall9");
            }
            else if(detectCollide("#block", "#wall10")){ // collision with wall10
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall10");
            }
            else{
                $block.css('left', $block.offset().left - 15);
            }
            break;
            
        case 87://going up
            if(detectCollide("#block", "#wall1")){ // collision with wall1
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall1");
            }
            else if(detectCollide("#block", "#wall2")){ // collision with wall2
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall3");
            }
            else if(detectCollide("#block", "#wall3")){ // collision with wall3
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall3");
            }
            else if(detectCollide("#block", "#wall4")){ // collision with wall4
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall4");
            }
           
            else if(detectCollide("#block", "#wall5")){ // collision with wall5
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall5");
            } 
            else if(detectCollide("#block", "#wall6")){ // collision with wall6
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall6");
            }
            else if(detectCollide("#block", "#wall7")){ // collision with wall7
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall7");
            }
            else if(detectCollide("#block", "#wall8")){ // collision with wall8
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall8");
            }
            else if(detectCollide("#block", "#wall9")){ // collision with wall9
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall9");
            }
            else if(detectCollide("#block", "#wall10")){ // collision with wall10
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall10");
            }
            else{
            $block.css('top', $block.offset().top - 15);
            }
            break;
        case 68://going right
             
            if(detectCollide("#block", "#wall1")){ // collision with wall1
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall1");
            }
            else if(detectCollide("#block", "#wall2")){ // collision with wall2
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall2");
            } 
            else if(detectCollide("#block", "#wall3")){ // collision with wall3
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall3");
            }
            else if(detectCollide("#block", "#wall4")){ // collision with wall4
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall4");
            }
            else if(detectCollide("#block", "#wall5")){ // collision with wall5
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall5");
            }
            else if(detectCollide("#block", "#wall6")){ // collision with wall6
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall6");
            }
            else if(detectCollide("#block", "#wall7")){ // collision with wall7
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall7");
            }
            else if(detectCollide("#block", "#wall8")){ // collision with wall8
                $block.css('top', "150px"); 
                $block.css('left', "150px");
                console.log("colliding with wall8");
            }
            else if(detectCollide("#block", "#wall9")){ // collision with wall9
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall9");
            }
             else if(detectCollide("#block", "#wall10")){ // collision with wall10
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall10");
            }
            else{
            $block.css('left', $block.offset().left + 15);
            }
            break;
        case 83://going down
            if(detectCollide("#block", "#wall1")){   // collision with wall1              
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall1");
            }
            else if(detectCollide("#block", "#wall2")){  // collision with wall2
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall2");
            }
            else if(detectCollide("#block", "#wall3")){  // collision with wall3
               $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall3");
            }
            else if(detectCollide("#block", "#wall4")){  // collision with wall4
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall4");
            }
            else if(detectCollide("#block", "#wall5")){  // collision with wall5
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall5");
            }
            
            else if(detectCollide("#block", "#wall6")){  // collision with wall6
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall6");
            }
            else if(detectCollide("#block", "#wall7")){  // collision with wall7
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall7");
            }
             else if(detectCollide("#block", "#wall8")){  // collision with wall8
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall8");
            }
            else if(detectCollide("#block", "#wall9")){  // collision with wall9
                $block.css('top', "150px");
                $block.css('left', "150px");
                console.log("colliding with wall9");
            }
             else if(detectCollide("#block", "#wall10")){  // collision with wall10
                $block.css('top', "150px"); 
                $block.css('left', "150px");
                console.log("colliding with wall10");
            }
            else{
            $block.css('top', $block.offset().top + 15);
            }
            break;
    }
 /*@Desc: This function detects if anything is colliding.
 *  If any of the following variables are true then the collision is false.
 *  and if any of the variables are false, then the collision is true
 */ 

    function detectCollide($div1, $div2) {
        var x1 = $($div1).offset().left;
        var y1 = $($div1).offset().top;
        var h1 = $($div1).outerHeight(true);
        var w1 = $($div1).outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $($div2).offset().left;
        var y2 = $($div2).offset().top;
        var h2 = $($div2).outerHeight(true);
        var w2 = $($div2).outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

    
    
});


    

