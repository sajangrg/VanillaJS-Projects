// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const btnSave = document.getElementById("btn-input");
const ulEL = document.getElementById("ul-el");
const btnDelete = document.getElementById("btn-delete");

const localsFromLocalStorage = JSON.parse(localStorage.getItem("lead"));
console.log(localsFromLocalStorage);

if(localsFromLocalStorage){
  myLeads = localsFromLocalStorage;
  renderLeads();
}

btnDelete.addEventListener('dblclick', function(){
  localStorage.clear();
  myLeads = [];
  renderLeads();
})

btnSave.addEventListener('click', function() {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("lead", JSON.stringify(myLeads));
  renderLeads();
  // console.log(localStorage.getItem("lead"));
});

// for (let i = 0; i < myLeads.length; i++) {
//     // console.log(myLeads[i]);
//     // ulEL.innerHTML += '<li>' + myLeads[i] + '</li>';
//     const liEl = document.createElement('li');
//     liEl.textContent = myLeads[i];
//     ulEL.append(liEl);
// }

// Performance better
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>
    `;
    // console.log(listItems);
  }
  ulEL.innerHTML = listItems;
}