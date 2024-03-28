import _ from 'lodash';

export default (obj, path, value) => {
    return _.set(obj, path, value);
}

