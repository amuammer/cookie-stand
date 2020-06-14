function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function generateData(object) {
  for (let i = 6; i <= 19; i++) {
    const randomCustomers = randomBetween(object.minCustomers, object.maxCustomers);
    const randomCookies = Math.round(randomCustomers * object.avgCookies);
    object.total+= randomCookies;
    // 1 am 100 cookies
    object.data.push(`${i <= 12 ? i : i-12}${i < 12 ? "am" : "pm"}: ${randomCookies} cookies`);
  }
}

function render(object) {
  const article =  document.getElementById("article");
  const p = document.createElement("p");
  p.innerText = object.location;
  article.appendChild(p);
  const ul = document.createElement("ul");
  for (var i = 0; i < object.data.length; i++) {
    const li = document.createElement("li");
    li.innerText = object.data[i];
    ul.appendChild(li);
  }
  const total = document.createElement("li");
  total.innerText = "Total:" + object.total;
  ul.appendChild(total);
  article.appendChild(ul);
}

const Seattle = {
  location: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  data: [],
  total: 0,
}

const Tokyo = {
  location: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  data: [],
  total: 0,
}

const Dubai = {
  location: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  data: [],
  total: 0,
}

const Paris = {
  location: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  data: [],
  total: 0,
}

const Lima = {
  location: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  data: [],
  total: 0,
}


// Seattle
generateData(Seattle);
render(Seattle);

// Tokyo
generateData(Tokyo);
render(Tokyo);

// Dubai
generateData(Dubai);
render(Dubai);

// Paris
generateData(Paris);
render(Paris);

// Lima
generateData(Lima);
render(Lima);
