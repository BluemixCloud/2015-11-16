$(document).ready(function(){
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/translations',
    method: 'get',
    dataType: 'json',
    success: function(response){
      console.log(response);

      for(var i = 0; i < response.response.length; i++){
        var o = response.response[i];
        var row = '<tr><td>' + o.from + '</td><td>' + o.original + '</td><td>' + o.translated + '</td></tr>';
        $('#tbody').append(row);
      }
    }
  });
});
