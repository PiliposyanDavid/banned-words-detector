import chai from "chai";
const expect = chai.expect;
import BannedWords from "./../../src/services/banned-words";

describe('BannedWords Tests', () => {
    let bannedWords: BannedWords;
    before(() => {
        bannedWords = new BannedWords(false);
    })


    describe('#isBanned', function () {
        beforeEach(() => {
            bannedWords.clearData()
        })

        it('should add banned word and check its if banned with equal string', function () {
            const str = "fuck";
            bannedWords.addWord(str);

            expect(bannedWords.getWordIfExist(str)).to.be.equal(str)
        });
    });
});


