$(document).ready(function(){
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/pens',
    method: 'get',
    dataType: 'json',
    success: function(response){
      console.log(response);
      for(var i = 0; i < response.response.length; i++){
        var o = response.response[i];
        var outer = $('<div class="pen">');
        var title = $('<h3>'+o.title+'</h3>');
        var date = $('<p>'+o.date+'</p>');
        var code = $(o.code);
        outer.append(title, date, code);
        $('#pens').append(outer);
      }
    }
  });
});

$('#btn-add').click(function(){
  // get inputs
  var title = $('#txt-title').val();
  var date = $('#txt-date').val();
  var code = $('#txt-code').val();

  // clear inputs
  $('#txt-title').val('');
  $('#txt-date').val('');
  $('#txt-code').val('');

  // send http request
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/pens',
    method: 'post',
    dataType: 'json',
    data: {title: title, date: date, code: code},
    success: function(response){
      console.log(response);
    }
  });
});
