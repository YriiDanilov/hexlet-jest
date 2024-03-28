export const fill = (coll, char, begin = 0, end = coll.length) => {
    for (let i = 0; i < coll.length; i += 1) {
        if ( coll[i] > begin && coll[i] <= end) {
            coll[i] = char;
        } else if (begin === 0 && end === 0) {
            coll[i] = char;
        } else {
            coll[i];
        }
    }
    return coll;
}

const arr = [1, 2, 3, 4];

console.log(fill(arr, '*',4));