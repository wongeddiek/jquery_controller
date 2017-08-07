$().ready(function(){
  $('.right').on('mousedown', function(){moveObject.call(this, 'right')});

  $('.left').on('mousedown', function(){moveObject.call(this, 'left')});

  $('.top').on('mousedown', function(){moveObject.call(this, 'top')});

  $('.bottom').on('mousedown', function(){moveObject.call(this, 'bottom')});

  $('.topright').on('mousedown', function(){moveObject.call(this, 'topright')});

  $('.topleft').on('mousedown', function(){moveObject.call(this, 'topleft')});

  $('.bottomright').on('mousedown', function(){moveObject.call(this, 'bottomright')});

  $('.bottomleft').on('mousedown', function(){moveObject.call(this, 'bottomleft')});

});

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


