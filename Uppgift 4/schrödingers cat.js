const cat = {
  alive: true,
  name: "Gustav",
}

function showCat() {
  cat.alive = Math.random() > 0.5;
  if (cat.alive) {
   alert("Katten " + cat.name + " är levande")
  } else {
   alert("Katten " + cat.name +  " är död")
    }
  }
