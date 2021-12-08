import chai from "chai";
const expect = chai.expect;

import Soundex from "./../services/soundex";

describe('Soundex Tests', () => {
    describe('#getCode', function () {

        it('should return code for word', function () {
            const str = "encapsulation";
            const code = "E8313768"

            expect(Soundex.getCode(str)).to.be.equal(code)
        });

        it('should return code for word not depend with calls count', function () {
            const str = "encapsulation";
            const code = "E8313768"

            expect(Soundex.getCode(str)).to.be.equal(code)
            expect(Soundex.getCode(str)).to.be.equal(code)
            expect(Soundex.getCode(str)).to.be.equal(code)
            expect(Soundex.getCode(str)).to.be.equal(code)
        });

    });
});


