var results = "";
$.get("http://127.0.0.1:6767/api/v1/resources/movies?id=1",function(data){
  results = JSON.parse(data);
});
console.log(results);