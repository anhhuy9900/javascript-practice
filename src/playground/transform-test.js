// // const [a, b, c] = [];
// // console.log('a, b, c: ', a, b, c);

// // const a1 = '';
// // const a2 = null;
// // const a3 = undefined;

// // console.log('a1: ', !a1);
// // console.log('a2: ', !a2);
// // console.log('a3: ', !a3);

// // const b1 = [null, 'adsa', 'asda']
// // console.log(!b1.every(b => b))

// // const results = [
// //   {
// //     firstPrize: '941395',
// //     frontDigits: [ '056', '330' ],
// //     afterDigits: [ '375', '587' ],
// //     down: '234'
// //   }
// // ];

// // const checkFunc = (results) => {
// //   if (results.length) {
// //     for (const re of results) {
// //       if (!re.firstPrize || !re.down || !re.frontDigits.every(f => f) || !re.afterDigits.every(f => f)) {
// //         return false;
// //       }
// //     }
// //   }

// //   return true;
// // }

// // console.log('checkFunc: ', checkFunc(results))


// // const res = {
// //   code: '0'
// // };
// // const env = 'stag';
// // const isError = !(res.code === '0' || env === 'local');

// // console.log('test compare: ', isError);


// // // const arr =  [
// // //   {
// // //       "number": "000",
// // //       "totalBet": 0,
// // //       "winloss": 0,
// // //       "status": 0
// // //   },
// // //   {
// // //       "number": "001,010,100",
// // //       "totalBet": 0,
// // //       "winloss": 0,
// // //       "status": 0
// // //   },
// // //   {
// // //       "number": "002,020,200",
// // //       "totalBet": 0,
// // //       "winloss": 0,
// // //       "status": 0
// // //   },
// // //   {
// // //       "number": "003,030,300",
// // //       "totalBet": 0,
// // //       "winloss": 0,
// // //       "status": 0
// // //   },
// // //   {
// // //       "number": "004,040,400",
// // //       "totalBet": 0,
// // //       "winloss": 0,
// // //       "status": 0
// // //   }
// // // ];

// // // const slice = arr.slice(0, 1);
// // // console.log(slice);

// // console.log(Number.isNaN(Number('')))


// // const arr = [1,2 ,3, 4, 5, 6, 7, 8]
// // // const nArr= arr.splice(0, 3);
// // // console.log(arr);
// // // console.log(nArr);

// // console.log(Object.entries(arr))

// // for (let i of Object.entries(arr)) {
// //   const [key, value ] = i;
// //   if (value === 2) {
// //       break;
// //   }
// //   console.log('i: ', i);
// // }

// // arr.forEach(el => {
// //   if (el === 2) {
// //       return;
// //   }
// //   console.log('el: ', el);
// // })

// // console.log(1111);


// // const a = 0;
// // console.log(a - 2 || 0);


// function verifyResultValid(results) {
//     if (results.length) {
//       for (const re of results) {
//         const { firstPrize, down } = re;
//         if (
//           !firstPrize ||
//           isNaN(Number(firstPrize)) ||
//           !down ||
//           isNaN(Number(down)) ||
//           !re.frontDigits.every((f) => f && !isNaN(Number(f))) ||
//           !re.afterDigits.every((f) => f && !isNaN(Number(f)))
//         ) {
//           return false;
//         }
//       }
//     }

//     return true;
// }

// const results = [{
//     "firstPrize": "941395",
//     "frontDigits": [
//         "056",
//         "330"
//     ],
//     "afterDigits": [
//         "375",
//         "587"
//     ],
//     "down": "43"
// }]
// console.log(verifyResultValid(results))

const cancelReasons = [
    {
        "lang": "EN",
        "reason": "Hoang, He want to cancel this bet session"
    },
    {
        "lang": "TH",
        "reason": "ซินเฉา"
    }
]
const cancelReason = cancelReasons.map(res => Object.values(res).join('|')).join(', ')
console.log(cancelReason);
