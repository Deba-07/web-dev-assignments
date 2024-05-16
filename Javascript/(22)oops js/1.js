class bankAccount{
    constructor(Accountholder, initialbalance){
        this.name = Accountholder;
        this.balance = initialbalance;
    }
    checkBalance(){
        console.log(`Account balance for ${this.name} is Rs.${this.balance}`);
    }
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance: Rs. ${this.balance}`)
        }
        else{
            console.log("Invalid deposit please enter a positive amount")
        }
    }
    withdraw(amount){
        if(amount > 0){
            if(amount <= this.balance){
                this.balance -= amount;
                console.log(`Withdrawn Rs. ${amount} New balance: Rs.${this.balance}`);
            }
            else{
                console.log("Insufficient fund for withdrawal");
            }
        }
        else{
            console.log("Invalid amount please enter a positive amount");
        }
    }
}
const myAccount = new bankAccount("Mithun S", 1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalance(); 