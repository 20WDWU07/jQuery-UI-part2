console.log('js');
  $('#loginSection, #controlSection, #myDevices, #switcheOff').hide();


$(document).ready(function(){
  $('#login').click(function(){
    $('#loginSection').show();
    $('.top-nav').hide();
  });
  $('#username').click(function(){
    // alert($(this).val());
    document.getElementById('username').value="";
  });
  $('#loginBtn').click(function(){
    $('#controlSection').show();

      $('#loginSection').hide();
    // $('nav').hide();
  });
  $('#controlDevice').click(function(){
    $('#myDevices').show();
    $('#controlSection').hide();
    $('#loginSection').hide();
    // $('nav').hide();
  });
  $('#switcheOn').click(function(){
    $('#house').css('color', 'yellow');
    $('#switcheOff').show();
      $('#switcheOn').hide();

  });
  $('#switcheOff').click(function(){
    $('#house').css('color', 'black');
    $('#switcheOff').hide();
    $('#switcheOn').show();

  });
  $('#lights').click(function(){

    $('#tvControl').hide();
    $('#lightControl').show();

  });

  // slider for light intensity
  $( function() {
    var select = $( "#minbeds" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 6,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#minbeds" ).on( "change", function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  } );

    // tabs for devices
  $( function() {
    $( "#tabs" ).tabs();
  } );

  // slider for tv volume
  $( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );
});
