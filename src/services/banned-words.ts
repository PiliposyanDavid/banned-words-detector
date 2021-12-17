import Soundex from "./soundex";
import DefaultBannedWords from "../common/default_banned_words";
import NormalWordsToPass from "../common/normal_words_to_pass";

class BannedWords {
    private soundexAlgorithm: Soundex;
    private normalWordsToPass: string[] = [];
    private wordsWithCodesMap: { [key: string]: string; } = {}; // key code value word

    constructor(isInitializeDefaults: boolean = false) {
        this.soundexAlgorithm = new Soundex();

        if (isInitializeDefaults) {
            DefaultBannedWords.forEach(w => this.addWord(w))
            NormalWordsToPass.forEach(w => this.addNormalWordForPass(w))
        }
    }

    getWordIfExist(word: string): string {
        const code = this.soundexAlgorithm.getCode(word);
        return this.wordsWithCodesMap[code];
    }

    addWord(word: string): void {
        if (!word) return;
        if (this.isExistsInNormalWordsList(word)) return;

        const code: string = this.soundexAlgorithm.getCode(word);
        this.wordsWithCodesMap[code] = word
    }

    addNormalWordForPass(word: string): void {
        if (!word) return;
        this.normalWordsToPass.push(word)
    }

    isExistsInNormalWordsList(word: string): boolean {
        if (!word) return false;
        return this.normalWordsToPass.includes(word);
    }

    clearData(): void {
        this.wordsWithCodesMap = {};
        this.normalWordsToPass = [];
    }

    getWords(): string[] {
        return Object.values(this.wordsWithCodesMap);
    }

    printBannedWordsWithCodes(): void {
        console.log("Banned words list")
        console.log("-----------------------")
        console.log("word ## soundex code")
        Object
            .keys(this.wordsWithCodesMap)
            .forEach(key => {
                console.log(`${this.wordsWithCodesMap[key]}  ##  ${key}`)
            })
    }

    printDefaultBannedWordsList(): void {
        console.log("Default Banned words list")
        DefaultBannedWords.forEach(word => console.log(word))
    }

    printDefaultNormalWords(): void {
        console.log("Default normal words list")
        NormalWordsToPass.forEach(word => console.log(word))
    }

    printNormalWordsList(): void {
        console.log("Default normal words list")
        this.normalWordsToPass.forEach(word => console.log(word))
    }
}


export default BannedWords
