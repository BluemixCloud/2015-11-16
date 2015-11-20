$(document).ready(function(){
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/images',
    method: 'get',
    dataType: 'json',
    success: function(response){
      console.log(response);
      debugger;
      for(var i = 0; i < response.response.length; i++){
        var o = response.response[i];
        var stats = '';
        for(var j = 0; j < o.analysis.length; j++){
          stats += '<li>' + o.analysis[j].label_name + ' : ' + (o.analysis[j].label_score * 100).toFixed(2) + '%</li>';
        }

        var row = '<tr><td><img src="'+o.url+'"></td><td><ul>' + stats + '</ul></td></tr>';
        $('#tbody').append(row);
      }
    }
  });
});

$('#btn-add').click(function(){
  var url = $('#txt-url').val();

  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/images',
    method: 'post',
    dataType: 'json',
    data: {url: url},
    success: function(response){
      console.log(response);
    }
  });
});
