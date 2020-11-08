let account = {
    name: "Danica",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let sum = 0;
      this.expenses.forEach((item)=>{
        sum+=item.amount;
      })
      return `${sum}`;
    }
};
account.addExpenses('Beli Skin Care', 800000);
account.addExpenses('Ongkos', 50000);
console.log(`Total pengeluaran ${account.name} adalah Rp. ${account.getAccountSummary()}`);