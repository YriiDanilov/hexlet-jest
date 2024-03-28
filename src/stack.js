export default () => {
    const stack = [];
    return {
        isEmpty: () => stack.length === 0,
        push: (item) => stack.push(item),
        pop: () => {
            if (stack.length === 0) throw new Error('stack is empty');
            return stack.pop();
        },
    };
};
