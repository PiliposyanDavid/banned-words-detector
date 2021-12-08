import Normalizer from "./services/normalizer"
import BannedWords from "./services/banned-words"
import Levenshtain from "./services/levenshtain"

class Main {
    isBanned(string: string): boolean {
        if (!string) return false;

        return string
            .split(" ")
            .some(word => {
                word = Normalizer.sanitize(word)

                const wordFromCode = BannedWords.getWordIfExist(word);
                if (!wordFromCode) return false;

                const distance = Levenshtain.distance(wordFromCode, word);
                return distance <= 1;
            });
    }

    addWord(word: string): void {
        if (!word) return;
        word = Normalizer.sanitize(word);
        BannedWords.addWord(word);
    }
}

export default new Main()
