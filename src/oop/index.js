class Customer {
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber =customerNumber;
    }
}

let customer = new Customer(1,"12345");
//prototyping
customer.name = "Murat Kurtboğan";
Customer.bisey = "birşey";

console.log(customer.name);
console.log(Customer.bisey);


class individualCustomer extends Customer{
    constructor(firstname,id,customerNumber){
        super(id,customerNumber)
        this.firstname = firstname;
    }
};

class corporateCustomer extends Customer {
    constructor(companyName,id,customerNumber){
        super(id,customerNumber);
        this.companyName = companyName;

    }
}