setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마아아아!!!');
    } catch (err) {
        console.error(err);
    }
}, 1000);
