import Normalizer from "./services/normalizer"
import BannedWords from "./services/banned-words"
import Levenshtein from "./services/levenshtein"

class Main {
    private normalizer: Normalizer;
    private levenshtein: Levenshtein;
    private bannedWords: BannedWords;

    constructor(options: { addDefaultWords: boolean }) {
        this.normalizer = new Normalizer()
        this.levenshtein = new Levenshtein()
        this.bannedWords = new BannedWords(options.addDefaultWords)
    }

    isContainsBanned(string: string): boolean {
        if (!string) return false;

        return string
                .split(" ")
                .some(word => this.isWordBanned(word))
            || this.isStringContainsBannedWord(string);
    }

    getBannedWordsFromString(string: string): string[] {
        if (!string) return [];

        const detectedWords: string[] = [];
        string
            .split(" ")
            .forEach(word => {
                if (this.isWordBanned(word)) {
                    detectedWords.push(word)
                }
            });

        const detectedWordsFromJoinedString: string[] = this.getBannedWordsFromJoinedString(string);

        return detectedWords.concat(detectedWordsFromJoinedString.filter(bWord => !detectedWords.includes(bWord)));
    }

    getWordFromCode(word: string): string {
        word = this.normalizer.sanitize(word)
        return this.bannedWords.getWordIfExist(word)
    }

    addWord(word: string): void {
        if (!word) return;
        word = this.normalizer.sanitize(word);
        this.bannedWords.addWord(word);
    }

    addNormalWordForPass(word: string): void {
        if (!word) return;
        this.bannedWords.addNormalWordForPass(word);
    }

    getWords(): string[] {
        return this.bannedWords.getWords();
    }

    printBannedWordsWithCodes(): void {
        this.bannedWords.printBannedWordsWithCodes();
    }

    clearData(): void {
        this.bannedWords.clearData();
    }

    printDefaultBannedWordsList(): void {
        this.bannedWords.printDefaultBannedWordsList();
    }

    printDefaultNormalWords(): void {
        this.bannedWords.printDefaultNormalWords();
    }

    printNormalWordsList(): void {
        this.bannedWords.printNormalWordsList();
    }

    private isWordBanned(word: string): boolean {
        if (!word) return false;
        word = this.normalizer.sanitize(word);

        if (this.bannedWords.isExistsInNormalWordsList(word)) return false;

        const wordFromCode = this.bannedWords.getWordIfExist(word);
        if (!wordFromCode) return false;

        const distance = this.levenshtein.distance(wordFromCode, word);
        return (distance <= 1 &&
            (wordFromCode.length === word.length
                || Math.abs(wordFromCode.length - word.length) <= 1
            )
        );
    }

    private isStringContainsBannedWord(text: string): boolean {
        if (!text) return false;
        text = this.normalizer.sanitizeAndJoinText(text);
        const bannedWords: string[] = this.bannedWords.getWords();

        return bannedWords.some(bWord => text.includes(bWord));
    }

    private getBannedWordsFromJoinedString(text: string): string[] {
        if (!text) return [];
        text = this.normalizer.sanitizeAndJoinText(text);
        const bannedWords: string[] = this.bannedWords.getWords();

        const containedBannedWords: string[] = []

        bannedWords.forEach(bWord => {
            if (text.includes(bWord)) containedBannedWords.push(bWord);
        });

        return containedBannedWords;
    }
}

export default Main
