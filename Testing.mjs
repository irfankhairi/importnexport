class Student {

    constructor (name, matricNo, major){
    this.name = name;
    this.matricNo = matricNo;
    this.major = major;
    }
   
    get Name() {
    return this.name;
    }
   
    set Name(name) {
    this.name = name;
    }
   
    get MatricNo() {
    return this.matricNo;
    }
   
    set MatricNo(matricNo) {
    this.matricNo = matricNo;
    }
   
    get Major() {
    return this.major;
    }
   
    set Major(major) {
    this.major = major;
    }
   
   
    Display = () => {
       console.log(`${this.name}`);
       console.log(`${this.matricNo}`);
       console.log(`${this.major}`);
   }
}

   
   export{Student};