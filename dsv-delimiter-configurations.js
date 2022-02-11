module.exports = {
    DSV : {
        delimiter : String.fromCharCode(31),
        terminator : String.fromCharCode(30),
        escape : String.fromCharCode(27)
    },
    CSV : {
        delimiter : ',',
        terminator : "\n",
        escape : '\\'
    },
    TSV : {
        delimiter : "\t",
        terminator : "\n",
        escape : '\\'
    },
    SSV : {
        delimiter : ' ',
        terminator : "\n",
        escape : '\\'
    }
};
