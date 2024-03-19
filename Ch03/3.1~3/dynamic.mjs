// 불가능(오류)
// const a = false;
// if(a) {
//     import './func.mjs';
// }
//
// console.log('성공');

// 해결
const a = true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}
