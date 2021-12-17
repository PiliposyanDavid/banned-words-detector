import Latinize from "../common/latinize";

class Normalizer {
    removeAccents(str: string): string {
        return [...str]
            .map(char => Latinize[char] || char)
            .join('')
    }

    removeConsecutiveDuplicateChars(word: string): string {
        let last = "";
        let result = "";
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            if (char !== last) {
                result += char;
                last = char;
            }
        }

        return result;
    }

    sanitize(word: string): string {
        word = this.removeAccents(word);
        word = this.removeConsecutiveDuplicateChars(word);

        return word
            .replace(/[^a-zA-Z]/g, "")
            .trim()
            .toLowerCase();
    }
}

export default Normalizer
