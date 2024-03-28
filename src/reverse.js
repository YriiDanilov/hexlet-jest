export default str => {
    return str.split('').reduce((acc, char) => char + acc , '')
};