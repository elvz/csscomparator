var  i, x = "";

const frameworks = [
  {
    name: 'Bootstrap',
    accessability: 'true',
    stars: 130000,
  },
  {
    name: 'Materialize',
    accessability: 'false',
    stars: 30000,
  },
  {
    name: 'Bootstrap4',
    accessability: 'true',
    stars: 1300000,
  },
  {
    name: 'Foundation',
    accessability: 'false',
    stars: 2000,
  },
];

function myFunc() {
  var starsFilter = document.getElementById('stars');
  const arr1 = frameworks.filter(d => d.stars > 50000);
  if (starsFilter.checked === true) {
    for (i in arr1) {
      x += "<h2>" + arr1[i].name + " " + arr1[i].stars + " " + arr1[i].accessability +  "</h2>";
      document.getElementById("demo").innerHTML = x
    }
  }
}

