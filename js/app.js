function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function Location(name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.data = [];
    this.total = 0;
    this.generateData();
    this.render();
}

const hourlyTotal = [];
Location.prototype.generateData = function(){
  for (let i = 0; i <= 13; i++) {
    const randomCustomers = randomBetween(this.minCustomers, this.maxCustomers);
    const randomCookies = Math.round(randomCustomers * this.avgCookies);
    this.total+= randomCookies;
    // 1 am 100 cookies
    this.data.push(randomCookies);
    // first time undefined
    hourlyTotal[i] = hourlyTotal[i] !== undefined ?  hourlyTotal[i] + randomCookies : randomCookies;
  }
}

Location.prototype.render = function() {
  const table =  document.getElementById("table");
  const tr = document.createElement("tr");
  const location = document.createElement("td");
  location.innerText = this.name;
  tr.appendChild(location);
  for (var i = 0; i < this.data.length; i++) {
    const td = document.createElement("td");
    td.innerText = this.data[i];
    tr.appendChild(td);
  }
  const total = document.createElement("td");
  total.innerText = this.total;
  tr.appendChild(total);
  table.appendChild(tr);
}

const Seattle = new Location("Seattle", 23, 65, 6.3);
const Tokyo = new Location("Tokyo", 3, 24, 1.2);
const Dubai = new Location("Dubai", 11, 38, 3.7);
const Paris = new Location("Paris", 20, 38, 2.3);
const Lima = new Location("Lima", 2, 16, 4.6);


function renderHourlyTotal(){
  try {
    const element = document.getElementById("totalsRow");
    element.parentNode.removeChild(element);
  } catch (e) {
    console.log(e);
  }
  const table =  document.getElementById("table");
  const tr = document.createElement("tr");
  tr.id = "totalsRow";
  const location = document.createElement("td");
  location.innerText = "Totals";
  tr.appendChild(location);
  for (let i = 0; i < hourlyTotal.length; i++) {
    const td = document.createElement("td");
    td.innerText = hourlyTotal[i];
    tr.appendChild(td);
  }
  const total = document.createElement("td");
  const totalsSum = eval(hourlyTotal.join('+'));
  total.innerText = totalsSum;
  tr.appendChild(total);
  table.appendChild(tr);
}
renderHourlyTotal();

function addLocation(event){
  event.preventDefault();
  const locationName = event.target.name.value;
  const minCustomers = parseInt(event.target.minCustomers.value, 10);
  const maxCustomers = parseInt(event.target.maxCustomers.value, 10);
  const avgCookies = parseFloat(event.target.avgCookies.value, 10);
  new Location(locationName, minCustomers, maxCustomers, avgCookies);
  renderHourlyTotal();
  alert("success");
}

const addLocationForm = document.getElementById("addLocationForm");
document.addEventListener("submit", addLocation);
