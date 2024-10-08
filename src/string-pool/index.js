class HolderData {
    constructor () {
        this.arr = {};
    }

    add(k, s) {
        this.arr[k] = s;
    }
}


const holder = new HolderData();

for (let i = 0; i < 2000000; i++) {
    holder.add(i, 'A');
}

console.log('Done');

setTimeout(() => {
    console.log(holder);
}, 999999999)