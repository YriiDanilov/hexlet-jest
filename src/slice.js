export default (coll, begin = 0, end = coll.length) => {
    if (begin < 0) {
        begin = coll.length + begin;
    }
    if (end < 0) {
        end = coll.length + end;
    }
    let result = []
    for (let i = begin; i < end; i += 1){
        if (i >= 0 && i < coll.length) {
            result.push(coll[i])
        }
    }
    return result;
}