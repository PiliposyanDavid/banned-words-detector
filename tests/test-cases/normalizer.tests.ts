import chai from "chai";
const expect = chai.expect;
import Normalizer from "./../../src/services/normalizer";

describe('Normalizer Tests', () => {
    let normalizer: Normalizer;

    before(() => {
        normalizer = new Normalizer()
    })

    describe('#removeAccents', function () {

        it('should remove accents from string', function () {
            const str = "Typᵒ ᴛeᶍ𝕥";

            expect(normalizer.removeAccents(str)).to.be.equal("Typo Text")
        });

        it('should not change string when accents not found', function () {
            const str = "normal string with english chars";

            expect(normalizer.removeAccents(str)).to.be.equal(str)
        });

        it('test1', function () {
            const str = "ᴡᴡᴡⴰ";

            expect(normalizer.sanitize(str)).to.be.equal("w")
        });
    });

    describe('#removeDuplicateChars', function () {

        it('should remove duplicates from word', function () {
            const str = "tteeessstt";
            expect(normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal("test")
        });

        it('should remove duplicates from string', function () {
            const str = "tteeessstt itttt ffooorrr Engliisshhh aaa whaaattt ittsss";
            expect(normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal("test it for English a what its")
        });

        it('should not change string when duplicates not found', function () {
            const str = "normal string with english chars";
            expect(normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal(str)
        });
    });

    describe('#sanitizeAndJoinText', function () {

        it('should sanitize', function () {
            const str = "t  t,; ee e s sst t";
            expect(normalizer.sanitizeAndJoinText(str)).to.be.equal("test")
        });
    });
});


