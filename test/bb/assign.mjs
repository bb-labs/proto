import bb from '../../bb'
import jest from '..'
import config from '../../res/config.mjs'

export default jest.suite(function () {

    console.log('\n\n-------- Assignment Suite --------\n\n')

    const A = bb.tensor([
        [[10, 2]],
        [[40, 3]],
        [[50, 1]],
    ])

    const K = bb.tensor([
        [[5, 3], [4, 2], [4, 8], [9, 7]],
        [[4, 7], [9, 2], [4, 4], [4, 8]],
        [[3, 1], [4, 3], [5, 1], [7, 7]],
        [[4, 5], [7, 3], [3, 5], [7, 3]]
    ])

    const D = bb.tensor([[0], [1], [2], [3]])
    const J = bb.tensor([[[1], [2]], [[3], [4]]])
    const L = bb.tensor([[[[4], [7]], [[9], [8]]], [[[0], [3]], [[7], [4]]]])
    const M = bb.linspace(0, 2 * Math.PI, 4).multiply({ with: [0, 1] }).exp().reshape([4, 1]).view(bb.Float32)
    const N = bb.linspace(0, 2 * Math.PI, 10).multiply({ with: [0, 1] }).exp().reshape([10, 1]).view(bb.Float32)
    const O = N.insert({ with: 1, entries: [2], axes: [1] })
    const Q = bb.tensor([[[0], [1]]])
    const T = bb.tensor([[[2], [6]], [[1], [6]], [[5], [2]], [[1], [2]], [[1], [5]]])
    
    this.expect(T.astype(bb.ComplexFloat32)).toEqual([["2.00+0.00i", "6.00+0.00i"], ["1.00+0.00i", "6.00+0.00i"], ["5.00+0.00i", "2.00+0.00i"], ["1.00+0.00i", "2.00+0.00i"], ["1.00+0.00i", "5.00+0.00i"]])
    this.expect(T.astype(bb.ComplexFloat32).astype(bb.Float32)).toEqual([["2.00", "6.00"], ["1.00", "6.00"], ["5.00", "2.00"], ["1.00", "2.00"], ["1.00", "5.00"]])
    this.expect(M).toEqual([["1.00", "0.00"], ["-0.50", "0.87"], ["-0.50", "-0.87"], ["1.00", "0.00"]])
    this.expect(N).toEqual([["1.00", "0.00"], ["0.77", "0.64"], ["0.17", "0.98"], ["-0.50", "0.87"], ["-0.94", "0.34"], ["-0.94", "-0.34"], ["-0.50", "-0.87"], ["0.17", "-0.98"], ["0.77", "-0.64"], ["1.00", "0.00"]])
    this.expect(Q.insert({ with: 0, entries: [1], axes: [0] })).toEqual([["0.00", "1.00"], ["0.00", "0.00"]])
    this.expect(N.insert({ with: 1, entries: [2], axes: [1] })).toEqual([["1.00", "0.00", "1.00"], ["0.77", "0.64", "1.00"], ["0.17", "0.98", "1.00"], ["-0.50", "0.87", "1.00"], ["-0.94", "0.34", "1.00"], ["-0.94", "-0.34", "1.00"], ["-0.50", "-0.87", "1.00"], ["0.17", "-0.98", "1.00"], ["0.77", "-0.64", "1.00"], ["1.00", "0.00", "1.00"]])
    this.expect(O.insert({ with: [[0], [0], [1]], entries: [0, 2, 4, 6, 8, 10], axes: [0] })).toEqual([["0.00", "0.00", "1.00"], ["1.00", "0.00", "1.00"], ["0.77", "0.64", "1.00"], ["0.00", "0.00", "1.00"], ["0.17", "0.98", "1.00"], ["-0.50", "0.87", "1.00"], ["0.00", "0.00", "1.00"], ["-0.94", "0.34", "1.00"], ["-0.94", "-0.34", "1.00"], ["0.00", "0.00", "1.00"], ["-0.50", "-0.87", "1.00"], ["0.17", "-0.98", "1.00"], ["0.00", "0.00", "1.00"], ["0.77", "-0.64", "1.00"], ["1.00", "0.00", "1.00"], ["0.00", "0.00", "1.00"]])
    this.expect(M.insert({ with: 1, entries: [2], axes: [1] })).toEqual([["1.00", "0.00", "1.00"], ["-0.50", "0.87", "1.00"], ["-0.50", "-0.87", "1.00"], ["1.00", "0.00", "1.00"]])
    this.expect(L.insert({ entries: [0, 1], with: 10, axes: [0] })).toEqual([[["10.00", "10.00"], ["10.00", "10.00"]], [["4.00", "7.00"], ["9.00", "8.00"]], [["10.00", "10.00"], ["10.00", "10.00"]], [["0.00", "3.00"], ["7.00", "4.00"]]])
    this.expect(J.insert({ entries: [0, 2], with: [[5], [5]], axes: [0] })).toEqual([["5.00", "5.00"], ["1.00", "2.00"], ["3.00", "4.00"], ["5.00", "5.00"]])
    this.expect(J.insert({ entries: [0], with: [[5], [5]], axes: [0] })).toEqual([["5.00", "5.00"], ["1.00", "2.00"], ["3.00", "4.00"]])
    this.expect(bb.arange(0, 10).add({ with: bb.arange(0, 10).reshape([10, 1]) })).toEqual([["0.00", "1.00", "2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00"], ["1.00", "2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00"], ["2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00"], ["3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00"], ["4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00"], ["5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00"], ["6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00"], ["7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00"], ["8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00"], ["9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"]])
    this.expect(new bb.cached.multiply({ of: bb.linspace(0, 2 * Math.PI, 2), with: [0, 1] }).invoke()).toEqual(["0.00+0.00i", "0.00+6.28i"])
    this.expect(new bb.cached.repeat({ of: J, count: 2, axes: [0] }).invoke()).toEqual([["1.00", "2.00"], ["1.00", "2.00"], ["3.00", "4.00"], ["3.00", "4.00"]])
    this.expect(new bb.cached.assign({ of: bb.zeros([1, 3]), region: [':', ':2'], with: 255 }).invoke()).toEqual([["255.00", "255.00", "0.00"]])
    this.expect(new bb.cached.assign({ of: bb.zeros([1, 3]), region: [':', '1'], with: 255 }).invoke()).toEqual([["0.00", "255.00", "0.00"]])
    this.expect(new bb.cached.negate({ of: bb.ones([2, 2]) }).invoke()).toEqual([["-1.00", "-1.00"], ["-1.00", "-1.00"]])
    this.expect(new bb.cached.assign({ of: bb.zeros([3, 3]), region: [':', 1], with: 1 }).invoke()).toEqual([["0.00", "1.00", "0.00"], ["0.00", "1.00", "0.00"], ["0.00", "1.00", "0.00"]])
    this.expect(new bb.cached.exp({ of: [0, Math.PI] }).invoke()).toEqual('-1.00-0.00i')
    this.expect(new bb.cached.multiply({ of: A, with: 10 }).invoke()).toEqual([["100.00+20.00i"], ["400.00+30.00i"], ["500.00+10.00i"]])
    this.expect(new bb.cached.multiply({ of: K, with: D }).invoke()).toEqual([["0.00+0.00i", "4.00+2.00i", "8.00+16.00i", "27.00+21.00i"], ["0.00+0.00i", "9.00+2.00i", "8.00+8.00i", "12.00+24.00i"], ["0.00+0.00i", "4.00+3.00i", "10.00+2.00i", "21.00+21.00i"], ["0.00+0.00i", "7.00+3.00i", "6.00+10.00i", "21.00+9.00i"]])
    this.expect(new bb.cached.repeat({ of: [[[1]], [[2]], [[3]]], count: 3, axes: [1] }).invoke()).toEqual([["1.00", "1.00", "1.00"], ["2.00", "2.00", "2.00"], ["3.00", "3.00", "3.00"]])


    console.log('\n\n--------End Mismatch Suite--------\n\n')
})
