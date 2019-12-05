import bb from '../../big-box'
import jest from '..'

export default jest.suite(function () {

    console.log('\n\n-------- Complex Suite --------\n\n')

    const A = bb.tensor([
        [[10, 2]],
        [[40, 3]],
        [[50, 1]],
    ])

    const B = bb.tensor([
        [[2, 2], [7, 9], [3, 5], [5, 8], [3, 4], [5, 6], [0, 7], [5, 9], [6, 0], [1, 6], [7, 9], [5, 7], [1, 9], [6, 6], [0, 8], [6, 8], [1, 4], [1, 0], [2, 1], [6, 9], [0, 6], [3, 4], [8, 6], [1, 0], [0, 2], [3, 7], [0, 7], [9, 6], [3, 5], [2, 4], [1, 7], [7, 8], [6, 2], [6, 8], [4, 7], [9, 1], [8, 6], [5, 2], [1, 2], [5, 2], [8, 7], [7, 0]],
        [[6, 4], [8, 0], [4, 0], [8, 7], [2, 0], [9, 8], [8, 7], [3, 7], [8, 6], [5, 0], [2, 1], [7, 5], [8, 6], [7, 4], [7, 7], [4, 8], [6, 6], [0, 3], [6, 1], [2, 6], [1, 6], [2, 8], [1, 9], [1, 3], [2, 2], [1, 6], [6, 0], [6, 6], [0, 2], [8, 7], [8, 9], [4, 6], [7, 4], [3, 2], [7, 1], [7, 4], [7, 6], [5, 3], [4, 5], [9, 1], [5, 2], [3, 0]],
    ])

    const C = bb.tensor([[[0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]]])

    const D = bb.tensor([
        [[0], [1], [2], [3], [4]],
        [[0], [1], [2], [3], [4]],
        [[0], [1], [2], [3], [4]],
        [[0], [1], [2], [3], [4]],
        [[0], [1], [2], [3], [4]],
    ])


    const E = bb.tensor([1, 8])
    const F = bb.tensor([[[0]], [[1]], [[2]], [[3]], [[4]]])

    const G = bb.tensor([
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]],
        [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]]
    ])

    const H = bb.tensor([[[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19]]])

    const I = bb.tensor([[[1, 1], [4, 6], [2, -5]]])
    const J = bb.tensor([[[7, -1], [2, 1], [5, -9]]])

    const K = bb.tensor([
        [[5, 3], [4, 2], [4, 8], [9, 7]],
        [[4, 7], [9, 2], [4, 4], [4, 8]],
        [[3, 1], [4, 3], [5, 1], [7, 7]],
        [[4, 5], [7, 3], [3, 5], [7, 3]]])

    const L = bb.tensor([[[6, 1], [4, 0], [4, 4], [3, 1]], [[1, 5], [0, 1], [2, 4], [3, 9]], [[7, 8], [5, 4], [3, 6], [7, 9]], [[7, 1], [2, 3], [9, 2], [2, 2]]])
    const M = new bb.cached.assign({ of: bb.zeros([100, 100], bb.ComplexFloat32), with: bb.tensor([1, 1]) }).invoke()

    const N = bb.tensor([[[1, 0], [2, 0], [4, 1], [2, 3]], [[4, 3], [4, 3], [0, 2], [4, 1]], [[0, 4], [1, 0], [0, 1], [1, 4]], [[0, 1], [1, 4], [0, 2], [2, 0]]])

    const O = bb.tensor([[[1, 3], [0, 4]], [[2, 1], [3, 3]]])
    const P = bb.tensor([[[0, 4], [0, 4], [2, 2], [0, 1], [3, 4]], [[1, 2], [1, 3], [4, 0], [2, 4], [0, 3]], [[3, 3], [4, 1], [3, 0], [3, 3], [0, 1]], [[0, 3], [3, 3], [0, 1], [1, 4], [2, 1]], [[2, 2], [4, 4], [3, 3], [3, 4], [1, 1]]])








    this.expect(new bb.cached.min({ of: A }).invoke()).toEqual('10.00+2.00i')
    this.expect(new bb.cached.max({ of: A }).invoke()).toEqual('50.00+1.00i')
    this.expect(new bb.cached.mean({ of: A }).invoke()).toEqual('33.33+2.00i')
    this.expect(new bb.cached.sum({ of: A }).invoke()).toEqual('100.00+6.00i')
    this.expect(new bb.cached.norm({ of: A }).invoke()).toEqual('64.92')
    this.expect(new bb.cached.min({ of: B }).invoke()).toEqual('0.00+7.00i')
    this.expect(new bb.cached.max({ of: B }).invoke()).toEqual('9.00+6.00i')
    this.expect(new bb.cached.mean({ of: B }).invoke()).toEqual('4.46+4.69i')
    this.expect(new bb.cached.sum({ of: B }).invoke()).toEqual('375.00+394.00i')
    this.expect(new bb.cached.norm({ of: B }).invoke()).toEqual('69.74')
    this.expect(new bb.cached.add({ of: B, with: B }).invoke()).toEqual(new bb.cached.multiply({ of: B, with: bb.tensor([2, 0]) }).invoke())
    this.expect(new bb.cached.subtract({ of: B, with: B }).invoke()).toEqual(new bb.cached.multiply({ of: B, with: bb.tensor([0, 0]) }).invoke())
    this.expect(new bb.cached.divide({ of: B, with: B }).invoke()).toEqual(bb.ones(B.header.shape, bb.ComplexFloat32).subtract({ with: [0, 1] }))
    this.expect(new bb.cached.subtract({ of: B, with: C }).invoke()).toEqual(new bb.cached.subtract({ of: B, with: [0, 1] }).invoke())
    this.expect(new bb.cached.multiply({ of: A, with: E }).invoke()).toEqual([["-6.00+82.00i"], ["16.00+323.00i"], ["42.00+401.00i"]])
    this.expect(new bb.cached.add({ of: A, with: E }).invoke()).toEqual([["11.00+10.00i"], ["41.00+11.00i"], ["51.00+9.00i"]])
    this.expect(new bb.cached.add({ of: D, with: F.T() }).invoke()).toEqual([["0.00", "2.00", "4.00", "6.00", "8.00"], ["0.00", "2.00", "4.00", "6.00", "8.00"], ["0.00", "2.00", "4.00", "6.00", "8.00"], ["0.00", "2.00", "4.00", "6.00", "8.00"], ["0.00", "2.00", "4.00", "6.00", "8.00"]])
    this.expect(new bb.cached.add({ of: D, with: F }).invoke()).toEqual([["0.00", "1.00", "2.00", "3.00", "4.00"], ["1.00", "2.00", "3.00", "4.00", "5.00"], ["2.00", "3.00", "4.00", "5.00", "6.00"], ["3.00", "4.00", "5.00", "6.00", "7.00"], ["4.00", "5.00", "6.00", "7.00", "8.00"]])
    this.expect(new bb.cached.add({ of: G, with: H }).invoke()).toEqual([["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"], ["0.00", "2.00", "4.00", "6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "26.00", "28.00", "30.00", "32.00", "34.00", "36.00", "38.00"]])
    this.expect(new bb.cached.add({ of: G, with: H.T() }).invoke()).toEqual([["0.00", "1.00", "2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00"], ["1.00", "2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00"], ["2.00", "3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00"], ["3.00", "4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00"], ["4.00", "5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00"], ["5.00", "6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00"], ["6.00", "7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00"], ["7.00", "8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00"], ["8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00"], ["9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00"], ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00"], ["11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00"], ["12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00"], ["13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00"], ["14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00"], ["15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00", "34.00"], ["16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00", "34.00", "35.00"], ["17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00", "34.00", "35.00", "36.00"], ["18.00", "19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00", "34.00", "35.00", "36.00", "37.00"], ["19.00", "20.00", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00", "29.00", "30.00", "31.00", "32.00", "33.00", "34.00", "35.00", "36.00", "37.00", "38.00"]])
    this.expect(new bb.cached.cross({ of: I.T(), with: J.T() }).invoke()).toEqual([["65.00+2.00i"], ["-5.00-33.00i"], ["-33.00-35.00i"]])
    this.expect(new bb.cached.matMult({ of: K, with: L }).invoke()).toEqual([["41.00+191.00i", "3.00+113.00i", "39.00+181.00i", "-34.00+180.00i"], ["32.00+213.00i", "2.00+101.00i", "6.00+200.00i", "-2.00+200.00i"], ["75.00+135.00i", "23.00+68.00i", "62.00+148.00i", "19.00+131.00i"], ["38.00+159.00i", "13.00+91.00i", "34.00+144.00i", "-15.00+173.00i"]])
    this.expect(new bb.cached.matMult({ of: M, with: M }).invoke()).toEqual(new bb.cached.assign({ of: bb.ones([100, 100], bb.ComplexFloat32), with: [0, 200] }).invoke())
    this.expect(new bb.cached.inverse({ of: O }).invoke()).toEqual([["0.30-0.90i", "-0.80+0.40i"], ["0.00+0.50i", "0.50-0.50i"]])

    console.log('\n\n-------- End Complex Suite --------\n\n')
})
