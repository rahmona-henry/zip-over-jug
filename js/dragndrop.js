

function init() {

  $('.cup').each( function () {
      $( this ).draggable({
    containment: '#wrapper'
    })
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

function pourTheZip(event, cup) {
  cup.draggable.position( { of: $(this), my: 'center bottom', at: 'center bottom' } )
  $('#zip').addClass('run')

  setTimeout( function () {
    cup.draggable.removeClass( 'run' )
  }, 1000)

  setTimeout( function () {
    cup.draggable.addClass( 'fill' )
  }, 1000)
}

function dishwashCup(event, cup) {
  var cupID = "#" + cup.draggable[0].id  //need to add a # so that when it's passed into the $().remove, jquery knows it's an ID
  $(cupID).remove();
  $('#dishwasher').addClass('open')
}

module.exports = dragNdrop


