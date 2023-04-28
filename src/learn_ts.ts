function learnts() {

    //Primitive types
    let id: number = 5;
    let company: string = 'Test Ramees';
    let isPublished: boolean = true;

    //no error if we initilize another type since it is any.
    let x: any = 'Hello';
    x = 2;

    let ids: number[] = [1, 2, 3];

    //Give error Type 'string' is not assignable to type 'number'.ts(2322)
    //ids[0]="dddd"

    //Tuple
    let person: [number, string, boolean] = [1, 'ramees', true];

    //tuple array
    let employee: [number, string][];

    employee = [
        [1, 'ramees'],
        [2, 'jaison'],
        [3, 'test']
    ]

    //union
    let pid: string | number;

    //give error Type 'boolean' is not assignable to type 'string | 
    //pid=true;

    //following are valid
    pid = 'dd0'
    pid = 122;

    //Enum

    enum Direction {
        up,
        down,
        left,
        right
    }
    console.log(Direction.left);

    enum Direction1 {
        up = "UP",
        down = "DOWN",
        left = "LEFT",
        right = "RIGHT"
    }
    console.log(Direction1.down);

    //objects

    const user: {
        id: number,
        name: string
    } = {
        id: 1,
        name: 'John'
    }

    //The above type decleration look messy,we can have a different way of assigning object

    type User = {
        id: number,
        name: string
    }

    let myUser: User = {
        id: 0,
        name: ''
    };

    myUser.id = 10;
    myUser.name = 'Jacob';
    console.log(`name is ${myUser.name} and Id is ${myUser.id}`);


    //Type assertion

    let cid: any = 1;

    //let customerId =<number>cid;
    let customerId = cid as number;

    //functions
    //we can define type for function params and return value
    function add(x: number, y: number): number {
        return x + y;
    }

    //Below will give error Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    //add(1,'ddd')

    console.log(`sum is ${add(2, 20)}`);

    //Union as function param
    function log(message: string | number): void {
        console.log(message);
    }

    log('hiii');
    log(1);

    //Interfaces
    //Similar to custom user type
    interface UserInterface {
        id: number
        name: String
    }
    let user2: UserInterface = {
        id: 2,
        name: 'john'
    };

    console.log(user2.id);

    //Type can be used with primitives or unions bt not interface
    type Point = string | number;


    //optional property in interface
    //readonly properties: these poperties cannot be reassigned
    interface UserInterface2 {
        readonly id: number
        name: String,
        age?: number
    }
    //event though we didnt provide ager it is fine since age is optional
    const test: UserInterface2 = {
        id: 5,
        name: '6',
    }

    //Below statement give error : Cannot assign to 'id' because it is a read-only 
    //test.id=5;

    //interface with functions

    interface mathFunc {
        (x: number, y: number): number
    }

    const addition: mathFunc = (x: number, y: number): number => x + y;
    const substraction: mathFunc = (x, y) => x - y;

    console.log(addition(1, 8));
    console.log(substraction(8, 1));

    //classes
    //access modifiers :Public Private and Protected
    class Person {
        private id: number
        name: string
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
            console.log(`name from class:${this.name}`);
        }
        register() {
            return `${this.name} is reguisterd`
        }
    }

    const ramees = new Person(1, 'ramees');
    // access modifiers
    //public by default
    //we can do
    ramees.name = 'ramees';
    console.log(ramees.name)
    console.log(ramees.register());
    //id is private
    //ramees.id=1 will not work;

    // If procteted : it can be accessed in the class or any class extend it


    //Interface in class

    interface Benefit {
        readonly benefitId: number,
        benefitPlanName: string,
        benefitType: string,
        isActive: boolean,
        configure(): string
    }

    class CompanyCar implements Benefit {
        readonly benefitId: number;
        benefitPlanName: string;
        benefitType: string;
        isActive: boolean;
        configure(): string {
            return `${this.benefitPlanName} with ${this.benefitId} is configured.\n Benefit is ${this.isActive}`
        };
        constructor(benefitPlanName: string, isActive: boolean) {
            this.benefitType = "COMPANY_CAR";
            this.benefitId = Math.random();
            this.benefitPlanName = benefitPlanName;
            this.isActive = isActive;
        }



    }
    const ukCompanyCarPlan = new CompanyCar('UK_COMPANY_CAR_PLAN', true);
    console.log(ukCompanyCarPlan.configure());

    //Inheritance //Extends
    class BenefitEnrollment extends CompanyCar {
        enrolmentId: string;
        constructor() {
            super('test', true);
            this.enrolmentId = this.benefitId + this.benefitPlanName;
        }
        enroll(): string {
            return `Enrolled Successfully with Id ${this.enrolmentId}`;
        }
    }

    const myEnrolment = new BenefitEnrollment();
    console.log(myEnrolment.enroll());
//Generics 
function getArraay(items:any[]):any[]{
    return new Array().concat(items);
}

let numArray = getArraay([1,2,3]);
console.log(numArray);

let stringArray = getArraay(['a','b','c',1]); // not gonna complain abt a numer in it 
console.log(stringArray);

function getArrayGen<T>(items:T[]):T[]{
    return new Array().concat(items);
}
let numArray1 = getArrayGen<number>([1,2,3]);
console.log(numArray);
//let stringArray1 = getArrayGen<string>(['a','b','c',1]); //  gonna complain abt a numer in it 
let stringArray1 = getArrayGen<string>(['a','b','c']);
console.log(stringArray1);

}
export const a=1;
export default learnts;