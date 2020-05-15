const COUNTRY = 'IN';

const CURRENCY = {
    US: '$',
    IN: '₹'
};
const getCurrency = () => {
    return CURRENCY[COUNTRY];
}

export { getCurrency };