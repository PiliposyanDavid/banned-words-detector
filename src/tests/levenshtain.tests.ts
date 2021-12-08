import chai from "chai";
const expect = chai.expect;

import Levenshtain from "./../services/levenshtain";

describe('Levenshtain Tests', () => {
    describe('#distance', function () {

        it('should return distance', function () {
            const str1 = "fuck";
            const str2 = "fucq";
            expect(Levenshtain.distance(str1,str2)).to.be.equal(1)
        });

        it('should return distance', function () {
            const str1 = "to";
            const str2 = "the";
            expect(Levenshtain.distance(str1,str2)).to.be.equal(2)
        });

        it('should return distance  22', function () {
            const str1 = "away";
            const str2 = "a";
            expect(Levenshtain.distance(str1,str2)).to.be.equal(1)
        });
    });
});


