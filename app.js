window.onload = function () {
  $("#page").show();
  $("#loading").hide();
  ready();
};
$("#middle_div").on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

var ready = function(){
  var anchorPoints = $('#middle_div').find('a');
  var sections = $('.anchorPoint');
  sections.each(function(index){
    $(this).waypoint(function(direction){
      if(direction == 'down'){
        anchorPoints.removeClass('active');
        $(anchorPoints.get(index)).addClass('active');
      }
    }, {offset: '1'});

    $(this).waypoint(function(direction){
      if(direction == 'up'){
        anchorPoints.removeClass('active');
        $(anchorPoints.get(index)).addClass('active');
      }
    }, {offset: '-1'});
  });

  $('#about').waypoint(function(direction){
    if(direction == 'down'){
      $($(this)[0].element).addClass('falldown');
    }
  }, {offset: '75%'});

  $('#projects').waypoint(function(direction){
    if(direction == 'down'){
      $($(this)[0].element).addClass('falldown');
    }
  }, {offset: '75%'});

  $('#skills').waypoint(function(direction){
    if(direction == 'down'){
      $($(this)[0].element).addClass('falldown');
    }
  }, {offset: '75%'});

  $('.item').waypoint(function(direction){
    if(direction == 'down'){
      $($(this)[0].element).addClass('falldown');
    }
  }, {offset: '75%'});



} ;
