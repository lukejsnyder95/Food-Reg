import { householdMember } from './householdMember';

export class Customer {
    static idCounter = 1;

    constructor(public ID,
                public firstName,
                public lastName,
                public phone,
                public email,
                public PID,
                public household:householdMember[] = [],
                public subscriptionID,
                public address) { this.ID = Customer.idCounter += 1 }
  }