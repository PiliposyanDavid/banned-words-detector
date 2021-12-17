import chai from "chai";
const expect = chai.expect;
import Levenshtein from "../../src/services/levenshtein";

describe('Levenshtein Tests', () => {
    let levenshtein: Levenshtein;
    before(() => {
        levenshtein = new Levenshtein();
    })

    describe('#distance', function () {

        it('should return distance', function () {
            const str1 = "fuck";
            const str2 = "fucq";
            expect(levenshtein.distance(str1, str2)).to.be.equal(1)
        });

        it('should return distance', function () {
            const str1 = "to";
            const str2 = "the";
            expect(levenshtein.distance(str1, str2)).to.be.equal(2)
        });

        it('should return distance  22', function () {
            const str1 = "away";
            const str2 = "a";
            expect(levenshtein.distance(str1, str2)).to.be.equal(1)
        });
    });
});


