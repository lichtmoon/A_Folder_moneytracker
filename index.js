const cash = document.getElementById("cash");
const bankCard = document.getElementById("bank-card");
const currentBalance = document.getElementById("current-balance");
const gcashCard = document.getElementById("gcash-card");
const popupContainer = document.getElementById("popup-container");

const cancelBtn = document.getElementById("cancel-btn");

const saveBtn = document.getElementById("save-btn")

const editBalance = document.getElementById("edit-balance");

const gcashBox = document.getElementById("gcash-box");

const accountName = document.getElementById("account-name");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount")
const historyBox = document.getElementById("history-box");

const currentBalanceHistory = document.getElementById("current-balance-history")
const descriptionHistory = document.getElementById("description-history");
const expenseHistory = document.getElementById("expense-history");
const updatedBalanceHistory = document.getElementById("updated-balance-history")
const accountNameHistory = document.getElementById("account-name-history")

const cards = document.querySelectorAll(".bank-card .card");
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert-2")

const historyBody = document.getElementById("history-body");
const historyBtn = document.getElementById("history-btn");
const historyContainer = document.getElementById("history-container");
const moneyContainer = document.getElementById("money-container");

const settingsBtn = document.getElementById("settings-btn");
const removeHistory = document.getElementById("remove-history")
const popupRemove = document.getElementById("popup-remove");
const howBtn = document.getElementById("how-btn");
const howModal = document.querySelector(".how-modal");
const closeHow = document.getElementById("close-how");
const getStartedBtn = document.getElementById("get-started");
const getStartedContainer = document.getElementById("get-started-container");
const clearHistory = document.getElementById("clear-history");
const resetAllData = document.getElementById("reset-all-data")

const sidebarSetting = document.getElementById("settings-sidebar");

const confirmPop = document.getElementById("confirm-popup")
const cancelDeleteConfirmation = document.querySelector(".cancel-delete-confirmation");
const deleteConfirmation = document.querySelector(".delete-confirmation");
const deleteDataConfirmation = document.querySelector(".delete-data-confirmation")


 const clearHistoryH2 = document.querySelector(".clear-history-h2")
  const deleteHistory = document.querySelector(".delete-history")
  const clearAllData = document.querySelector(".clear-all-data");
  const deleteAllData = document.querySelector(".delete-all-data")

let chosenAccount;
let totalCash;
let cardBalanceBox;

let accounts = [
  {
    name: "Gcash",
    balance: 0.00
  },
  {
    name: "maya",
    balance: 0.00
  },
  {
    name: "GOtyme",
    balance: 0.00
  },
  {
    name: "MariBank",
    balance: 0.00
  },
  {
    name: "tonik",
    balance: 0.00
  },
  {
    name: "Cash",
    balance: 0.00
  },
]


const savedAccounts = localStorage.getItem("accounts");

if(savedAccounts) {
  const savedAccountsData = JSON.parse(savedAccounts);
  accounts = savedAccountsData
}

let transactions = [];

const accountColors = {
  Gcash: "#2107b2",
  maya: "rgb(13, 151, 98)",
  GOtyme: "rgb(75, 217, 227)",
  MariBank: "rgb(244, 71, 2)",
  tonik: "rgb(102, 5, 239)",
  Cash: "green"
}

const savedTransactions = localStorage.getItem("transactions")

if(savedTransactions) {
  const savedTransactionsData = JSON.parse(savedTransactions);
  transactions = savedTransactionsData
}

historyBody.textContent = "";

transactions.forEach((transaction) => {
    cashHistory(transaction);
}) 

 updatedCardBalances();
updateTotalCash(); 


console.log("saved", accounts);
console.log(accounts);
console.log(accounts[0]);
console.log(accounts[5]);
console.log(accounts[0].balance)
console.log(accounts[0].name)

/* 
localStorage.removeItem("accounts");
localStorage.removeItem("transactions"); */


  


function saveAccounts() {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions))
}


 

function updatedCardBalances() {
 cards.forEach((card) => {
  const accountName = card.dataset.account;

  const account = accounts.find((account) => {
    return account.name === accountName;
  })

  cardBalanceBox = card.querySelector(".card-balance-box");
  cardBalanceBox.textContent = `₱${account.balance}`

 })

}



function updateTotalCash() {
   totalCash = accounts.reduce((sum, total)=> {
    return sum + total.balance;
  }, 0);

  cash.textContent = `₱${totalCash}`;


}




function cashHistory(transaction) {

  const row = document.createElement("tr");

  const  accountNameHistory = document.createElement("td");
  accountNameHistory.textContent = transaction.account;
  const color = accountColors[transaction.account];
  accountNameHistory.style.color = color;

  const currentBalanceHistory = document.createElement("td")
  currentBalanceHistory.textContent = ` ₱${transaction.currentBalance}`

  const description = document.createElement("td");
  description.textContent = transaction.description;

  const expenseHistory = document.createElement("td");
  expenseHistory.textContent = `-₱${transaction.expense}`

  const updatedBalanceHistory = document.createElement("td");
  updatedBalanceHistory.textContent = ` ₱${transaction.updatedBalance}`

 

  row.appendChild(accountNameHistory);
  row.appendChild(currentBalanceHistory);
  row.appendChild(description);
  row.appendChild(expenseHistory);
  row.appendChild(updatedBalanceHistory);
  historyBody.appendChild(row)


/* accountNameHistory.textContent = accountName.textContent;

currentBalanceHistory.textContent = `Current balance: ₱${currentBalance.value}`
   
descriptionHistory.textContent = `Descsription: ${descriptionInput.value}`

expenseHistory.textContent = `Expense: -₱${amountInput.value}`
 
 updatedBalanceHistory.textContent = `Updated Balance: ₱${chosenAccount.balance}` 
 */

}





/* gcashCard.addEventListener("click", ()=> {
  console.log("clicked");

  const cardBalanceBox = gcashCard.querySelector(".card-balance-box");
  cardBalanceBox.textContent =` ₱${chosenAccount.balance}`


  popupContainer.classList.add("show");
  currentBalance.disabled = true;

   chosenAccount = accounts.find((account) => account.name === "Gcash");
  console.log(chosenAccount);

   const chosenBalance = chosenAccount.balance;
   currentBalance.value = chosenBalance;
   accountName.textContent = chosenAccount.name;
   accountName.style.color = "#2a0dd0";
}) */




  currentBalance.addEventListener("input", ()=> {
       if(currentBalance.value === "") {
        alert2.textContent = "Empty!"
        alert2.style.color = "red";
         editBalance.disabled = true;
        return;
       }
        if(Number(currentBalance.value) < 0) {
         alert2.textContent = "negative balance is not allowed!"
         alert2.style.color = "red";
         editBalance.disabled = true;
        return;
       }
       else {
        alert2.textContent = "";
        editBalance.disabled = false;
       }


  })


   amountInput.addEventListener("input", ()=> {

      if(amountInput.value === "") {
        alert.textContent = "empty!"
        alert.style.color = "red";
         saveBtn.disabled = true;
        return
      } else if(Number(amountInput.value) === 0) {
       
        alert.textContent = "expense must be greater than 0!";
        alert.style.color = "red"
        saveBtn.disabled = true;
         console.log("zero")
        return;
      }  else {
        saveBtn.disabled = false;
        alert.textContent="";
      }

    if(Number(amountInput.value) < 0) {
      alert.textContent = "negative balance is not allowed!"
      alert.style.color = "red"
      saveBtn.disabled = true;
       return;
    }
    if(Number(currentBalance.value)  < Number(amountInput.value) ) {
       alert.textContent = "expense is too large than balance!";
       alert.style.color = "red"
       saveBtn.disabled = true;
       return;
    } 
    else {
      saveBtn.disabled = false;
      alert.textContent="";
    }
   })



editBalance.addEventListener("click", ()=> {
  currentBalance.disabled = false;
})


saveBtn.addEventListener("click", ()=> {

  chosenAccount.balance = Number(currentBalance.value);
  saveAccounts();
  cardBalanceBox.textContent = `₱${Number(currentBalance.value)}`;
  popupContainer.classList.remove("show")
  updateTotalCash();

  if(amountInput.value > 0) {
   const amount = chosenAccount.balance - Number(amountInput.value);
   chosenAccount.balance = amount;

   saveAccounts();
   
   const transaction = {
  account: accountName.textContent,
  currentBalance: Number(currentBalance.value),
  description: descriptionInput.value.toUpperCase(),
  expense: Number(amountInput.value),
   updatedBalance: chosenAccount.balance

};

transactions.push(transaction);
  saveTransactions();

console.log("transaction",transactions)
   cardBalanceBox.textContent = `₱${chosenAccount.balance}`;
    updateTotalCash();
    cashHistory(transaction)
  };
  

   
    

})


cancelBtn.addEventListener("click", ()=> {
    popupContainer.classList.remove("show");
    currentBalance.textContent = "";
})



cards.forEach((card) => {
  card.addEventListener('click', ()=> {
   descriptionInput.value ="";
    amountInput.value ="";
    saveBtn.disabled = false;
    alert.textContent = "";
    alert2.textContent = "";

    const selectedAccountName = card.dataset.account;
    console.log(selectedAccountName);

    const findAccount = accounts.find((account) => {
      return account.name === selectedAccountName;
    });

    chosenAccount = findAccount;
    currentBalance.value = chosenAccount.balance;
    accountName.textContent = chosenAccount.name;
    const color = accountColors[accountName.textContent];
    accountName.style.color = color;


    console.log("Chosen Account:", chosenAccount);

    cardBalanceBox = card.querySelector(".card-balance-box")
  cardBalanceBox.textContent = `₱${chosenAccount.balance}`
  console.log("balance box:", cardBalanceBox);

  popupContainer.classList.add("show");
  currentBalance.disabled = true;
  })


})

historyBtn.addEventListener("click", ()=> {
  console.log("clicked history")
  historyContainer.classList.add("show");
  moneyContainer.classList.remove("show")
});

settingsBtn.addEventListener("click", ()=> {
  console.log("settings clicked")
  sidebarSetting.classList.toggle("show")
})

removeHistory.addEventListener("click", ()=> {
  console.log("history-remove");
  historyContainer.classList.remove("show");
  moneyContainer.classList.add("show");

})




function popupRemoval() {
   popupContainer.classList.remove("show");
    currentBalance.textContent = "";
}

popupRemove.addEventListener("click", ()=> {
    popupRemoval();
});


cancelBtn.addEventListener("click", ()=> {
    popupRemoval();
   
})

howBtn.addEventListener("click", ()=> {
  howModal.classList.add("show")
})

closeHow.addEventListener("click", ()=> {
  howModal.classList.remove("show")
})

getStartedBtn.addEventListener("click", ()=> {
  moneyContainer.classList.add("show");
  getStartedContainer.classList.add("hide")
})


clearHistory.addEventListener("click", ()=> {
    confirmPop.classList.add("show");
    clearHistoryH2.textContent = "Clear History?";
    clearHistoryH2.style.color = "red";
    deleteHistory.textContent = "This will delete all transaction history.";
})


   deleteConfirmation.addEventListener("click", ()=> {
      localStorage.removeItem("transactions");
      transactions = [];
      historyBody.textContent = "";
      confirmPop.classList.remove("show");
      sidebarSetting.classList.remove("show")
      
  }) 

  cancelDeleteConfirmation.addEventListener("click", ()=>{
     console.log("cancel")
      confirmPop.classList.remove("show");
      sidebarSetting.classList.remove("show")
     
  })

  resetAllData.addEventListener("click", ()=> {
    confirmPop.classList.add("show");
    clearAllData.textContent = "Delete all saved data?"
    clearAllData.style.color = "yellow"
    deleteAllData.textContent = "This will delete all your data";
}) 


deleteDataConfirmation.addEventListener("click", ()=> {
  localStorage.removeItem("transactions");
  localStorage.removeItem("accounts");
  transactions = [];
  historyBody.textContent = "";

   accounts = accounts.map((account)=> {
    return {
     name:account.name,
     balance: 0
    }
  })
  updatedCardBalances();
  updateTotalCash();
})
