export const get = (coll, index, defaultValue = null) => {
    if ( index < coll.length ) {
        return coll[index]
    } else {
        return defaultValue;
    }
}