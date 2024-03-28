export const indexOf = (coll, value, fromIndex = 0) => {
    if (fromIndex < 0) {
        fromIndex = coll.length + fromIndex;
    }
    for (let i = fromIndex; i < coll.length; i += 1) {
        if (coll[i] === value) {
            return i;
        }
    };
    return - 1;
}
