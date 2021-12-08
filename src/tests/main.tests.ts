import chai from "chai";
const expect = chai.expect;

import Main from "./../main";

describe('Main Tests', () => {
    describe('#isBanned', function () {

        it('should add banned word and check text contains it with equality', function () {
            const word = "fuck";
            const str = "good pc mackbook fuck good also and change"
            Main.addWord(word);

            expect(Main.isBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it', function () {
            const word = "fuck";
            // char c typed in russian, === not worked in this case
            const str = "good pc mackbook fuсk good also and change"
            Main.addWord(word);

            expect(Main.isBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it, when in text banned word chars duplicated', function () {
            const word = "fuck";
            const str = "good pc mackbook fuuuuuсkkk good also and change"
            Main.addWord(word);

            expect(Main.isBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it, when in text banned word contained accents', function () {
            const word = "fuck";
            const str = "good pc mackbook 𝖋𝖋𝖋𝖋𝖋𝖋uuuuuс𝕂𝕂𝕂𝕂 good also and change"
            Main.addWord(word);

            expect(Main.isBanned(str)).to.be.true
        });

    });
});


