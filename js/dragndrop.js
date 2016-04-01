
$(init) //possibly means 'on page load'

function init() {

  $('#cup').draggable({
    containment: '#wrapper'
  })

  $('#underZip').droppable({
    drop: pourTheZip
  })

  $('#dishwasher').droppable({
    drop: dishwashCup
  })

}




function pourTheZip(event, cup) {
  cup.draggable.addClass( 'cupDropped' )
  cup.draggable.position( { of: $(this), my: 'center top', at: 'center top' } )
}


function dishwashCup(event, cup) {
  var cupID = "#" + cup.draggable[0].id  //need to add a # so that when it's passed into the $().remove, jquery knows it's an ID
  $(cupID).remove();
}



