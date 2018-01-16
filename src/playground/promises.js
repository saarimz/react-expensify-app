const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
    }, 1500);
});

console.log('before')

promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log('Error!')
});

console.log('after');