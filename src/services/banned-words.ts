import Soundex from "./soundex";

class BannedWords {
    private wordsCodes: { [key: string]: string; } = {};
    private defaultBannedWords = [
        "pedophile",
        "cunt",
        "boceta",
        "cuntlick",
    ]

    constructor() {
        this.defaultBannedWords.forEach(w => this.addWord(w))
    }

    getWordIfExist(word: string): string {
        const code = Soundex.getCode(word);
        return this.wordsCodes[code];
    }

    addWord(word: string): void {
        if (!word) return;

        const code: string = Soundex.getCode(word);
        this.wordsCodes[code] = word
    }
}


export default new BannedWords()
