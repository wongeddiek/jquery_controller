$().ready(function(){
  $('.right').on('mousedown', moveObjectR);

  $('.left').on('mousedown', moveObjectL);

  $('.top').on('mousedown', moveObjectT);

  $('.bottom').on('mousedown', moveObjectB);

  $('.topright').on('mousedown', moveObjectTR);

  $('.topleft').on('mousedown', moveObjectTL);

  $('.bottomright').on('mousedown', moveObjectBR);

  $('.bottomleft').on('mousedown', moveObjectBL);

});

function moveObjectR() {
  moveObject.call(this, 'right');
}

function moveObjectL() {
  moveObject.call(this, 'left');
}

function moveObjectT() {
  moveObject.call(this, 'top');
}

function moveObjectB() {
  moveObject.call(this, 'bottom');
}

function moveObjectTR() {
  moveObject.call(this, 'topright');
}

function moveObjectTL() {
  moveObject.call(this, 'topleft');
}

function moveObjectBR() {
  moveObject.call(this, 'bottomright');
}

function moveObjectBL() {
  moveObject.call(this, 'bottomleft');
}

function moveObject (dir){
  switch (dir) {
    case 'right':
      $('.object').animate({left: '265px', right: '-265px'}, 5000, 'linear');
      break;
    case 'left':
      $('.object').animate({right: '265px', left: '-265px'}, 5000, 'linear');
      break;
    case 'top':
      $('.object').animate({bottom: '240px', top: '-240px'}, 5000, 'linear');
      break;
    case 'bottom':
      $('.object').animate({top: '240px', bottom: '-240px'}, 5000, 'linear');
      break;
    case 'topright':
      $('.object').animate({left: '265px', bottom: '240px', right: '-265px', top: '-240px'}, 5000, 'linear');
      break;
    case 'topleft':
      $('.object').animate({right: '265px', bottom: '240px', left: '-265px', top: '-240px'}, 5000, 'linear');
      break;
    case 'bottomright':
      $('.object').animate({left: '265px', top: '240px', right: '-265px', bottom: '-240px'}, 5000, 'linear');
      break;
    case 'bottomleft':
      $('.object').animate({right: '265px', top: '240px', left: '-265px', bottom: '-240px'}, 5000, 'linear');
      break;
  }

  $(this).css('background-color', 'green');

  $(this).on('mouseleave', function(){
    $('.object').clearQueue();
    $('.object').stop();
    $(this).removeAttr('style');
  });
  $(this).on('mouseup', function(){
    $('.object').clearQueue();
    $('.object').stop();
    $(this).removeAttr('style');
  });
}


