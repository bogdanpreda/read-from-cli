
const readLine = require('readline');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('\nDo you want to find a secret?(yes/no) \n', (input) => {
    console.log(`\nThe secret is that you've been typing '${input}'\n`);

    switch(input) {
        case 'yes':
            console.log(`Here's your secret`);
            break;
        case 'no':
            console.log(`You don't know that you lose`);
            break;
        default:
            console.log(`The inserted option is invalid`);
    } 
    r1.close();
    });

r1.on('close', () => {
    console.log('\nHave a great day!');
});