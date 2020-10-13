module.exports = function(str) {  
    const arr = str.split(/[^\_^-]+/);
    const res = arr.slice(1, arr.length - 1).filter(onlyUnique);
    return {
        mod: res[0],
        elem: res[1]
    }
    
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}