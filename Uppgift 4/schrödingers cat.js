const cat = {
  alive: true,
  name: "Gustav",
}

function showCat() {
  cat.alive = Math.random() > 0.5
  alert("Katten " + cat.name + (cat.alive ? " är levande" : " är död"))
}