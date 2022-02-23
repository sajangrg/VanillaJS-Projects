// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const btnInput = document.getElementById("btn-input");
const ulEL = document.getElementById("ul-el");
const btnDelete = document.getElementById("btn-delete");
const btnTab = document.getElementById("btn-save");

const localsFromLocalStorage = JSON.parse(localStorage.getItem("lead"));
// console.log(localsFromLocalStorage);

if(localsFromLocalStorage){
  myLeads = localsFromLocalStorage
  renderLeads(myLeads)
}

btnTab.addEventListener('click', function(){
  chrome.tabs.query({
      active: true,
      currentWindow: true
  }, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('lead', JSON.stringify(myLeads))
    renderLeads(myLeads);
  });
})


btnDelete.addEventListener('dblclick', function(){
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
})

btnInput.addEventListener('click', function() {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("lead", JSON.stringify(myLeads));
  renderLeads(myLeads);
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
function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
      </li>
    `;
    // console.log(listItems);
  }
  ulEL.innerHTML = listItems;
}