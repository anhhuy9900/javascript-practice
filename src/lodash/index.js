/* mapping between service id and service path (used require/import) */
const _ = require('lodash');

// const AObj = {
//   logType: 'WalletTransfer',
//   service: 'wallet-integrate',
//   category: 'wallet',
//   timeUTC: 1702959670771,
//   version: 'v2',
//   logInfo: {
//     cId: '8a9ea6b1-2af1-4eba-a3d5-6e3b5ae6e15f-0',
//     gamemsRequest: {
//       uid: 'dary_duser32',
//       transaction_id: 'ab736a1c-da95-4c4e-8efa-ca472ebaa638',
//       reference_id: '',
//       amount: 0,
//       action: 'WIN',
//       option: '',
//       wallet_type: 0,
//       data: {
//           "game_id": "kts_9904",
//           "game_name": "TronLegacy:TronLegacy",
//           "game_round_id": "d8a66bdc-9b31-40d1-a908-4c837ce79bf7",
//           "game_ticket_id": "d8a66bdc-9b31-40d1-a908-4c837ce79bf7",
//           "game_ticket_status": "Lose",
//           "game_your_bet": "Choi game TronLegacy:TronLegacy, bet 1,000, thang 0",
//           "game_stake": 1000,
//           "game_winlost": -1000,
//           "game_gain": 0,
//           "game_tax": 0,
//           "bet_type_id": 1000,
//           "game_reserve": 0,
//           "net_turnover": 1000,
//           "t": 1702959670768,
//           "ip": "188.166.209.78",
//           gamemsResponse: {
//             agency_transaction_id: 1,
//             amount: 188534.914,
//           },
//       },
//     },
//     gamemsResponse: {
//       agency_transaction_id: 1,
//       amount: 188534.914,
//       amount_after: 188534.914,
//       amount_before: 188534.914,
//       error_code: 200,
//       message: 'Successfully',
//       req_amount: 0,
//       status: 'OK',
//       time: 1702959670769,
//       transaction_id: 'ab736a1c-da95-4c4e-8efa-ca472ebaa638'
//     },
//     action: 'WIN',
//     request: {
//       userId: 'dary_duser32',
//       userAgent: 'client1',
//       money: 0,
//       transactionId: 'ab736a1c-da95-4c4e-8efa-ca472ebaa638',
//       referenceId: '',
//       data: [Object],
//       walletType: 'MAIN_BALANCE',
//       actionOption: '',
//       gameBetMoney: 0,
//       ip: '188.166.209.78'
//     },
//     response: {
//       transactionId: 'ab736a1c-da95-4c4e-8efa-ca472ebaa638',
//       amount: 188534.914,
//       code: 0,
//       gamemsCode: 200,
//       message: 'Successfully',
//       time: 1702959670769,
//       userAgent: 'client1',
//       walletType: 'MAIN_BALANCE',
//       userId: 'dary_duser32',
//       ticketId: 'd8a66bdc-9b31-40d1-a908-4c837ce79bf7'
//     },
//     timeExe: 3,
//     timeRequest: 3,
//     status: 'success',
//     bulkSize: 1
//   },
//   userId: 'dary_duser32',
//   displayName: 'Duser32',
//   userBrand: 'dary',
//   userType: 'user'
// };

// function getFields(object, fields = []) {
//   console.log('🚀 ---------------------------------------------------🚀');
//   console.log('🚀 ~ file: utils.js:4 ~ getFields ~ object:', object);
//   console.log('🚀 ~ file: utils.js:4 ~ getFields ~ fields:', fields);
//   console.log('🚀 ---------------------------------------------------🚀');
//   if (!Object.values(object).length) return object;

//   // const getNestedData = (obj, keys) => {
//   //   const split = keys.split('.');
//   //   split.forEach((value) => {
//   //     nestedObj[value] = obj[value];
//   //     if (value.indexOf('.') > 0) {
//   //       getNestedData(obj, value);
//   //     }
//   //   });
//   // };

//   const nestedObj = {};
//   fields.forEach((key) => {
//     if (key.indexOf('.') > 0) {
//       const split = key.split('.')
//       console.log(split.splice(0, 1).join('.'))

//       nestedObj[split[0]] = {
//         //...nestedObj[split[0]],
//         ...getFields(object[split[0]], [split.splice(0, 1).join('.')])
//       }
//     } else {
//       nestedObj[key] = object[key];
//     }
//   });

//   console.log('🚀 ~ file: utils.js:4 ~ getFields ~ nestedObj:', nestedObj);

//   return nestedObj;
// }
// console.log(1);
// console.log('DATA ===> ', getFields(AObj.logInfo.gamemsRequest, ['data.gamemsResponse.agency_transaction_id', 'data.gamemsResponse.amount']))

// console.log(_.pick(AObj, ['userId', 'logInfo.gamemsRequest.uid']))

// const arr22 = [
//   {
//     name: 'test',
//     age: 1,
//     obj: [
//       {
//         num: 1
//       },
//       {
//         num: 2
//       }
//     ]
//   }
// ];

// function transformerData(data, fields = []) {
//   if (Array.isArray(data)) {
//     return data.map((el) => {
//       const els = _.pick(el, fields);
//       fields.forEach(f => {
//         if (f.indexOf('.') >= 0) {

//         }
//       })
//     });
//   }

//   return _.pick(data, fields);
// }
// console.log('arr22: ', _.pick(arr22[0], ['name']));

// const obj = {
//   name: 'test',
//   age: 1
// }

// const obj1 = null
// console.log(_.omit(obj1, ['age']))


// const arr1 = [
//   ["02", "59"],
//   ["16", "00"],
//   ["21", "00"],
//   ["21", "00"],
//   ["23", "00"],
//   ["23", "00"]
// ]
// console.log(_.uniqBy(arr1, obj => obj[0]))

// const arr2 = [
//   ["02", "59"],
//   ["16", "00"],
//   ["21", "00"],
//   ["19", "15"],
//   ["19", "03"],
//   ["23", "00"],
//   ["22", "59"]
// ]
// arr2.sort(undefined)
// console.log('arr2.sort: ', arr2)

// const result = [
//   {
//       "firstPrize": "123456",
//       "frontDigits": [
//           "864",
//           "432"
//       ],
//       "afterDigits": [
//           "279",
//           "532"
//       ],
//       "down": "44"
//   },
//   {
//       "firstPrize": "123456",
//       "frontDigits": [
//           "864",
//           "432"
//       ],
//       "afterDigits": [
//           "279",
//           "532"
//       ],
//       "down": "44"
//   },
//   {
//       "firstPrize": "123456",
//       "frontDigits": [
//           "864",
//           "432"
//       ],
//       "afterDigits": [
//           "279",
//           "532"
//       ],
//       "down": "44"
//   }
// ];

// console.log('result: ', _.uniqWith(result, _.isEqual));

// console.log(Number('000'));

// const table = [
//   {
//     table: 1,
//     value: [
//       ['10', '00'],
//       ['12', '00']
//     ]
//   },
//   {
//     table: 2,
//     value: 20
//   },
//   {
//     table: 3,
//     value: 40
//   }
// ]
// const table2 = [
//   {
//     table: 1,
//     value: [
//       ['10', '00'],
//       ['12', '00'],
//       ['13', '00']
//     ]
//   },
//   {
//     table: 2,
//     value: 23
//   },
//   {
//     table: 3,
//     value: 33
//   }
// ]

// console.log('difference: ', _.differenceWith(table2, table, _.isEqual));

// console.log(_.uniqWith({}, _.isEqual).length === 1)


// const resDara1 = [
//   {
//     firstPrize: '607063',
//     frontDigits: [ '123', '321' ],
//     afterDigits: [ '591', '544' ],
//     down: '09'
//   },
//   {
//     firstPrize: '607063',
//     frontDigits: [ '123', '321' ],
//     afterDigits: [ '591', '544' ],
//     down: '09'
//   },
//   {
//     firstPrize: '607063',
//     frontDigits: [ '123', '321' ],
//     afterDigits: [ '591', '544' ],
//     down: '09'
//   }
// ];

// // const a = ['123', '321'];
// // const b = ['321', '123'];

// let resA = [
//   // ['321', '123'], ['591', '544']
// ]


// for(let i = 0; i < 3; i ++) {
//   const resDara  = resDara1[i];
//   if (i === 0) {
//     resA.push(resDara1[i].frontDigits, resDara1[i].afterDigits);
//     console.log('resA: ', resA);
//   }

//   const frontDigits = resDara1[i].frontDigits.sort((a, b) => a.localeCompare(b));
//   const afterDigits = resDara1[i].afterDigits.sort((a, b) => a.localeCompare(b));
//   console.log('frontDigits: ', frontDigits);
//   console.log('afterDigits: ', afterDigits);

//   const isCheck = resA.every((el, k) => {
//     const nEl = el.sort((a, b) => a.localeCompare(b));
//     console.log('nEl: ', nEl);
//     console.log('k: ', k);

//     return (k === 0) ? _.isEqual(nEl, frontDigits) : _.isEqual(nEl, afterDigits)
//   });

//   console.log('isCheck: ', isCheck)
// }

// console.log(_.range(6, 18))

// function containsOnlyLettersOrNumbers(str) {
//   return /^[a-zA-Z0-9]+$/.test(str);
// }

// // Example usage
// console.log(containsOnlyLettersOrNumbers('abc123')); // true
// console.log(containsOnlyLettersOrNumbers('abc$123')); // false
// console.log(containsOnlyLettersOrNumbers('abc123!')); // false
// console.log(containsOnlyLettersOrNumbers('abc123')); // false


const result = [
    {
        gateType: 0,
        currency: 1,
        totalWinLoss: 1000
    },
    {
        gateType: 1,
        currency: 1,
        totalWinLoss: 2000
    },
    {
        gateType: 1,
        currency: 3,
        totalWinLoss: 29000
    }
]

// const nRes = _.groupBy(result, 'currency')
// console.log('nRes', nRes);
// for (const key in nRes) {
// console.log('nRes -> key', key);
// }

console.log('result: ', result.map(el => el.totalWinLoss))
