# banned-words-detector
Detect if input string contains banned words.

Detector does not use any dependencies. **0 dependencies**.

In this time, detector worked for only English language.

Test results showed that 95%+ works correctly, that normal words were not assert to banned.

The detector takes these steps

- Split string to word by space and loop its steps for every word (`more fruits`→ `["more", "fruits"]`)
- Remove accents from latin characters (`ë`→`e`)
- Convert diacritics from strings to latin characters (`ɽ`→`r`)
- Remove all consecutive duplicates from the string (`fffrrruuit`→`fruit`)
- Delete all characters except letters `[a-zA-Z]` (`fru6it`→`fruit`)
- Check word in normal words array, if exist pass it word  
- Convert word to code using soundex algorithm and check if exists its code
- If code exist, get original word by code, and chek diff between its two words using Levenshtein
- If difference between original and inputted word are 0 or 1, assert for banned


## Usage
You can use detector with default banned words list, calling constructor with `{ addDefaultWords: true }` default value is `false`. 

```
import BannedWords from "banned-words-detector";
const bannedWordsService = new BannedWords({addDefaultWords: true});

or

const BannedWords = require("banned-words-detector");
const bannedWordsService = new BannedWords({addDefaultWords:false})
```
Also, you can add yours banned words or normal word for pass its, if soundex code of its word are equal on banned
```
bannedWordsService.addWord("apple");
bannedWordsService.addNormalWordForPass("lemon");
```
You can get banned words from list or print its for test 
```
bannedWordsService.getWords(); // out: → ["apple"]
bannedWordsService.printDefaultBannedWordsList();
bannedWordsService.printBannedWordsWithCodes();
bannedWordsService.printDefaultNormalWords();
bannedWordsService.printNormalWordsList();
```
And finally, check is string contains banned word. Or get banned words from string
```
bannedWordsService.isContainsBanned("example fruit apple");
bannedWordsService.getBannedWordsFromString("example fruit appppllle") // out: → ["apple"]
const badWordDetector = new BadWordDetector(badWordList);
```
## Examples


```
import BannedWords from "banned-words-detector";
const bannedWordsService = new BannedWords({addDefaultWords: true});

bannedWordsService.addWord("apple");

bannedWordsService.isContainsBanned("example fruit apple"); → true
bannedWordsService.isContainsBanned("example fruit aaaapple3"); → true
bannedWordsService.isContainsBanned("example fruit app𝐥𝕖"); → true
bannedWordsService.isContainsBanned("example fruit a=🅿=🅿=𝐥=𝕖"); → true
```

## Test results


Doed test, when added 2700+ words to banned list, and test its on string which contains 5000+ words, detected 1300+ banned word in string, from which 172 non equal to original. Here is result
```
farmer, → former
the → they
Indiana.) → indian
River. → river
company. → company
“live, → love
Meanwhile, → meanwhile
favour → favor
began → begin
examination, → examination
The → they
capital, → capital
John → join
finally, → finaly
business, → busines
annually, → anual
busy, → busy
not → note
set → swet
another. → another
property, → property
Bridge, → bridge
span → spin
River, → river
patent → patient
moon, → mon
killing. → kiling
clearly, → clearly
fond → fund
company, → company
```
