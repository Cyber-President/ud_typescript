/*
abstract class Department {
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return {name: name};
    }

    constructor(protected readonly id: string, public name: string) {
    }

    // メソッド
    abstract describe(this: Department):void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log("IT部門-ID: " + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を入力してください');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };

    describe() {
        console.log("会計部門-ID: " + this.id);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1);


const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = '通期会計レポート';
accounting.addReport('Something');
console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printEmployeeInformation();

 */
