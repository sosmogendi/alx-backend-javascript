// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Tests advanced calculateNumber function:", function(){
    describe("SUM operation:", function(){
        it("should return the sum of two rounded numbers", function(){
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
        })
    })

    describe("SUBTRACT operation:", function(){
        it("should return the subtraction of two rounded numbers", function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
        })
    })

    describe("DIVIDE operation:", function(){
        it("should return the division of two rounded numbers", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
        })

        it("should return 'Error' when dividing by 0", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
        })
    })
})
