import bb from '../../big-box'
import jest from '..'

export default jest.suite(function () {

    console.log('\n\n-------- Assignment Suite --------\n\n')

    const A = bb.tensor({ data: [['10 + 2i'], ['40 + 3i'], ['50 + i']] })
    const D = bb.tensor({ data: [['0', '1', '2', '3']] })

    const K = bb.tensor({
        data: [
            ['5. + 3i', '4. + 2i', '4. + 8i', '9. + 7i'],
            ['4. + 7i', '9. + 2i', '4. + 4i', '4. + 8i'],
            ['3. + 1i', '4. + 3i', '5. + 1i', '7. + 7i'],
            ['4. + 5i', '7. + 3i', '3. + 5i', '7. + 3i']
        ],
    })

    const J = bb.tensor({ data: [[1, 2], [3, 4]] })
    const L = bb.tensor({ data: [[[4, 7], [9, 8]], [[0, 3], [7, 4]]] })
    const M = bb.linspace({ start: 0, stop: 2 * Math.PI, num: 4 }).multiply({ with: 'i' }).exp().reshape({ shape: [4, 1] }).view({ type: bb.Float32 })
    const N = bb.linspace({ start: 0, stop: 2 * Math.PI, num: 10 }).multiply({ with: 'i' }).exp().reshape({ shape: [10, 1] }).view({ type: bb.Float32 })
    const O = N.insert({ with: 1, entries: [2], axes: [1] })
    const Q = bb.tensor({ data: [[0, 1]] })




    this.expect(Q.insert({ with: 0, entries: [1], axes: [0] })).toEqual([["0", "1"], ["0", "0"]])
    this.expect(N.insert({ with: 1, entries: [2], axes: [1] })).toEqual([["1", "0", "1"], ["0.7660444378852844", "0.6427875757217407", "1"], ["0.17364822328090668", "0.9848077297210693", "1"], ["-0.5000000596046448", "0.8660253882408142", "1"], ["-0.9396926164627075", "0.3420202136039734", "1"], ["-0.9396926164627075", "-0.3420201539993286", "1"], ["-0.49999991059303284", "-0.866025447845459", "1"], ["0.1736481487751007", "-0.9848077297210693", "1"], ["0.7660443186759949", "-0.642787754535675", "1"], ["1", "1.7484555314695172e-7", "1"]])
    this.expect(O.insert({ with: [0, 0, 1], entries: [0, 2, 4, 6, 8, 10], axes: [0] })).toEqual([["0", "0", "1"], ["1", "0", "1"], ["0.7660444378852844", "0.6427875757217407", "1"], ["0", "0", "1"], ["0.17364822328090668", "0.9848077297210693", "1"], ["-0.5000000596046448", "0.8660253882408142", "1"], ["0", "0", "1"], ["-0.9396926164627075", "0.3420202136039734", "1"], ["-0.9396926164627075", "-0.3420201539993286", "1"], ["0", "0", "1"], ["-0.49999991059303284", "-0.866025447845459", "1"], ["0.1736481487751007", "-0.9848077297210693", "1"], ["0", "0", "1"], ["0.7660443186759949", "-0.642787754535675", "1"], ["1", "1.7484555314695172e-7", "1"], ["0", "0", "1"]])
    this.expect(M.insert({ with: 1, entries: [2], axes: [1] })).toEqual([["1", "0", "1"], ["-0.5000000596046448", "0.8660253882408142", "1"], ["-0.49999991059303284", "-0.866025447845459", "1"], ["1", "1.7484555314695172e-7", "1"]])
    this.expect(L.insert({ entries: [0, 1], with: 10, axes: [0] })).toEqual([[["10", "10"], ["10", "10"]], [["4", "7"], ["9", "8"]], [["10", "10"], ["10", "10"]], [["0", "3"], ["7", "4"]]])
    this.expect(J.insert({ entries: [0, 2], with: [5, 5], axes: [0] })).toEqual([["5", "5"], ["1", "2"], ["3", "4"], ["5", "5"]])
    this.expect(J.insert({ entries: [0], with: [5, 5], axes: [0] })).toEqual([["5", "5"], ["1", "2"], ["3", "4"]])
    this.expect(bb.arange({ stop: 10 }).add({ with: bb.arange({ stop: 10 }).reshape({ shape: [10, 1] }) })).toEqual([["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"], ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15"], ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16"], ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"], ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]])
    this.expect(new bb.cached.multiply({ of: bb.linspace({ start: 0, stop: 2 * Math.PI, num: 2 }), with: 'i' }).invoke()).toEqual(["0", "6.2831854820251465i"])
    this.expect(new bb.cached.repeat({ of: J, count: 2, axes: [0] }).invoke()).toEqual([["1", "2"], ["1", "2"], ["3", "4"], ["3", "4"]])
    this.expect(new bb.cached.assign({ of: bb.zeros({ shape: [1, 3] }), region: [':', ':2'], with: 255 }).invoke()).toEqual([["255", "255", "0"]])
    this.expect(new bb.cached.assign({ of: bb.zeros({ shape: [1, 3] }), region: [':', 1], with: 255 }).invoke()).toEqual([["0", "255", "0"]])
    this.expect(new bb.cached.negate({ of: bb.ones({ shape: [2, 2] }) }).invoke()).toEqual([["-1", "-1"], ["-1", "-1"]])
    this.expect(new bb.cached.assign({ of: bb.zeros({ shape: [3, 3] }), region: [":", 1], with: 1 }).invoke()).toEqual([["0", "1", "0"], ["0", "1", "0"], ["0", "1", "0"]])
    this.expect(new bb.cached.exp({ of: `${Math.PI}i` }).invoke()).toEqual("-1-8.742277657347586e-8i")
    this.expect(new bb.cached.multiply({ of: A, with: 10 }).invoke()).toEqual([['100+20i'], ['400+30i'], ['500+10i']])
    this.expect(new bb.cached.multiply({ of: K, with: D }).invoke()).toEqual([["0", "4+2i", "8+16i", "27+21i"], ["0", "9+2i", "8+8i", "12+24i"], ["0", "4+3i", "10+2i", "21+21i"], ["0", "7+3i", "6+10i", "21+9i"]])
    this.expect(new bb.cached.repeat({ of: [[1], [2], [3]], count: 3, axes: [1] }).invoke()).toEqual([["1", "1", "1"], ["2", "2", "2"], ["3", "3", "3"]])


    console.log('\n\n-------- End Mismatch Suite --------\n\n')
})
