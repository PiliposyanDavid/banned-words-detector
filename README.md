# banned-words-detector
Detect if input string contains banned words.

Detector does not use any dependencies. **0 dependencies**.

In this time, detector worked for only English language.

Test results shows that the detector in 95% cases detects banned words.

The detector takes these steps

- Split string in to words by space and do followed steps for every word (`more fruits`→ `["more", "fruits"]`)
- Remove accents from latin characters (`ë`→`e`)
- Convert diacritics from strings to latin characters (`ɽ`→`r`)
- Remove all consecutive duplicates from the string (`fffrrruuit`→`fruit`)
- Delete all characters except letters `[a-zA-Z]` (`fru6it`→`fruit`)
- Check word in normal words array, if exists pass that word  
- Convert word to code using soundex algorithm and check if exists its code on banned words map
- If code exists, get original word by code, and check distance between two words using Levenshtein algorithm
- If distance between original and inputted word are 0 or 1, assert for banned
  

If the result to all the above mentioned points is false, then convert diacritics from string to latin characters, remove from string all characters except letters and check is banned words includes on a string 

## Usage
You can use detector with default banned words list, calling constructor with `{ addDefaultWords: true }` default value is `false`. 

```
import BannedWords from "banned-words-detector";
const bannedWordsService = new BannedWords({addDefaultWords: true});

or

const BannedWords = require("banned-words-detector");
const bannedWordsService = new BannedWords({addDefaultWords:false})
```
You can **add your banned words**.
Also, you can **add a normal word** to _normalWordsList_, **for pass that words**, if soundex code of that normal word is equal to any banned word code
```
bannedWordsService.addWord("apple");
bannedWordsService.addNormalWordForPass("lemon");
```
You can **get banned words list**, or **print defaults or lists** added by yourself for test 
```
bannedWordsService.getWords(); // out: → ["apple"]
bannedWordsService.printDefaultBannedWordsList();
bannedWordsService.printBannedWordsWithCodes();
bannedWordsService.printDefaultNormalWords();
bannedWordsService.printNormalWordsList();
```
And finally check **if string contains** banned word. Or **get banned words** from string
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


During the test, at first added 2700+ words to banned list, then did the test on a string which contained 5000+ words. Detected 1700+ banned words in string, and 298 of them were not equal to originals. Here is the result
```
farmer,  →  former
the  →  they
Indiana.)  →  indian
River.  →  river
company.  →  company
“live,  →  love
Meanwhile,  →  meanwhile
favour  →  favor
began  →  begin
examination,  →  examination
The  →  they
capital,  →  capital
John  →  join
finally,  →  finaly
business,  →  busines
annually,  →  anual
busy,  →  busy
not  →  note
set  →  swet
another.  →  another
property,  →  property
Bridge,  →  bridge
span  →  spin
River,  →  river
patent  →  patient
moon,  →  mon
killing.  →  kiling
clearly,  →  clearly
fond  →  fund
company,  →  company
apart,  →  apart
show.  →  show
House.  →  house
last,  →  lost
officially  →  oficial
seeing  →  swing
prod  →  proud
together,  →  together
president,  →  president
Democrat,  →  democrat
another,  →  another
“spot  →  spot
soil.  →  soul
meanwhile,  →  meanwhile
district.  →  district
politics,  →  politics
career.  →  carier
order.  →  order
men  →  mon
tall,  →  tol
speeches,  →  species
however,  →  however
campaign.  →  campaign
argument.  →  argument
stand.  →  stand
free.”  →  fre
“all  →  aly
all  →  aly
other.”  →  other
citizen,  →  citizen
Black,  →  block
free,  →  fre
states”  →  status
condition.”  →  condition
founding  →  funding
fact,  →  fast
not,  →  note
office,  →  ofice
people.”  →  people
drove  →  drive
“popular  →  popular
constitutionally  →  constitutional
organization.  →  organization
alone.  →  alone
Campaign,  →  campaign
Pope,  →  pipe
again,  →  again
turn.  →  turn
gave  →  give
unity  →  unit
army,  →  army
man  →  mon
member,  →  member
himself,  →  himself
staff.  →  stuf
strong.  →  strong
enemy.  →  enemy
quota  →  quote
intent,  →  intend
sold  →  solid
manufacturer,  →  manufacturer
design.  →  design
work.  →  works
together;  →  together
specially  →  special
country.  →  country
later,  →  leter
engine,  →  engine
co-operation  →  coperation
Germany  →  german
initially.  →  initialy
Interest,  →  interest
design,  →  design
application,  →  aplication
States  →  status
Patent  →  patient
States.  →  status
Marc  →  mark
Mills,  →  milk
result,  →  result
came  →  come
(from  →  from
successful,  →  sucesfuly
became  →  become
enough,  →  enough
change,  →  change
example,  →  example
roof,  →  rof
common.  →  comon
Cole,  →  col
manage:  →  manage
Depression,  →  depresion
left.  →  lift
happen.  →  hapen
instance,  →  instance
gone  →  gene
under.  →  under
Hurtu,  →  hurt
(Tree  →  true
Germany,  →  german
market.  →  market
(such  →  such
future.  →  future
change.  →  change
feet  →  fot
lever  →  lover
complex.  →  complex
entertainment.  →  entertainment
open,  →  open
massage  →  mesage
night;  →  night
driver;  →  driver
safer  →  sufer
perspective,  →  perspective
performance,  →  performance
performance.  →  performance
seven,  →  seven
hand,  →  hand
include,  →  include
pollution,[67]  →  polution
electricity.  →  electricity
efficient,  →  eficient
drive.  →  drive
justice.[1]  →  justice
suffer,  →  sufer
tradition,  →  tradition
widely,  →  widely
(among  →  among
food,  →  fot
pressure,  →  presure
concentration.  →  concentration
all,  →  aly
Furthermore,  →  furthermore
exposure,  →  exposure
smoke,[125]  →  smoke
smoke,[126]  →  smoke
including;  →  including
cancer.[129]  →  cancer
cancer.  →  cancer
heavy,  →  heavy
pill  →  pul
heritage.  →  heritage

```
