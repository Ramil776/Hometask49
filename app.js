class Transaction {
    constructor(fromClient, toClient, amount) {
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;
        this.commission = 0.05; 
    }

    calculateCommission() {
        return this.amount * this.commission;
    }
}


let transaction = new Transaction("Ibrahim", "Qurban", 600);
console.log("Komissiya məbləği:", transaction.calculateCommission());
