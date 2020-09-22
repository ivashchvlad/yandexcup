var findLatestWeight = function (weights) {

    while (weights.length > 1) {
        weights.sort((a, b) => b - a);
        weights[1] = weights[0] - weights[1];
        weights.splice(0, 1);
    }
    if(!weights.length) return 0;
    return weights[0];
}

module.exports = findLatestWeight;