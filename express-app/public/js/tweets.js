$('body').on('click', '.play', function(){
  var text = $(this).parent().parent().children(':nth-child(1)').text();
  console.log(text);
  $('audio').attr('src', 'http://ca-101-mattonearth-nodered.mybluemix.net/play?audio=' + text);
});

$(document).ready(function(){
  $.ajax({
    url: '/proxy?url=http://ca-101-chyld-nodered.mybluemix.net/tweets',
    method: 'get',
    dataType: 'json',
    success: function(response){
      console.log(response);
      drawChart(response.response);

      for(var i = 0; i < response.response.length; i++){
        var o = response.response[i];
        var row = '<tr><td>' + o.tweet + '</td><td>' + o.score + '</td><td><button class="play tiny radius alert">Play</button></td></tr>';
        $('#tbody').append(row);
      }
    }
  });
});

function drawChart(tweets){
  $('#graph').highcharts({
    title: {
      text: 'Tweet Sentiment Analysis'
    },
    xAxis: {
       categories: tweets.map(function(t, i){return i})
    },
    series: [
     {
       data: tweets.map(function(t){return t.score})
     }
    ]
  });
}
