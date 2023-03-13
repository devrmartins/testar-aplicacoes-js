module.exports.sum = (num1, num2) => {
    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        throw new Error("Please check your input");
    }

    return parseInt(num1,10) + parseInt(num2,10);
}