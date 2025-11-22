/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */
// -------------------------------
// Constants
// -------------------------------
const NAMES = ["Alice", "Bob", "Carlos", "Diana", "Evan", "Farah", "Grace", "Henry"];
const OCCUPATIONS = ["Writer", "Designer", "Developer", "Artist", "Marketer", "Consultant"];
const MIN_RATE = 30;
const MAX_RATE = 120;
const NUM_FREELANCERS = 8;

// -------------------------------
// 1. Function that returns a freelancer object
// -------------------------------
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE;

  return { name, occupation, rate };
}

// -------------------------------
// 2. Initialize state variable with NUM_FREELANCERS objects
// -------------------------------
let freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

// -------------------------------
// 3. Function that returns average rate
// -------------------------------
function getAverageRate() {
  let total = 0;
  for (const f of freelancers) {
    total += f.rate;
  }
  return (total / freelancers.length).toFixed(2);
}

// -------------------------------
// 4. Initialize state variable for average rate
// -------------------------------
let averageRate = getAverageRate();

// -------------------------------
// 5. Component: Single freelancer row
// -------------------------------
function FreelancerRow(freelancer) {
  const tr = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = freelancer.name;

  const jobTd = document.createElement("td");
  jobTd.textContent = freelancer.occupation;

  const rateTd = document.createElement("td");
  rateTd.textContent = `$${freelancer.rate}/hr`;

  tr.appendChild(nameTd);
  tr.appendChild(jobTd);
  tr.appendChild(rateTd);

  return tr;
}

// -------------------------------
// 6. Component: List of freelancer rows
// -------------------------------
function FreelancerRows() {
  const tbody = document.createElement("tbody");

  for (const f of freelancers) {
    tbody.appendChild(FreelancerRow(f));
  }

  return tbody;
}

// -------------------------------
// 7. Component: Average rate display
// -------------------------------
function AverageRate() {
  const p = document.createElement("p");
  p.textContent = `Average Rate: $${averageRate}/hr`;
  return p;
}

// -------------------------------
// 8. Render the application
// -------------------------------
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="averageRate"></div>

    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;

  // Replace real DOM elements with generated components
  $app.querySelector("#averageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

// Mount the app
render();