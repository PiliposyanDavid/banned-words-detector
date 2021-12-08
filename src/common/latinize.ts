const Latinize: { [key: string]: string; } = {
    "@": "a",
    "1": "i",
    "4": "a",
    "$": "s",
    "0": "o",
    "3": "e",
    "8": "b",
    "Á": "A",
    "Ă": "A",
    "Ắ": "A",
    "Ặ": "A",
    "Ằ": "A",
    "Ẳ": "A",
    "Ẵ": "A",
    "Ǎ": "A",
    "Â": "A",
    "Ấ": "A",
    "Ậ": "A",
    "Ầ": "A",
    "Ẩ": "A",
    "Ẫ": "A",
    "Ä": "A",
    "Ǟ": "A",
    "Ȧ": "A",
    "Ǡ": "A",
    "Ạ": "A",
    "Ȁ": "A",
    "À": "A",
    "Ả": "A",
    "Ȃ": "A",
    "Ā": "A",
    "Ą": "A",
    "Å": "A",
    "Ǻ": "A",
    "Ḁ": "A",
    "Ⱥ": "A",
    "Ã": "A",
    "Ꜳ": "AA",
    "Æ": "AE",
    "Ǽ": "AE",
    "Ǣ": "AE",
    "Ꜵ": "AO",
    "Ꜷ": "AU",
    "Ꜹ": "AV",
    "Ꜻ": "AV",
    "Ꜽ": "AY",
    "Ḃ": "B",
    "Ḅ": "B",
    "Ɓ": "B",
    "Ḇ": "B",
    "Ƀ": "B",
    "Ƃ": "B",
    "Ć": "C",
    "Č": "C",
    "Ç": "C",
    "Ḉ": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Ƈ": "C",
    "Ȼ": "C",
    "Ď": "D",
    "Ḑ": "D",
    "Ḓ": "D",
    "Ḋ": "D",
    "Ḍ": "D",
    "Ɗ": "D",
    "Ḏ": "D",
    "ǲ": "D",
    "ǅ": "D",
    "Đ": "D",
    "Ð": "D",
    "Ƌ": "D",
    "Ǳ": "DZ",
    "Ǆ": "DZ",
    "É": "E",
    "Ĕ": "E",
    "Ě": "E",
    "Ȩ": "E",
    "Ḝ": "E",
    "Ê": "E",
    "Ế": "E",
    "Ệ": "E",
    "Ề": "E",
    "Ể": "E",
    "Ễ": "E",
    "Ḙ": "E",
    "Ë": "E",
    "Ė": "E",
    "Ẹ": "E",
    "Ȅ": "E",
    "È": "E",
    "Ẻ": "E",
    "Ȇ": "E",
    "Ē": "E",
    "Ḗ": "E",
    "Ḕ": "E",
    "Ę": "E",
    "Ɇ": "E",
    "Ẽ": "E",
    "Ḛ": "E",
    "Ꝫ": "ET",
    "Ḟ": "F",
    "Ƒ": "F",
    "Ǵ": "G",
    "Ğ": "G",
    "Ǧ": "G",
    "Ģ": "G",
    "Ĝ": "G",
    "Ġ": "G",
    "Ɠ": "G",
    "Ḡ": "G",
    "Ǥ": "G",
    "Ḫ": "H",
    "Ȟ": "H",
    "Ḩ": "H",
    "Ĥ": "H",
    "Ⱨ": "H",
    "Ḧ": "H",
    "Ḣ": "H",
    "Ḥ": "H",
    "Ħ": "H",
    "Í": "I",
    "Ĭ": "I",
    "Ǐ": "I",
    "Î": "I",
    "Ï": "I",
    "Ḯ": "I",
    "İ": "I",
    "Ị": "I",
    "Ȉ": "I",
    "Ì": "I",
    "Ỉ": "I",
    "Ȋ": "I",
    "Ī": "I",
    "Į": "I",
    "Ɨ": "I",
    "Ĩ": "I",
    "Ḭ": "I",
    "Ꝺ": "D",
    "Ꝼ": "F",
    "Ᵹ": "G",
    "Ꞃ": "R",
    "Ꞅ": "S",
    "Ꞇ": "T",
    "Ꝭ": "IS",
    "Ĵ": "J",
    "Ɉ": "J",
    "Ḱ": "K",
    "Ǩ": "K",
    "Ķ": "K",
    "Ⱪ": "K",
    "Ꝃ": "K",
    "Ḳ": "K",
    "Ƙ": "K",
    "Ḵ": "K",
    "Ꝁ": "K",
    "Ꝅ": "K",
    "Ĺ": "L",
    "Ƚ": "L",
    "Ľ": "L",
    "Ļ": "L",
    "Ḽ": "L",
    "Ḷ": "L",
    "Ḹ": "L",
    "Ⱡ": "L",
    "Ꝉ": "L",
    "Ḻ": "L",
    "Ŀ": "L",
    "Ɫ": "L",
    "ǈ": "L",
    "Ł": "L",
    "Ǉ": "LJ",
    "Ḿ": "M",
    "Ṁ": "M",
    "Ṃ": "M",
    "Ɱ": "M",
    "Ń": "N",
    "Ň": "N",
    "Ņ": "N",
    "Ṋ": "N",
    "Ṅ": "N",
    "Ṇ": "N",
    "Ǹ": "N",
    "Ɲ": "N",
    "Ṉ": "N",
    "Ƞ": "N",
    "ǋ": "N",
    "Ñ": "N",
    "Ǌ": "NJ",
    "Ó": "O",
    "Ŏ": "O",
    "Ǒ": "O",
    "Ô": "O",
    "Ố": "O",
    "Ộ": "O",
    "Ồ": "O",
    "Ổ": "O",
    "Ỗ": "O",
    "Ö": "O",
    "Ȫ": "O",
    "Ȯ": "O",
    "Ȱ": "O",
    "Ọ": "O",
    "Ő": "O",
    "Ȍ": "O",
    "Ò": "O",
    "Ỏ": "O",
    "Ơ": "O",
    "Ớ": "O",
    "Ợ": "O",
    "Ờ": "O",
    "Ở": "O",
    "Ỡ": "O",
    "Ȏ": "O",
    "Ꝋ": "O",
    "Ꝍ": "O",
    "Ō": "O",
    "Ṓ": "O",
    "Ṑ": "O",
    "Ɵ": "O",
    "Ǫ": "O",
    "Ǭ": "O",
    "Ø": "O",
    "Ǿ": "O",
    "Õ": "O",
    "Ṍ": "O",
    "Ṏ": "O",
    "Ȭ": "O",
    "Ƣ": "OI",
    "Ꝏ": "OO",
    "Ɛ": "E",
    "Ɔ": "O",
    "Ȣ": "OU",
    "Ṕ": "P",
    "Ṗ": "P",
    "Ꝓ": "P",
    "Ƥ": "P",
    "Ꝕ": "P",
    "Ᵽ": "P",
    "Ꝑ": "P",
    "Ꝙ": "Q",
    "Ꝗ": "Q",
    "Ŕ": "R",
    "Ř": "R",
    "Ŗ": "R",
    "Ṙ": "R",
    "Ṛ": "R",
    "Ṝ": "R",
    "Ȑ": "R",
    "Ȓ": "R",
    "Ṟ": "R",
    "Ɍ": "R",
    "Ɽ": "R",
    "Ꜿ": "C",
    "Ǝ": "E",
    "Ś": "S",
    "Ṥ": "S",
    "Š": "S",
    "Ṧ": "S",
    "Ş": "S",
    "Ŝ": "S",
    "Ș": "S",
    "Ṡ": "S",
    "Ṣ": "S",
    "Ṩ": "S",
    "ß": "B",
    "Ť": "T",
    "Ţ": "T",
    "Ṱ": "T",
    "Ț": "T",
    "Ⱦ": "T",
    "Ṫ": "T",
    "Ṭ": "T",
    "Ƭ": "T",
    "Ṯ": "T",
    "Ʈ": "T",
    "Ŧ": "F",
    "Ɐ": "A",
    "Ꞁ": "L",
    "Ɯ": "M",
    "Ʌ": "V",
    "Ꜩ": "TZ",
    "Ú": "U",
    "Ŭ": "U",
    "Ǔ": "U",
    "Û": "U",
    "Ṷ": "U",
    "Ü": "U",
    "Ǘ": "U",
    "Ǚ": "U",
    "Ǜ": "U",
    "Ǖ": "U",
    "Ṳ": "U",
    "Ụ": "U",
    "Ű": "U",
    "Ȕ": "U",
    "Ù": "U",
    "Ủ": "U",
    "Ư": "U",
    "Ứ": "U",
    "Ự": "U",
    "Ừ": "U",
    "Ử": "U",
    "Ữ": "U",
    "Ȗ": "U",
    "Ū": "U",
    "Ṻ": "U",
    "Ų": "U",
    "Ů": "U",
    "Ũ": "U",
    "Ṹ": "U",
    "Ṵ": "U",
    "Ꝟ": "V",
    "Ṿ": "V",
    "Ʋ": "V",
    "Ṽ": "V",
    "Ꝡ": "VY",
    "Ẃ": "W",
    "Ŵ": "W",
    "Ẅ": "W",
    "Ẇ": "W",
    "Ẉ": "W",
    "Ẁ": "W",
    "Ⱳ": "W",
    "Ẍ": "X",
    "Ẋ": "X",
    "Ý": "Y",
    "Ŷ": "Y",
    "Ÿ": "Y",
    "Ẏ": "Y",
    "Ỵ": "Y",
    "Ỳ": "Y",
    "Ƴ": "Y",
    "Ỷ": "Y",
    "Ỿ": "Y",
    "Ȳ": "Y",
    "Ɏ": "Y",
    "Ỹ": "Y",
    "Ź": "Z",
    "Ž": "Z",
    "Ẑ": "Z",
    "Ⱬ": "Z",
    "Ż": "Z",
    "Ẓ": "Z",
    "Ȥ": "Z",
    "Ẕ": "Z",
    "Ƶ": "Z",
    "Þ": "TH",
    "Ĳ": "IJ",
    "Œ": "OE",
    "ᴀ": "A",
    "ᴁ": "AE",
    "ʙ": "B",
    "ᴃ": "B",
    "ᴄ": "C",
    "ᴅ": "D",
    "ᴇ": "E",
    "ꜰ": "F",
    "ɢ": "G",
    "ʛ": "G",
    "ʜ": "H",
    "ɪ": "I",
    "ʁ": "R",
    "ᴊ": "J",
    "ᴋ": "K",
    "ʟ": "L",
    "ᴌ": "L",
    "ᴍ": "M",
    "ɴ": "N",
    "ᴏ": "O",
    "ɶ": "OE",
    "ᴐ": "O",
    "ᴕ": "OU",
    "ᴘ": "P",
    "ʀ": "R",
    "ᴎ": "N",
    "ᴙ": "R",
    "ꜱ": "S",
    "ᴛ": "T",
    "ⱻ": "E",
    "ᴚ": "R",
    "ᴜ": "U",
    "ᴠ": "V",
    "ᴡ": "W",
    "ʏ": "Y",
    "ᴢ": "Z",
    "á": "a",
    "ă": "a",
    "ắ": "a",
    "ặ": "a",
    "ằ": "a",
    "ẳ": "a",
    "ẵ": "a",
    "ǎ": "a",
    "â": "a",
    "ấ": "a",
    "ậ": "a",
    "ầ": "a",
    "ẩ": "a",
    "ẫ": "a",
    "ä": "a",
    "ǟ": "A",
    "ȧ": "a",
    "ǡ": "a",
    "ạ": "a",
    "ȁ": "a",
    "à": "a",
    "ả": "a",
    "ȃ": "a",
    "ā": "a",
    "ą": "a",
    "ᶏ": "a",
    "ẚ": "a",
    "å": "a",
    "ǻ": "a",
    "ḁ": "a",
    "ⱥ": "a",
    "ã": "a",
    "ꜳ": "aa",
    "æ": "ae",
    "ǽ": "ae",
    "ǣ": "ae",
    "ꜵ": "ao",
    "ꜷ": "au",
    "ꜹ": "av",
    "ꜻ": "av",
    "ꜽ": "ay",
    "ḃ": "b",
    "ḅ": "b",
    "ɓ": "b",
    "ḇ": "b",
    "ᵬ": "b",
    "ᶀ": "b",
    "ƀ": "b",
    "ƃ": "b",
    "ɵ": "o",
    "ć": "c",
    "č": "c",
    "ç": "c",
    "ḉ": "c",
    "ĉ": "c",
    "ɕ": "c",
    "ċ": "c",
    "ƈ": "c",
    "ȼ": "c",
    "ď": "d",
    "ḑ": "d",
    "ḓ": "d",
    "ȡ": "d",
    "ḋ": "d",
    "ḍ": "d",
    "ɗ": "d",
    "ᶑ": "d",
    "ḏ": "d",
    "ᵭ": "d",
    "ᶁ": "d",
    "đ": "d",
    "ɖ": "D",
    "ƌ": "d",
    "ð": "o",
    "ı": "I",
    "ȷ": "j",
    "ɟ": "j",
    "ʄ": "F",
    "ǳ": "dz",
    "ǆ": "dz",
    "é": "e",
    "ĕ": "e",
    "ě": "e",
    "ȩ": "e",
    "ḝ": "e",
    "ê": "e",
    "ế": "e",
    "ệ": "e",
    "ề": "e",
    "ể": "e",
    "ễ": "e",
    "ḙ": "e",
    "ë": "e",
    "ė": "e",
    "ẹ": "e",
    "ȅ": "e",
    "è": "e",
    "ẻ": "e",
    "ȇ": "e",
    "ē": "E",
    "ḗ": "e",
    "ḕ": "e",
    "ⱸ": "e",
    "ę": "e",
    "ᶒ": "e",
    "ɇ": "e",
    "ẽ": "e",
    "ḛ": "e",
    "ꝫ": "et",
    "ḟ": "f",
    "ƒ": "f",
    "ᵮ": "f",
    "ᶂ": "f",
    "ǵ": "g",
    "ğ": "g",
    "ǧ": "g",
    "ģ": "g",
    "ĝ": "g",
    "ġ": "g",
    "ɠ": "g",
    "ḡ": "g",
    "ᶃ": "g",
    "ǥ": "g",
    "ḫ": "h",
    "ȟ": "h",
    "ḩ": "h",
    "ĥ": "h",
    "ⱨ": "h",
    "ḧ": "h",
    "ḣ": "h",
    "ḥ": "h",
    "ɦ": "H",
    "ẖ": "h",
    "ħ": "h",
    "ƕ": "hv",
    "í": "i",
    "ĭ": "i",
    "ǐ": "i",
    "î": "i",
    "ï": "i",
    "ḯ": "i",
    "ị": "i",
    "ȉ": "i",
    "ì": "i",
    "ỉ": "i",
    "ȋ": "i",
    "ī": "i",
    "į": "I",
    "ᶖ": "i",
    "ɨ": "I",
    "ĩ": "i",
    "ḭ": "i",
    "ꝺ": "d",
    "ꝼ": "f",
    "ᵹ": "g",
    "ꞃ": "r",
    "ꞅ": "s",
    "ꞇ": "t",
    "ꝭ": "is",
    "ǰ": "j",
    "ĵ": "j",
    "ʝ": "j",
    "ɉ": "j",
    "ḱ": "k",
    "ǩ": "k",
    "ķ": "k",
    "ⱪ": "k",
    "ꝃ": "k",
    "ḳ": "k",
    "ƙ": "k",
    "ḵ": "k",
    "ᶄ": "k",
    "ꝁ": "k",
    "ꝅ": "k",
    "ĺ": "l",
    "ƚ": "t",
    "ɬ": "T",
    "ľ": "l",
    "ļ": "l",
    "ḽ": "l",
    "ȴ": "l",
    "ḷ": "l",
    "ḹ": "l",
    "ⱡ": "l",
    "ꝉ": "l",
    "ḻ": "l",
    "ŀ": "l",
    "ɫ": "l",
    "ᶅ": "l",
    "ɭ": "L",
    "ł": "I",
    "ǉ": "lj",
    "ſ": "s",
    "ẜ": "s",
    "ẛ": "s",
    "ẝ": "s",
    "ḿ": "m",
    "ṁ": "m",
    "ṃ": "m",
    "ɱ": "m",
    "ᵯ": "m",
    "ᶆ": "m",
    "ń": "n",
    "ň": "n",
    "ņ": "n",
    "ṋ": "n",
    "ȵ": "n",
    "ṅ": "n",
    "ṇ": "n",
    "ǹ": "n",
    "ɲ": "n",
    "ṉ": "n",
    "ƞ": "n",
    "ᵰ": "n",
    "ᶇ": "n",
    "ɳ": "n",
    "ñ": "N",
    "ǌ": "nj",
    "ó": "o",
    "ŏ": "o",
    "ǒ": "o",
    "ô": "o",
    "ố": "o",
    "ộ": "o",
    "ồ": "o",
    "ổ": "o",
    "ỗ": "o",
    "ö": "o",
    "ȫ": "o",
    "ȯ": "o",
    "ȱ": "o",
    "ọ": "o",
    "ő": "o",
    "ȍ": "o",
    "ò": "o",
    "ỏ": "o",
    "ơ": "O",
    "ớ": "o",
    "ợ": "Q",
    "ờ": "o",
    "ở": "o",
    "ỡ": "o",
    "ȏ": "o",
    "ꝋ": "o",
    "ꝍ": "o",
    "ⱺ": "o",
    "ō": "o",
    "ṓ": "o",
    "ṑ": "o",
    "ǫ": "o",
    "ǭ": "o",
    "ø": "o",
    "ǿ": "o",
    "õ": "o",
    "ṍ": "o",
    "ṏ": "o",
    "ȭ": "o",
    "ƣ": "oi",
    "ꝏ": "oo",
    "ɛ": "E",
    "ᶓ": "e",
    "ɔ": "o",
    "ᶗ": "o",
    "ȣ": "ou",
    "ṕ": "p",
    "ṗ": "p",
    "ꝓ": "p",
    "ƥ": "p",
    "ᵱ": "p",
    "ᶈ": "p",
    "ꝕ": "p",
    "ᵽ": "p",
    "ꝑ": "p",
    "ꝙ": "q",
    "ʠ": "q",
    "ɋ": "q",
    "ꝗ": "q",
    "ŕ": "r",
    "ř": "r",
    "ŗ": "r",
    "ṙ": "r",
    "ṛ": "r",
    "ṝ": "r",
    "ȑ": "r",
    "ɾ": "r",
    "ᵳ": "r",
    "ȓ": "r",
    "ṟ": "r",
    "ɼ": "r",
    "ᵲ": "r",
    "ᶉ": "r",
    "ɍ": "r",
    "ɽ": "r",
    "ↄ": "c",
    "ꜿ": "c",
    "ɘ": "e",
    "ɿ": "r",
    "ś": "s",
    "ṥ": "s",
    "š": "s",
    "ṧ": "s",
    "ş": "s",
    "ŝ": "s",
    "ș": "s",
    "ṡ": "s",
    "ṣ": "s",
    "ṩ": "s",
    "ʂ": "s",
    "ᵴ": "s",
    "ᶊ": "s",
    "ȿ": "s",
    "ɡ": "g",
    "ᴑ": "o",
    "ᴓ": "o",
    "ᴝ": "u",
    "ť": "t",
    "ţ": "t",
    "ṱ": "t",
    "ț": "t",
    "ȶ": "T",
    "ẗ": "t",
    "ⱦ": "t",
    "ṫ": "t",
    "ṭ": "t",
    "ƭ": "t",
    "ṯ": "t",
    "ᵵ": "t",
    "ƫ": "t",
    "ʈ": "t",
    "ŧ": "t",
    "ᵺ": "th",
    "ɐ": "a",
    "ᴂ": "ae",
    "ǝ": "e",
    "ᵷ": "g",
    "ɥ": "h",
    "ʮ": "h",
    "ʯ": "h",
    "ᴉ": "i",
    "ʞ": "k",
    "ꞁ": "l",
    "ɯ": "w",
    "ɰ": "m",
    "ᴔ": "oe",
    "ɹ": "r",
    "ɻ": "r",
    "ɺ": "r",
    "ⱹ": "r",
    "ʇ": "t",
    "ʌ": "v",
    "ʍ": "m",
    "ʎ": "y",
    "ꜩ": "tz",
    "ú": "u",
    "ŭ": "u",
    "ǔ": "u",
    "û": "u",
    "ṷ": "u",
    "ü": "u",
    "ǘ": "u",
    "ǚ": "u",
    "ǜ": "u",
    "ǖ": "u",
    "ṳ": "u",
    "ụ": "u",
    "ű": "u",
    "ȕ": "u",
    "ù": "u",
    "ủ": "u",
    "ư": "u",
    "ứ": "u",
    "ự": "u",
    "ừ": "u",
    "ử": "u",
    "ữ": "u",
    "ȗ": "u",
    "ū": "u",
    "ṻ": "u",
    "ų": "U",
    "ᶙ": "u",
    "ů": "u",
    "ũ": "u",
    "ṹ": "u",
    "ṵ": "u",
    "ᵫ": "ue",
    "ꝸ": "um",
    "ⱴ": "v",
    "ꝟ": "v",
    "ṿ": "v",
    "ʋ": "v",
    "ᶌ": "v",
    "ⱱ": "v",
    "ṽ": "v",
    "ꝡ": "vy",
    "ẃ": "w",
    "ŵ": "w",
    "ẅ": "w",
    "ẇ": "w",
    "ẉ": "w",
    "ẁ": "w",
    "ⱳ": "w",
    "ẘ": "w",
    "ẍ": "x",
    "ẋ": "x",
    "ᶍ": "x",
    "ý": "y",
    "ŷ": "y",
    "ÿ": "y",
    "ẏ": "y",
    "ỵ": "y",
    "ỳ": "y",
    "ƴ": "y",
    "ỷ": "y",
    "ỿ": "y",
    "ȳ": "y",
    "ẙ": "y",
    "ɏ": "y",
    "ỹ": "y",
    "ź": "z",
    "ž": "z",
    "ẑ": "z",
    "ʑ": "Z",
    "ⱬ": "z",
    "ż": "z",
    "ẓ": "z",
    "ȥ": "z",
    "ẕ": "z",
    "ᵶ": "z",
    "ᶎ": "z",
    "ʐ": "Z",
    "ƶ": "z",
    "ɀ": "Z",
    "þ": "P",
    "ﬀ": "ff",
    "ﬃ": "ffi",
    "ﬄ": "ffl",
    "ﬁ": "fi",
    "ﬂ": "fl",
    "ĳ": "ij",
    "œ": "oe",
    "ﬆ": "st",
    "ₐ": "A",
    "ₑ": "E",
    "ᵢ": "I",
    "ⱼ": "J",
    "ₒ": "O",
    "ᵣ": "R",
    "ᵤ": "U",
    "ᵥ": "V",
    "ₓ": "X",
    "Ё": "YO",
    "Й": "I",
    "Ц": "U",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "Щ": "W",
    "З": "Z",
    "Х": "H",
    "Ъ": "'",
    "ё": "yo",
    "й": "i",
    "ц": "ts",
    "у": "Y",
    "к": "K",
    "е": "e",
    "н": "H",
    "г": "R",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "ъ": "'",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "a",
    "П": "N",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "Э": "E",
    "ф": "f",
    "ы": "i",
    "в": "B",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "э": "e",
    "Я": "R",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "'",
    "Б": "B",
    "Ю": "YU",
    "я": "R",
    "ч": "ch",
    "с": "s",
    "м": "M",
    "и": "i",
    "т": "T",
    "ь": "'",
    "б": "b",
    "ю": "yu",
    "𝟘": "0",
    "𝟙": "1",
    "𝟚": "2",
    "𝟛": "3",
    "𝟜": "4",
    "𝟝": "5",
    "𝟞": "6",
    "𝟟": "7",
    "𝟠": "8",
    "𝟡": "9",
    "ꪖ": "A",
    "᥇": "B",
    "ᥴ": "C",
    "ᦔ": "D",
    "ꫀ": "E",
    "ᠻ": "F",
    "ᧁ": "G",
    "ꫝ": "H",
    "ⅈ": "I",
    "𝕛": "j",
    "𝕜": "k",
    "ꪶ": "L",
    "ꪑ": "M",
    "ꪀ": "N",
    "ꪮ": "O",
    "ρ": "P",
    "𝕢": "q",
    "𝕣": "r",
    "ડ": "S",
    "𝕥": "t",
    "ꪊ": "U",
    "ꪜ": "V",
    "᭙": "W",
    "᥊": "X",
    "ꪗ": "Y",
    "𝕫": "z",
    "ᗩ": "A",
    "ᗷ": "B",
    "ᑢ": "C",
    "ᕲ": "D",
    "ᘿ": "E",
    "ᖴ": "F",
    "ᘜ": "G",
    "ᕼ": "H",
    "ᓰ": "I",
    "ᒚ": "J",
    "ᖽᐸ": "K",
    "ᒪ": "L",
    "ᘻ": "M",
    "ᘉ": "N",
    "ᓍ": "O",
    "ᕵ": "P",
    "ᕴ": "Q",
    "ᖇ": "R",
    "ᖶ": "T",
    "ᑘ": "U",
    "ᐺ": "V",
    "ᘺ": "W",
    "᙭": "X",
    "ᖻ": "Y",
    "ᗱ": "Z",
    "ค": "A",
    "๖": "B",
    "¢": "C",
    "໓": "D",
    "ງ": "G",
    "ว": "J",
    "๓": "M",
    "ຖ": "N",
    "໐": "O",
    "๑": "Q",
    "r": "r",
    "น": "U",
    "ง": "V",
    "ຟ": "W",
    "x": "x",
    "ฯ": "Y",
    "ຊ": "Z",
    "ც": "B",
    "ɧ": "H",
    "Ɩ": "L",
    "ŋ": "N",
    "℘": "P",
    "զ": "q",
    "ཞ": "R",
    "۷": "V",
    "ῳ": "W",
    "ҳ": "X",
    "ყ": "y",
    "ﾑ": "A",
    "乃": "B",
    "ᄃ": "C",
    "り": "D",
    "乇": "E",
    "ｷ": "F",
    "ム": "G",
    "ん": "H",
    "ﾉ": "I",
    "ﾌ": "J",
    "ズ": "K",
    "ﾚ": "L",
    "ﾶ": "M",
    "刀": "N",
    "の": "O",
    "ｱ": "P",
    "ゐ": "Q",
    "尺": "R",
    "丂": "S",
    "ｲ": "T",
    "ひ": "U",
    "√": "V",
    "ﾒ": "X",
    "ﾘ": "Y",
    "乙": "Z",
    "卂": "A",
    "匚": "C",
    "ᗪ": "D",
    "千": "F",
    "Ꮆ": "G",
    "卄": "H",
    "丨": "I",
    "Ҝ": "K",
    "ㄥ": "L",
    "爪": "M",
    "几": "N",
    "ㄖ": "O",
    "卩": "P",
    "Ɋ": "Q",
    "ㄒ": "T",
    "ㄩ": "U",
    "ᐯ": "V",
    "山": "W",
    "乂": "X",
    "ㄚ": "Y",
    "🄰": "A",
    "🄱": "B",
    "🄲": "C",
    "🄳": "D",
    "🄴": "E",
    "🄵": "F",
    "🄶": "G",
    "🄷": "H",
    "🄸": "I",
    "🄹": "J",
    "🄺": "K",
    "🄻": "L",
    "🄼": "M",
    "🄽": "N",
    "🄾": "O",
    "🄿": "P",
    "🅀": "Q",
    "🅁": "R",
    "🅂": "S",
    "🅃": "T",
    "🅄": "U",
    "🅅": "V",
    "🅆": "W",
    "🅇": "X",
    "🅈": "Y",
    "🅉": "Z",
    "Ꮧ": "A",
    "Ᏸ": "B",
    "ፈ": "C",
    "Ꮄ": "D",
    "Ꮛ": "E",
    "Ꭶ": "F",
    "Ꮒ": "H",
    "Ꭵ": "I",
    "Ꮰ": "J",
    "Ꮶ": "K",
    "Ꮭ": "L",
    "Ꮇ": "M",
    "Ꮑ": "N",
    "Ꭷ": "O",
    "Ꭾ": "P",
    "Ꭴ": "Q",
    "Ꮢ": "R",
    "Ꮥ": "S",
    "Ꮦ": "T",
    "Ꮼ": "U",
    "Ꮙ": "V",
    "Ꮗ": "W",
    "ጀ": "X",
    "Ꭹ": "Y",
    "ፚ": "Z",
    "ᑕ": "C",
    "ᒍ": "J",
    "ᗰ": "M",
    "ᑎ": "N",
    "ᑭ": "P",
    "ᑫ": "Q",
    "ᔕ": "S",
    "ᑌ": "U",
    "ᗯ": "W",
    "ᘔ": "Z",
    "ɮ": "B",
    "ӄ": "K",
    "ռ": "N",
    "օ": "o",
    "ք": "p",
    "ֆ": "S",
    "ʊ": "U",
    "ա": "w",
    "Ӽ": "X",
    "𝟶": "0",
    "𝟷": "1",
    "𝟸": "2",
    "𝟹": "3",
    "𝟺": "4",
    "𝟻": "5",
    "𝟼": "6",
    "𝟽": "7",
    "𝟾": "8",
    "𝟿": "9",
    "𝚊": "a",
    "𝚋": "b",
    "𝚌": "c",
    "𝚍": "d",
    "𝚎": "e",
    "𝚏": "f",
    "𝚐": "g",
    "𝚑": "h",
    "𝚒": "i",
    "𝚓": "j",
    "𝚔": "k",
    "𝚕": "l",
    "𝚖": "m",
    "𝚗": "n",
    "𝚘": "o",
    "𝚙": "p",
    "𝚚": "q",
    "𝚛": "r",
    "𝚜": "s",
    "𝚝": "t",
    "𝚞": "u",
    "𝚟": "v",
    "𝚠": "w",
    "𝚡": "x",
    "𝚢": "y",
    "𝚣": "z",
    "𝙰": "A",
    "𝙱": "B",
    "𝙲": "C",
    "𝙳": "D",
    "𝙴": "E",
    "𝙵": "F",
    "𝙶": "G",
    "𝙷": "H",
    "𝙸": "I",
    "𝙹": "J",
    "𝙺": "K",
    "𝙻": "L",
    "𝙼": "M",
    "𝙽": "N",
    "𝙾": "O",
    "𝙿": "P",
    "𝚀": "Q",
    "𝚁": "R",
    "𝚂": "S",
    "𝚃": "T",
    "𝚄": "U",
    "𝚅": "V",
    "𝚆": "W",
    "𝚇": "X",
    "𝚈": "Y",
    "𝚉": "Z",
    "𝙖": "a",
    "𝙗": "b",
    "𝙘": "c",
    "𝙙": "d",
    "𝙚": "e",
    "𝙛": "f",
    "𝙜": "g",
    "𝙝": "h",
    "𝙞": "i",
    "𝙟": "j",
    "𝙠": "k",
    "𝙡": "l",
    "𝙢": "m",
    "𝙣": "n",
    "𝙤": "o",
    "𝙥": "p",
    "𝙦": "q",
    "𝙧": "r",
    "𝙨": "s",
    "𝙩": "t",
    "𝙪": "u",
    "𝙫": "v",
    "𝙬": "w",
    "𝙭": "x",
    "𝙮": "y",
    "𝙯": "z",
    "𝘼": "A",
    "𝘽": "B",
    "𝘾": "C",
    "𝘿": "D",
    "𝙀": "E",
    "𝙁": "F",
    "𝙂": "G",
    "𝙃": "H",
    "𝙄": "I",
    "𝙅": "J",
    "𝙆": "K",
    "𝙇": "L",
    "𝙈": "M",
    "𝙉": "N",
    "𝙊": "O",
    "𝙋": "P",
    "𝙌": "Q",
    "𝙍": "R",
    "𝙎": "S",
    "𝙏": "T",
    "𝙐": "U",
    "𝙑": "V",
    "𝙒": "W",
    "𝙓": "X",
    "𝙔": "Y",
    "𝙕": "Z",
    "𝒂": "a",
    "𝒃": "b",
    "𝒄": "c",
    "𝒅": "d",
    "𝒆": "e",
    "𝒇": "f",
    "𝒈": "g",
    "𝒉": "h",
    "𝒊": "i",
    "𝒋": "j",
    "𝒌": "k",
    "𝒍": "l",
    "𝒎": "m",
    "𝒏": "n",
    "𝒐": "o",
    "𝒑": "p",
    "𝒒": "q",
    "𝒓": "r",
    "𝒔": "s",
    "𝒕": "t",
    "𝒖": "u",
    "𝒗": "v",
    "𝒘": "w",
    "𝒙": "x",
    "𝒚": "y",
    "𝒛": "z",
    "𝑨": "A",
    "𝑩": "B",
    "𝑪": "C",
    "𝑫": "D",
    "𝑬": "E",
    "𝑭": "F",
    "𝑮": "G",
    "𝑯": "H",
    "𝑰": "I",
    "𝑱": "J",
    "𝑲": "K",
    "𝑳": "L",
    "𝑴": "M",
    "𝑵": "N",
    "𝑶": "O",
    "𝑷": "P",
    "𝑸": "Q",
    "𝑹": "R",
    "𝑺": "S",
    "𝑻": "T",
    "𝑼": "U",
    "𝑽": "V",
    "𝑾": "W",
    "𝑿": "X",
    "𝒀": "Y",
    "𝒁": "Z",
    "𝟎": "0",
    "𝟏": "1",
    "𝟐": "2",
    "𝟑": "3",
    "𝟒": "4",
    "𝟓": "5",
    "𝟔": "6",
    "𝟕": "7",
    "𝟖": "8",
    "𝟗": "9",
    "𝐚": "a",
    "𝐛": "b",
    "𝐜": "c",
    "𝐝": "d",
    "𝐞": "e",
    "𝐟": "f",
    "𝐠": "g",
    "𝐡": "h",
    "𝐢": "i",
    "𝐣": "j",
    "𝐤": "k",
    "𝐥": "l",
    "𝐦": "m",
    "𝐧": "n",
    "𝐨": "o",
    "𝐩": "p",
    "𝐪": "q",
    "𝐫": "r",
    "𝐬": "s",
    "𝐭": "t",
    "𝐮": "u",
    "𝐯": "v",
    "𝐰": "w",
    "𝐱": "x",
    "𝐲": "y",
    "𝐳": "z",
    "𝐀": "A",
    "𝐁": "B",
    "𝐂": "C",
    "𝐃": "D",
    "𝐄": "E",
    "𝐅": "F",
    "𝐆": "G",
    "𝐇": "H",
    "𝐈": "I",
    "𝐉": "J",
    "𝐊": "K",
    "𝐋": "L",
    "𝐌": "M",
    "𝐍": "N",
    "𝐎": "O",
    "𝐏": "P",
    "𝐐": "Q",
    "𝐑": "R",
    "𝐒": "S",
    "𝐓": "T",
    "𝐔": "U",
    "𝐕": "V",
    "𝐖": "W",
    "𝐗": "X",
    "𝐘": "Y",
    "𝐙": "Z",
    "𝟬": "0",
    "𝟭": "1",
    "𝟮": "2",
    "𝟯": "3",
    "𝟰": "4",
    "𝟱": "5",
    "𝟲": "6",
    "𝟳": "7",
    "𝟴": "8",
    "𝟵": "9",
    "𝗮": "a",
    "𝗯": "b",
    "𝗰": "c",
    "𝗱": "d",
    "𝗲": "e",
    "𝗳": "f",
    "𝗴": "g",
    "𝗵": "h",
    "𝗶": "i",
    "𝗷": "j",
    "𝗸": "k",
    "𝗹": "l",
    "𝗺": "m",
    "𝗻": "n",
    "𝗼": "o",
    "𝗽": "p",
    "𝗾": "q",
    "𝗿": "r",
    "𝘀": "s",
    "𝘁": "t",
    "𝘂": "u",
    "𝘃": "v",
    "𝘄": "w",
    "𝘅": "x",
    "𝘆": "y",
    "𝘇": "z",
    "𝗔": "A",
    "𝗕": "B",
    "𝗖": "C",
    "𝗗": "D",
    "𝗘": "E",
    "𝗙": "F",
    "𝗚": "G",
    "𝗛": "H",
    "𝗜": "I",
    "𝗝": "J",
    "𝗞": "K",
    "𝗟": "L",
    "𝗠": "M",
    "𝗡": "N",
    "𝗢": "O",
    "𝗣": "P",
    "𝗤": "Q",
    "𝗥": "R",
    "𝗦": "S",
    "𝗧": "T",
    "𝗨": "U",
    "𝗩": "V",
    "𝗪": "W",
    "𝗫": "X",
    "𝗬": "Y",
    "𝗭": "Z",
    "𝘢": "a",
    "𝘣": "b",
    "𝘤": "c",
    "𝘥": "d",
    "𝘦": "e",
    "𝘧": "f",
    "𝘨": "g",
    "𝘩": "h",
    "𝘪": "i",
    "𝘫": "j",
    "𝘬": "k",
    "𝘭": "l",
    "𝘮": "m",
    "𝘯": "n",
    "𝘰": "o",
    "𝘱": "p",
    "𝘲": "q",
    "𝘳": "r",
    "𝘴": "s",
    "𝘵": "t",
    "𝘶": "u",
    "𝘷": "v",
    "𝘸": "w",
    "𝘹": "x",
    "𝘺": "y",
    "𝘻": "z",
    "𝘈": "A",
    "𝘉": "B",
    "𝘊": "C",
    "𝘋": "D",
    "𝘌": "E",
    "𝘍": "F",
    "𝘎": "G",
    "𝘏": "H",
    "𝘐": "I",
    "𝘑": "J",
    "𝘒": "K",
    "𝘓": "L",
    "𝘔": "M",
    "𝘕": "N",
    "𝘖": "O",
    "𝘗": "P",
    "𝘘": "Q",
    "𝘙": "R",
    "𝘚": "S",
    "𝘛": "T",
    "𝘜": "U",
    "𝘝": "V",
    "𝘞": "W",
    "𝘟": "X",
    "𝘠": "Y",
    "𝘡": "Z",
    "α": "A",
    "Ⴆ": "b",
    "ԃ": "d",
    "ҽ": "e",
    "ϝ": "f",
    "ԋ": "h",
    "ι": "I",
    "ʅ": "l",
    "σ": "O",
    "ϙ": "q",
    "υ": "U",
    "₳": "A",
    "฿": "B",
    "₵": "C",
    "₣": "F",
    "₲": "G",
    "₭": "K",
    "₥": "M",
    "₦": "N",
    "₱": "P",
    "₴": "S",
    "₮": "T",
    "Ʉ": "U",
    "₩": "W",
    "Ӿ": "X",
    "£": "F",
    "g": "g",
    "j": "j",
    "m": "m",
    "q": "q",
    "§": "S",
    "†": "T",
    "µ": "u",
    "v": "v",
    "w": "w",
    "¥": "Y",
    "z": "z",
    "×": "x",
    "∂": "D",
    "є": "E",
    "נ": "J",
    "ℓ": "L",
    "η": "N",
    "ѕ": "S",
    "ν": "V",
    "ω": "W",
    "χ": "X",
    "⊘": "0",
    "ϩ": "2",
    "Ӡ": "3",
    "५": "4",
    "Ƽ": "5",
    "Ϭ": "6",
    "९": "9",
    "ҍ": "b",
    "ժ": "d",
    "ց": "g",
    "հ": "h",
    "ҟ": "k",
    "Ӏ": "l",
    "ղ": "n",
    "է": "t",
    "մ": "u",
    "ѵ": "v",
    "վ": "y",
    "Հ": "z",
    "β": "B",
    "↻": "C",
    "Ꭰ": "D",
    "Ƕ": "H",
    "ل": "J",
    "Ҡ": "K",
    "ហ": "N",
    "ට": "O",
    "φ": "P",
    "Ҩ": "Q",
    "འ": "R",
    "Ϛ": "S",
    "Ͳ": "T",
    "Ա": "U",
    "Ỽ": "V",
    "చ": "W",
    "ჯ": "X",
    "Ӌ": "Y",
    "Λ": "A",
    "Σ": "E",
    "Ή": "H",
    "ᄂ": "L",
    "Ө": "O",
    "Ƨ": "S",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    "ₕ": "H",
    "ₖ": "K",
    "ₗ": "L",
    "ₘ": "M",
    "ₙ": "N",
    "ₚ": "P",
    "ₛ": "S",
    "ₜ": "T",
    "y": "y",
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    "ᵃ": "a",
    "ᵇ": "b",
    "ᶜ": "C",
    "ᵈ": "d",
    "ᵉ": "e",
    "ᶠ": "F",
    "ᵍ": "g",
    "ʰ": "h",
    "ⁱ": "i",
    "ʲ": "j",
    "ᵏ": "k",
    "ˡ": "l",
    "ᵐ": "m",
    "ⁿ": "n",
    "ᵒ": "o",
    "ᵖ": "p",
    "ʳ": "r",
    "ˢ": "S",
    "ᵗ": "t",
    "ᵘ": "u",
    "ᵛ": "v",
    "ʷ": "w",
    "ˣ": "X",
    "ʸ": "Y",
    "ᶻ": "Z",
    "ᴬ": "A",
    "ᴮ": "B",
    "ᴰ": "D",
    "ᴱ": "E",
    "ᴳ": "G",
    "ᴴ": "H",
    "ᴵ": "I",
    "ᴶ": "J",
    "ᴷ": "K",
    "ᴸ": "L",
    "ᴹ": "M",
    "ᴺ": "N",
    "ᴼ": "O",
    "ᴾ": "P",
    "ᴿ": "R",
    "ᵀ": "T",
    "ᵁ": "U",
    "ⱽ": "V",
    "ᵂ": "W",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "๒": "B",
    "ς": "C",
    "๔": "D",
    "ﻮ": "G",
    "ђ": "H",
    "เ": "I",
    "ן": "J",
    "ภ": "N",
    "๏": "O",
    "ק": "P",
    "ร": "S",
    "Շ": "T",
    "ย": "U",
    "ש": "V",
    "ฬ": "W",
    "א": "X",
    "ץ": "Y",
    "չ": "Z",
    "𝕒": "a",
    "𝕓": "b",
    "𝕔": "c",
    "𝕕": "d",
    "𝕖": "e",
    "𝕗": "f",
    "𝕘": "g",
    "𝕙": "h",
    "𝕚": "i",
    "𝕝": "l",
    "𝕞": "m",
    "𝕟": "n",
    "𝕠": "o",
    "𝕡": "p",
    "𝕤": "s",
    "𝕦": "u",
    "𝕧": "v",
    "𝕨": "w",
    "𝕩": "x",
    "𝕪": "y",
    "𝔸": "A",
    "𝔹": "B",
    "ℂ": "C",
    "𝔻": "D",
    "𝔼": "E",
    "𝔽": "F",
    "𝔾": "G",
    "ℍ": "H",
    "𝕀": "I",
    "𝕁": "J",
    "𝕂": "K",
    "𝕃": "L",
    "𝕄": "M",
    "ℕ": "N",
    "𝕆": "O",
    "ℙ": "P",
    "ℚ": "Q",
    "ℝ": "R",
    "𝕊": "S",
    "𝕋": "T",
    "𝕌": "U",
    "𝕍": "V",
    "𝕎": "W",
    "𝕏": "X",
    "𝕐": "Y",
    "ℤ": "Z",
    "𝖆": "a",
    "𝖇": "b",
    "𝖈": "c",
    "𝖉": "d",
    "𝖊": "e",
    "𝖋": "f",
    "𝖌": "g",
    "𝖍": "h",
    "𝖎": "i",
    "𝖏": "j",
    "𝖐": "k",
    "𝖑": "l",
    "𝖒": "m",
    "𝖓": "n",
    "𝖔": "o",
    "𝖕": "p",
    "𝖖": "q",
    "𝖗": "r",
    "𝖘": "s",
    "𝖙": "t",
    "𝖚": "u",
    "𝖛": "v",
    "𝖜": "w",
    "𝖝": "x",
    "𝖞": "y",
    "𝖟": "z",
    "𝕬": "A",
    "𝕭": "B",
    "𝕮": "C",
    "𝕯": "D",
    "𝕰": "E",
    "𝕱": "F",
    "𝕲": "G",
    "𝕳": "H",
    "𝕴": "I",
    "𝕵": "J",
    "𝕶": "K",
    "𝕷": "L",
    "𝕸": "M",
    "𝕹": "N",
    "𝕺": "O",
    "𝕻": "P",
    "𝕼": "Q",
    "𝕽": "R",
    "𝕾": "S",
    "𝕿": "T",
    "𝖀": "U",
    "𝖁": "V",
    "𝖂": "W",
    "𝖃": "X",
    "𝖄": "Y",
    "𝖅": "Z",
    "🆀": "q",
    "🆆": "w",
    "🅴": "e",
    "🆁": "r",
    "🆃": "t",
    "🆈": "y",
    "🆄": "u",
    "🅸": "i",
    "🅾": "o",
    "🅿": "p",
    "🅰": "a",
    "🆂": "s",
    "🅳": "d",
    "🅵": "f",
    "🅶": "g",
    "🅷": "h",
    "🅹": "j",
    "🅺": "k",
    "🅻": "l",
    "🆉": "z",
    "🆇": "x",
    "🅲": "c",
    "🆅": "v",
    "🅱": "b",
    "🅽": "n",
    "🅼": "m",
    "𝓪": "a",
    "𝓫": "b",
    "𝓬": "c",
    "𝓭": "d",
    "𝓮": "e",
    "𝓯": "f",
    "𝓰": "g",
    "𝓱": "h",
    "𝓲": "i",
    "𝓳": "j",
    "𝓴": "k",
    "𝓵": "l",
    "𝓶": "m",
    "𝓷": "n",
    "𝓸": "o",
    "𝓹": "p",
    "𝓺": "q",
    "𝓻": "r",
    "𝓼": "s",
    "𝓽": "t",
    "𝓾": "u",
    "𝓿": "v",
    "𝔀": "w",
    "𝔁": "x",
    "𝔂": "y",
    "𝔃": "z",
    "𝓐": "A",
    "𝓑": "B",
    "𝓒": "C",
    "𝓓": "D",
    "𝓔": "E",
    "𝓕": "F",
    "𝓖": "G",
    "𝓗": "H",
    "𝓘": "I",
    "𝓙": "J",
    "𝓚": "K",
    "𝓛": "L",
    "𝓜": "M",
    "𝓝": "N",
    "𝓞": "O",
    "𝓟": "P",
    "𝓠": "Q",
    "𝓡": "R",
    "𝓢": "S",
    "𝓣": "T",
    "𝓤": "U",
    "𝓥": "V",
    "𝓦": "W",
    "𝓧": "X",
    "𝓨": "Y",
    "𝓩": "Z",
    "𝔞": "a",
    "𝔟": "b",
    "𝔠": "c",
    "𝔡": "d",
    "𝔢": "e",
    "𝔣": "f",
    "𝔤": "g",
    "𝔥": "h",
    "𝔦": "i",
    "𝔧": "j",
    "𝔨": "k",
    "𝔩": "l",
    "𝔪": "m",
    "𝔫": "n",
    "𝔬": "o",
    "𝔭": "p",
    "𝔮": "q",
    "𝔯": "r",
    "𝔰": "s",
    "𝔱": "t",
    "𝔲": "u",
    "𝔳": "v",
    "𝔴": "w",
    "𝔵": "x",
    "𝔶": "y",
    "𝔷": "z",
    "𝔄": "A",
    "𝔅": "B",
    "ℭ": "C",
    "𝔇": "D",
    "𝔈": "E",
    "𝔉": "F",
    "𝔊": "G",
    "ℌ": "H",
    "ℑ": "I",
    "𝔍": "J",
    "𝔎": "K",
    "𝔏": "L",
    "𝔐": "M",
    "𝔑": "N",
    "𝔒": "O",
    "𝔓": "P",
    "𝔔": "Q",
    "ℜ": "R",
    "𝔖": "S",
    "𝔗": "T",
    "𝔘": "U",
    "𝔙": "V",
    "𝔚": "W",
    "𝔛": "X",
    "𝔜": "Y",
    "ℨ": "Z",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "ｑ": "q",
    "ｗ": "w",
    "ｅ": "e",
    "ｒ": "r",
    "ｔ": "t",
    "ｙ": "y",
    "ｕ": "u",
    "ｉ": "i",
    "ｏ": "o",
    "ｐ": "p",
    "Ｑ": "Q",
    "Ｗ": "W",
    "Ｅ": "E",
    "Ｒ": "R",
    "Ｔ": "T",
    "Ｙ": "Y",
    "Ｕ": "U",
    "Ｉ": "I",
    "Ｏ": "O",
    "Ｐ": "P",
    "{": "{",
    "}": "}",
    "|": "|",
    "ａ": "a",
    "ｓ": "s",
    "ｄ": "d",
    "ｆ": "f",
    "ｇ": "g",
    "ｈ": "h",
    "ｊ": "j",
    "ｋ": "k",
    "ｌ": "l",
    "；": ";",
    "＇": "'",
    "Ａ": "A",
    "Ｓ": "S",
    "Ｄ": "D",
    "Ｆ": "F",
    "Ｇ": "G",
    "Ｈ": "H",
    "Ｊ": "J",
    "Ｋ": "K",
    "Ｌ": "L",
    "：": ":",
    "ｚ": "z",
    "ｘ": "x",
    "ｃ": "c",
    "ｖ": "v",
    "ｂ": "b",
    "ｎ": "n",
    "ｍ": "m",
    "，": ",",
    "．": ".",
    "／": "/",
    "Ｚ": "Z",
    "Ｘ": "X",
    "Ｃ": "C",
    "Ｖ": "V",
    "Ｂ": "B",
    "Ｎ": "N",
    "Ｍ": "M",
    "𝒬": "Q",
    "𝒲": "W",
    "𝐸": "E",
    "𝑅": "R",
    "𝒯": "T",
    "𝒴": "Y",
    "𝒰": "U",
    "𝐼": "I",
    "𝒪": "O",
    "𝒫": "P",
    "𝒜": "A",
    "𝒮": "S",
    "𝒟": "D",
    "𝐹": "F",
    "𝒢": "G",
    "𝐻": "H",
    "𝒥": "J",
    "𝒦": "K",
    "𝐿": "L",
    "𝒵": "Z",
    "𝒳": "X",
    "𝒞": "C",
    "𝒱": "V",
    "𝐵": "B",
    "𝒩": "N",
    "𝑀": "M",
    "𝓆": "q",
    "𝓌": "w",
    "𝑒": "e",
    "𝓇": "r",
    "𝓉": "t",
    "𝓎": "y",
    "𝓊": "u",
    "𝒾": "i",
    "𝑜": "o",
    "𝓅": "p",
    "𝒶": "a",
    "𝓈": "s",
    "𝒹": "d",
    "𝒻": "f",
    "𝑔": "g",
    "𝒽": "h",
    "𝒿": "j",
    "𝓀": "k",
    "𝓁": "l",
    "𝓏": "z",
    "𝓍": "x",
    "𝒸": "c",
    "𝓋": "v",
    "𝒷": "b",
    "𝓃": "n",
    "𝓂": "m",
    "Q": "Q",
    "Ⓠ": "Q",
    "Ⓦ": "W",
    "Ⓔ": "E",
    "Ⓡ": "R",
    "Ⓣ": "T",
    "Ⓨ": "Y",
    "Ⓤ": "U",
    "Ⓘ": "I",
    "Ⓞ": "O",
    "Ⓟ": "P",
    "Ⓐ": "A",
    "Ⓢ": "S",
    "Ⓓ": "D",
    "Ⓕ": "F",
    "Ⓖ": "G",
    "Ⓗ": "H",
    "Ⓙ": "J",
    "Ⓚ": "K",
    "Ⓛ": "L",
    "Ⓩ": "Z",
    "Ⓧ": "X",
    "Ⓒ": "C",
    "Ⓥ": "V",
    "Ⓑ": "B",
    "Ⓝ": "N",
    "Ⓜ": "M",
    "ⓠ": "q",
    "ⓦ": "w",
    "ⓔ": "e",
    "ⓡ": "r",
    "ⓣ": "t",
    "ⓨ": "y",
    "ⓤ": "u",
    "ⓘ": "i",
    "ⓞ": "o",
    "ⓟ": "p",
    "ⓐ": "a",
    "ⓢ": "s",
    "ⓓ": "d",
    "ⓕ": "f",
    "ⓖ": "g",
    "ⓗ": "h",
    "ⓙ": "j",
    "ⓚ": "k",
    "ⓛ": "l",
    "ⓩ": "z",
    "ⓧ": "x",
    "ⓒ": "c",
    "ⓥ": "v",
    "ⓑ": "b",
    "ⓝ": "n",
    "ⓜ": "m"
}
export default Latinize

