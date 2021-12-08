import chai from "chai";
const expect = chai.expect;

import Normalizer from "./../services/normalizer";

describe('Normalizer Tests', () => {

    describe('#removeAccents', function () {

        it('should remove accents from string', function () {
            const str = "Typᵒ ᴛeᶍ𝕥";

            expect(Normalizer.removeAccents(str)).to.be.equal("Typo Text")
        });

        it('should not change string when accents not found', function () {
            const str = "normal string with english chars";

            expect(Normalizer.removeAccents(str)).to.be.equal(str)
        });
    });

    describe('#removeDuplicateChars', function () {

        it('should remove duplicates from word', function () {
            const str = "tteeessstt";
            expect(Normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal("test")
        });

        it('should remove duplicates from string', function () {
            const str = "tteeessstt itttt ffooorrr Engliisshhh aaa whaaattt ittsss";
            expect(Normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal("test it for English a what its")
        });

        it('should not change string when duplicates not found', function () {
            const str = "normal string with english chars";
            expect(Normalizer.removeConsecutiveDuplicateChars(str)).to.be.equal(str)
        });
    });
});


