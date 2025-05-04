async function outer(){
    console.log(1)

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(2)
            resolve()
        },2000)
        //resolve()
    })

    console.log(3)
}
// outer()


const getOne = (someone = {}) => {
    return new Promise((resolve, reject) => {
        if(Object.keys(someone).length > 0) {
            resolve(someone);
        } else {
            reject(Error('No data found'));
        }
    })
}

// const one = await getOne({ name: 'huy', age: 32 });
const getInfo = async () => {
    const newOne = await getOne({ name: 'huy', age: 32 });
    console.log('newOne => ', newOne);
    return newOne;
}
/**
 * const info = await getInfo();
 * ! This function run on browser it will be show an error
 * ! Uncaught SyntaxError:  await is only valid in async function
 * ! the keyword await only valid in async function and inside async function
 */

// console.log(getInfo().then(res => res));

async function getNewOne() {
    console.log('getNewOne');
    return 'getNewOne'
}
// const newOne = await getNewOne();
// console.log('newOne => ', newOne);

const childAsyncCase = () => {
    return Promise.resolve(1);
}
const childAsyncCaseErr = () => {
    return Promise.reject(Error('Error'));
}
const asyncCase = async () => {
    console.log('childAsyncCase => ', await childAsyncCase());
    console.log('childAsyncCaseErr => ', await childAsyncCaseErr());
}
// asyncCase();


const asyncCase2 = async() => {
    const res = await Promise.resolve(2);
    console.log('asyncCase2 => ', res)
    return res;
}
// asyncCase2();

const asyncCase3 = async(number) => {
    const res = await new Promise((resolve, reject) => {
        if(typeof number === 'number') {
            resolve(number);
        } else {
            reject(Error('Error'));
        }
    });
    console.log("🚀 ~ asyncCase3 ~ res", res);
    return res;
}
// console.log('asyncCase3 => ', asyncCase3(1));

const asyncCase4 = async() => {
    const getNameAsync = (name) => {
        return new Promise((resolve, reject) => {
            if (name) {
                resolve(name)
            } else {
                reject(Error('Error'))
            }
        });
    }
    const getName = await getNameAsync().catch(err => console.error('Have error for getNameAsync'));
    console.log('asyncCase4 getName => ', getName)
}
asyncCase4();