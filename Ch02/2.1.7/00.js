// Promise 활용 예

function sendEmail(text, timeout){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(text);
        },timeout)
    })
}

sendEmail("To. 교수님께 \n 안녕하세요.", 1000).then((text) =>
    sendEmail(`${text} oo 올림`, 1000)
).then((text) => {
    console.log(`메일 전송완료! 내용: ${text} `);
});