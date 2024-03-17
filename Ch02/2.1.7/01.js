const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});

// 다른 코드 들어갈 수 있음

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=> {
        console.log('무조건');
    })