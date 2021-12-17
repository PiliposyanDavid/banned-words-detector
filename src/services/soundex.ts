class Soundex {
    getCode(word: string): string {
        if (!word) return "000";
        let a = word.toLowerCase().split('');
        let f = a.shift()
        let r = '';
        let codes: { [key: string]: any; } = {
            a: '',
            e: '',
            i: '',
            o: '',
            u: '',

            b: 1,
            p: 1,

            f: 2,
            v: 2,

            c: 3,
            k: 3,
            s: 3,


            g: 4,
            j: 4,

            q: 5,
            x: 5,
            z: 5,

            d: 6,
            t: 6,

            l: 7,

            m: 8,
            n: 8,

            r: 9
        };

        r = f + a
            .map((v, i, a) => codes[v])
            .filter((v, i, a) => f && ((i === 0) ? v !== codes[f] : v !== a[i - 1]))
            .join('');

        return (r + '000').slice(0, 8).toUpperCase();
    }
}

export default Soundex
