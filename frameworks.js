document.getElementById("filter").addEventListener("click", function() {
  var starsFilter = document.getElementById('stars');
  var accessFilter = document.getElementById('access');
  var allFilter = document.getElementById('all');
  fetch('./frameworks.json').then(response => {
      return response.json();
    }).then(data => {
      var i, x ="";
      console.log(data.frameworks); 
      const arr1 = data.frameworks.filter(d => d.stars > 30000);
      const arr2 = data.frameworks.filter(d =>  d.accessibility === true);
  if (starsFilter.checked === true) {
    for (i in arr1) {
      x += '<div class="card"><div class="card-top"><h1>'+arr1[i].name+'</h1><h1>'+arr1[i].corporation+'</h1><h1>'+arr1[i].stars+'</h1></div>'+
      '<div class="card-footer"><h1>'+'Accesibility: '+arr1[i].accessibility+'</h1><h1>'+'Size: '+arr1[i].size.uncompressed+'</h1></div></div>';
      document.getElementById("demo").innerHTML = x;
    }
  } else if (accessFilter.checked === true) {
      for (i in arr2) {
        x += '<div class="card"><div class="card-top"><h1>'+arr2[i].name+'</h1><h1>'+arr2[i].corporation+'</h1><h1>'+arr2[i].stars+'</h1></div>'+
        '<div class="card-footer"><h1>'+'Accesibility: '+arr2[i].accessibility+'</h1><h1>'+'Size: '+arr2[i].size.uncompressed+'</h1></div></div>';
        document.getElementById("demo").innerHTML = x;
      }
    } else if (allFilter.checked === true) {
      for (i in data.frameworks) {
        x += '<div class="card"><div class="card-top"><h1>'+data.frameworks[i].name+'</h1><h1>'+data.frameworks[i].corporation+'</h1><h1>'+data.frameworks[i].stars+'</h1></div>'+
        '<div class="card-footer"><h1>'+'Accesibility: '+data.frameworks[i].accessibility+'</h1><h1>'+'Size: '+data.frameworks[i].size.uncompressed+'</h1></div></div>';
        document.getElementById("demo").innerHTML = x;
      }
    } 
    else {
        document.getElementById("demo").innerHTML = ""
    }
    }).catch(err => {
    });
 
  
})



