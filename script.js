var myWinners = [
  {
    year: "2022",
    country: "Argentina",
    host: "Qatar",
    result: "Argentina beat France",
    image: "https://images.unsplash.com/photo-1671478356222-11892182ffb3?auto=format&fit=crop&w=900&q=80"
  },
  {
    year: "2018",
    country: "France",
    host: "Russia",
    result: "France beat Croatia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/France_champion_of_the_Football_World_Cup_Russia_2018.jpg/960px-France_champion_of_the_Football_World_Cup_Russia_2018.jpg"
  },
  {
    year: "2014",
    country: "Germany",
    host: "Brazil",
    result: "Germany beat Argentina",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Award_ceremony_of_the_World_Cup_in_Brazil_06.jpg/960px-Award_ceremony_of_the_World_Cup_in_Brazil_06.jpg"
  }
];

var champsData = [
  { name: "Brazil", score: 5 },
  { name: "Germany", score: 4 },
  { name: "Italy", score: 4 },
  { name: "Argentina", score: 3 }
];

var btn = document.getElementById("btnMenu");
var menu = document.getElementById("menuLinks");

btn.onclick = function () {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
  }
};

var box = document.getElementById("winnersBox");

for (var i = 0; i < myWinners.length; i++) {
  var myDiv = document.createElement("div");
  myDiv.className = "my-card";
  myDiv.style.backgroundImage = "url('" + myWinners[i].image + "')";

  var textDiv = document.createElement("div");
  textDiv.className = "card-info";
  
  textDiv.innerHTML = "<p>" + myWinners[i].year + "</p>" +
                      "<h2>" + myWinners[i].country + "</h2>" +
                      "<p>" + myWinners[i].result + "</p>";

  myDiv.appendChild(textDiv);
  box.appendChild(myDiv);
}

var list = document.getElementById("champsList");

for (var x = 0; x < champsData.length; x++) {
  var row = document.createElement("div");
  row.className = "row-champ";

  var w = champsData[x].score * 20;

  row.innerHTML = "<div class='c-name'>" + champsData[x].name + "</div>" +
                  "<div class='progress-bg'><div class='progress-color' style='width:" + w + "%'></div></div>" +
                  "<div class='c-num'>" + champsData[x].score + "</div>";

  list.appendChild(row);
}

var nums = document.getElementsByClassName("num-stat");
for (var z = 0; z < nums.length; z++) {
  var target = nums[z].getAttribute("data-target");
  nums[z].innerHTML = target;
}