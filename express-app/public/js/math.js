$('#btn-compute').click(function(){
  var numbers = $('#txt-numbers').val();
  var phone = $('#txt-phone').val();
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/math',
    method: 'post',
    dataType: 'json',
    data: {numbers: numbers, phone: phone},
    success: function(response){
      console.log(response);
      $('#div-sum').text(response.response.sum);
      $('#div-avg').text(response.response.avg);
    }
  });
});
