import chai from "chai";
const expect = chai.expect;

import BannedWords from "./../services/banned-words";

describe('BannedWords Tests', () => {
    describe('#isBanned', function () {

        it('should add banned word and check its if banned with equal string', function () {
            const str = "fuck";
            BannedWords.addWord(str);

            expect(BannedWords.getWordIfExist(str)).to.be.equal(str)
        });
    });
});


