function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function Branch(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.data = [];
    this.total = 0;
}

const hourlyTotal = [];
Branch.prototype.generateData = function(){
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

Branch.prototype.render = function() {
  const table =  document.getElementById("table");
  const tr = document.createElement("tr");
  const location = document.createElement("td");
  location.innerText = this.location;
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

const Seattle = new Branch("Seattle", 23, 65, 6.3);

const Tokyo = new Branch("Tokyo", 3, 24, 1.2);

const Dubai = new Branch("Dubai", 11, 38, 3.7);

const Paris = new Branch("Paris", 20, 38, 2.3);

const Lima = new Branch("Lima", 2, 16, 4.6);


// Seattle
Seattle.generateData();
Seattle.render();

// Tokyo
Tokyo.generateData();
Tokyo.render();

// Dubai
Dubai.generateData();
Dubai.render();

// Paris
Paris.generateData();
Paris.render();

// Lima
Lima.generateData();
Lima.render();

function renderHourlyTotal(){
  const table =  document.getElementById("table");
  const tr = document.createElement("tr");
  const location = document.createElement("td");
  location.innerText = "Totals";
  tr.appendChild(location);
  for (var i = 0; i < hourlyTotal.length; i++) {
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
