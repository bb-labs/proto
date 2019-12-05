import bb from '../../big-box'
import jest from '..'

export default jest.suite(function () {

    console.log('\n\n-------- Creation Suite --------\n\n')

    let A = bb.tensor([
        [[10], [72], [91], [13]],
        [[57], [44], [49], [33]],
        [[90], [66], [23], [21]],
    ])

    let B = bb.tensor([[[1]], [[2]], [[3]], [[4]],])
    let C = bb.tensor([[[10], [4]], [[42], [6]], [[1], [1]]])
    let D = bb.arange(0, 8).reshape([4, 2]).slice(['0:2'])




    jest.expect(D).toEqual([["0.00", "1.00"], ["2.00", "3.00"]])
    jest.expect(bb.mesh({ of: [[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]] })).toEqual([["-1.00", "-1.00", "-1.00"], ["-1.00", "-1.00", "0.00"], ["-1.00", "-1.00", "1.00"], ["-1.00", "0.00", "-1.00"], ["-1.00", "0.00", "0.00"], ["-1.00", "0.00", "1.00"], ["-1.00", "1.00", "-1.00"], ["-1.00", "1.00", "0.00"], ["-1.00", "1.00", "1.00"], ["0.00", "-1.00", "-1.00"], ["0.00", "-1.00", "0.00"], ["0.00", "-1.00", "1.00"], ["0.00", "0.00", "-1.00"], ["0.00", "0.00", "0.00"], ["0.00", "0.00", "1.00"], ["0.00", "1.00", "-1.00"], ["0.00", "1.00", "0.00"], ["0.00", "1.00", "1.00"], ["1.00", "-1.00", "-1.00"], ["1.00", "-1.00", "0.00"], ["1.00", "-1.00", "1.00"], ["1.00", "0.00", "-1.00"], ["1.00", "0.00", "0.00"], ["1.00", "0.00", "1.00"], ["1.00", "1.00", "-1.00"], ["1.00", "1.00", "0.00"], ["1.00", "1.00", "1.00"]])
    jest.expect(A).toEqual([["10.00", "72.00", "91.00", "13.00"], ["57.00", "44.00", "49.00", "33.00"], ["90.00", "66.00", "23.00", "21.00"]])
    jest.expect(B).toEqual([["1.00"], ["2.00"], ["3.00"], ["4.00"]])
    jest.expect(C).toEqual([["10.00", "4.00"], ["42.00", "6.00"], ["1.00", "1.00"]])
    jest.expect(A.header.shape).toEqual([3, 4])
    jest.expect(B.header.shape).toEqual([4, 1])
    jest.expect(A.header.strides).toEqual([4, 1])
    jest.expect(B.header.strides).toEqual([1, 1])
    jest.expect(B.reshape([1, 4, 1])).toEqual([[["1.00"], ["2.00"], ["3.00"], ["4.00"]]])
    jest.expect(bb.zeros([2, 3, 2])).toEqual([[["0.00", "0.00"], ["0.00", "0.00"], ["0.00", "0.00"]], [["0.00", "0.00"], ["0.00", "0.00"], ["0.00", "0.00"]]])
    jest.expect(bb.ones([2, 3, 2])).toEqual([[["1.00", "1.00"], ["1.00", "1.00"], ["1.00", "1.00"]], [["1.00", "1.00"], ["1.00", "1.00"], ["1.00", "1.00"]]])
    jest.expect(bb.eye([3, 3])).toEqual([["1.00", "0.00", "0.00"], ["0.00", "1.00", "0.00"], ["0.00", "0.00", "1.00"]])
    jest.expect(bb.eye([3, 3, 3])).toEqual([[["1.00", "0.00", "0.00"], ["0.00", "0.00", "0.00"], ["0.00", "0.00", "0.00"]], [["0.00", "0.00", "0.00"], ["0.00", "1.00", "0.00"], ["0.00", "0.00", "0.00"]], [["0.00", "0.00", "0.00"], ["0.00", "0.00", "0.00"], ["0.00", "0.00", "1.00"]]])
    jest.expect(bb.arange(0, 10)).toEqual(["0.00", "1.00", "2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00"])
    jest.expect(bb.arange(2, 10)).toEqual(["2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00"])
    jest.expect(bb.arange(5, 11, 3)).toEqual(["5.00", "8.00"])
    jest.expect(bb.linspace(0, 2 * Math.PI, 100)).toEqual(["0.00", "0.06", "0.13", "0.19", "0.25", "0.32", "0.38", "0.44", "0.51", "0.57", "0.63", "0.70", "0.76", "0.83", "0.89", "0.95", "1.02", "1.08", "1.14", "1.21", "1.27", "1.33", "1.40", "1.46", "1.52", "1.59", "1.65", "1.71", "1.78", "1.84", "1.90", "1.97", "2.03", "2.09", "2.16", "2.22", "2.28", "2.35", "2.41", "2.48", "2.54", "2.60", "2.67", "2.73", "2.79", "2.86", "2.92", "2.98", "3.05", "3.11", "3.17", "3.24", "3.30", "3.36", "3.43", "3.49", "3.55", "3.62", "3.68", "3.74", "3.81", "3.87", "3.93", "4.00", "4.06", "4.13", "4.19", "4.25", "4.32", "4.38", "4.44", "4.51", "4.57", "4.63", "4.70", "4.76", "4.82", "4.89", "4.95", "5.01", "5.08", "5.14", "5.20", "5.27", "5.33", "5.39", "5.46", "5.52", "5.59", "5.65", "5.71", "5.78", "5.84", "5.90", "5.97", "6.03", "6.09", "6.16", "6.22", "6.28"])

    console.log('\n\n-------- End Creation Suite --------\n\n')
})
