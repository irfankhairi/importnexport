import {Student} from './Testing.mjs';

import readline from 'readline';


const r1 = readline.createInterface({

input: process.stdin,

output: process.stdout

});

r1.question('What is your name: ', (name) => {
    r1.question('What is your matric number: ', (matricNo) => {
        r1.question('What is your major: ' , (major) => {

            //Name(name);
            //Major(major);
            //MatricNo(matricNo);

            let student = new Student (name,matricNo,major);
            console.log(student);

            r1.close();
        
             });
        });  
    });
