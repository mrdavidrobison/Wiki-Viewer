$(document).ready(function(){

  $('#search').click(function(){
    
    var searchTerm = $('#searchTerm').val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    console.log(url);

    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data, textStatus, jqXHR) {
        $('#output').html('');
        for(var i=0;i<data[1].length;i++){
          $('#output').prepend("<div><div class='#item'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );  
        }  
      },
      error: function(error){
        alert("Error");
      }
    });

  });
});