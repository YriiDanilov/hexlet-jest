import _ from 'lodash'; 

export default (arr, ...num) => {
    return _.without(arr, ...num);
}


