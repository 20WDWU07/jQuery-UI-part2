console.log('js');
  $('#loginSection, #controlSection, #myDevices, #reservation, #switcheOff').hide();


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
    $('#house').css('color', 'yellow').css('opacity','0.1').css('border','2px solid black');
    $('#switcheOff').show();
    $('#switcheOn').hide();
    $('#reservation').show();
    // if (parseInt(document.getElementById('minbeds').value) <=3){
    //   $('#house').css('color', 'yellow').css('opacity','0.5');
    // } else if (parseInt(document.getElementById('minbeds').value) > 3){
    //   $('#house').css('color', 'yellow').css('opacity','1');
    // }
    $('#minbeds').change(function(){
      // if (parseInt(document.getElementById('minbeds').value) <=3){
      //   $('#house').css('color', 'yellow').css('opacity','0.5');
      // } else if (parseInt(document.getElementById('minbeds').value) > 3){
      //   $('#house').css('color', 'yellow').css('opacity','1');
      // }
      switch (parseInt(document.getElementById('minbeds').value)){
        case 1:
          $('#house').css('color', 'yellow').css('opacity','0.2');
          break;
        case 2:
        $('#house').css('color', 'yellow').css('opacity','0.3');
          break;
        case 3:
          $('#house').css('color', 'yellow').css('opacity','0.5');
          break;
        case 4:
          $('#house').css('color', 'yellow').css('opacity','0.7');
          break;
        case 5:
          $('#house').css('color', 'yellow').css('opacity','0.9');
          break;
        default:
          $('#house').css('color', 'yellow').css('opacity','1');
      }
    });
  });

  $('#switcheOff').click(function(){
    $('#house').css('color', 'black');
    $('#switcheOff').hide();
    $('#switcheOn').show();
    $('#reservation').hide();

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
