$(document).ready(function(){
  //Functions
  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });
  };

  //Func init
  etc();
});

$(window).load(function(){
  $('html').addClass('loaded');
});
