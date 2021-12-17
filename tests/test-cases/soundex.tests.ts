import chai from "chai";
const expect = chai.expect;

import Soundex from "./../../src/services/soundex";

describe('Soundex Tests', () => {
    let soundex : Soundex;
    before(() => {
        soundex = new Soundex();
    })

    describe('#getCode', function () {

        it('should return code for word', function () {
            const str = "encapsulation";
            const code = "E8313768"

            expect(soundex.getCode(str)).to.be.equal(code)
        });

        it('should return code for word not depend with calls count', function () {
            const str = "encapsulation";
            const code = "E8313768"

            expect(soundex.getCode(str)).to.be.equal(code)
            expect(soundex.getCode(str)).to.be.equal(code)
            expect(soundex.getCode(str)).to.be.equal(code)
            expect(soundex.getCode(str)).to.be.equal(code)
        });

    });
});


