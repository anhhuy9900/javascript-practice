const getPricingProduct = (priceNew) => {
    let totalPrice = priceNew + 100;
    return (needPriceCal) => {
        const price = totalPrice + needPriceCal;
        console.log('price => ', price);
        return price / 2;
    }
}

// const cal = getPricingProduct(100);
// console.log(cal(200));
// console.log(cal(300));

const getName = (name) => {
    const getFirstName = (name) => {
        return name.split(' ')[0];
    }
    const getLastName = (name) => {
        return name.split(' ')[1];
    }
    const getFullName = (name) => {
        return getFirstName(name) + ' ' + getLastName(name);
    }
    return (type) => {
        switch (type) {
            case 'first':
                return getFirstName(name);
            case 'last':
                return getLastName(name);
            case 'full':
                return getFullName(name);
            default:
                return 'Invalid type';
        }
    }
}

console.log(getName('John Doe')('first'));
console.log(getName('John Doe')('last'));
console.log(getName('John Doe')('full'));