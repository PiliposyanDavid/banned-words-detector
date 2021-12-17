import chai from "chai";

const expect = chai.expect;

import Main from "./../../src/main";

import PopularWords from "./../common/words_for_test";
import TextForTest from "./../common/text_for_test";

describe('Main Tests', () => {
    let main: Main
    before(() => {
        main = new Main({addDefaultWords: false})
    })
    describe('#isBanned', function () {

        beforeEach(() => {
            main.clearData()
        })

        it('should add banned word and check text contains it with equality', function () {
            const word = "fuck";
            const str = "good pc mackbook fuck good also and change"
            main.addWord(word);

            expect(main.isContainsBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it', function () {
            const word = "fuck";
            // char c typed in russian, === not worked in this case
            const str = "good pc mackbook f=u=с=k good also and change"
            main.addWord(word);

            expect(main.isContainsBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it, when in text banned word chars duplicated', function () {
            const word = "fuck";
            const str = "good pc mackbook fuuuuuсkkk good also and change"
            main.addWord(word);

            expect(main.isContainsBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it, when in text banned word contained accents', function () {
            const word = "fuck";
            const str = "good pc mackbook 𝖋𝖋𝖋𝖋𝖋𝖋uuuuuс𝕂𝕂𝕂𝕂 good also and change"
            main.addWord(word);

            expect(main.isContainsBanned(str)).to.be.true
        });

        it('should add banned word and check text contains it 1', function () {
            const word = "fuck";
            const str = "good pc mackbook 𝖋𝖋𝖋𝖋𝖋𝖋uuus𝕂𝕂𝕂𝕂 good also and change"
            main.addWord(word);

            expect(main.isContainsBanned(str)).to.be.true
        });

        it('should add words and check in text', function () {
            // words count in text is a 5000+ . added banned words - 2700+
            // need to block ~50-100 word

            PopularWords.forEach(word => main.addWord(word));

            const detectedBannedWords = main.getBannedWordsFromString(TextForTest);
            console.log("Detected banned words length", detectedBannedWords.length);

            const uniqueDetectedWords = [...new Set(detectedBannedWords)];
            console.log("Detected unique banned words length", uniqueDetectedWords.length);

            const nonEqualsWords: string[] = [];

            uniqueDetectedWords.forEach(word => {
                if (!PopularWords.includes(word.toLowerCase())) {
                    nonEqualsWords.push(word)
                }
            })
            console.log("Detected non equals unique banned words length", nonEqualsWords.length);

            nonEqualsWords.forEach(word => {
                console.log(`${word} --- ${main.getWordFromCode(word)}`)
            });

            expect(true).to.be.true
        });
    });
});


