const should = require('chai').should();
const configs = require('../dsv-delimiter-configurations');

describe('dsv-delimiter-configurations', ()=>{
    it('should have the basic four configs', ()=>{
        should.exist(configs.CSV);
        should.exist(configs.TSV);
        should.exist(configs.SSV);
        should.exist(configs.DSV);
    });
});
