function func(search){
  $(document).ready(function () {
      $.getJSON(search,  function (data) {
          var x = '';
          var data2 = data.main;
          $.each(data2, function (key, value) {
            x+='<td><div>';
              x += '<p> Temp:';
              x += value.temp + '</p>';
              x += '<p> Temp:';
              x += value.temp_min + '</p>';
              x += '<p> Temp:';
              x += value.temp_max + '</p>';
              // x+='<td>'+'<a href = https://api.openweathermap.org/data/2.5/weather?q='+value.cities[0]+'&appid=794ee95e63c5a32aaf88cd813fa2e425>'+'<h2 style="color:darkblue">'+value.cities[0]+'</h2>'+'</a>'+'</td>';
              x+='</div></td>';
          });
          $('#table').append(x);
      });
  });
}
