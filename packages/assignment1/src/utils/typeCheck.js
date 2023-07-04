function typeCheck(values, type){
    try {
        if(!Array.isArray(values)) return {error: true, msg: "values argument type must be array"};
        const errorType = values.some(value => type === "number" && isNaN(value) ? true : typeof value !== type);
        if(errorType) return {error: true, msg: "value is not " + type + " type"};
        return {error: false, msg: "Success"}
    } catch (error) {
        return {error: true, msg: error.message};
    }
}

module.exports = typeCheck;