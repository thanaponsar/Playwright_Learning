export function printAge(age) {
    console.log(age)
}

export class CustomerDetails {
    /**
     * This method will print the first name
     * @param {*} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * This method will print the last name
     * @param {*} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()