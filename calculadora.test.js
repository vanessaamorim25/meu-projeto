const assert = require('assert');
const soma = require('./calculadora');

describe('Calculadora', () => {

    it('Deve somar dois números', () => {
        assert.equal(soma(2,3),5);
    });

});