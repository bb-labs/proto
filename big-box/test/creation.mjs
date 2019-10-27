import bb from '..'
import jest from '../../test'

export default function () {
    let A, B

    console.log('\n\n-------- Creation Suite --------\n\n')

    A = bb.tensor({
        data: [
            [10, 72, 91, 13],
            [57, 44, 49, 33],
            [90, 66, 23, 21],
        ],

    })

    B = bb.tensor({
        data: [
            [1],
            [2],
            [3],
            [4]
        ],

    })

    let C = bb.tensor({
        data: [
            [10, 4],
            [42, 6],
            [1, 1]
        ],

    })





    jest.expect(A).toEqual([['10', '72', '91', '13'], ['57', '44', '49', '33'], ['90', '66', '23', '21']])
    jest.expect(B).toEqual([['1'], ['2'], ['3'], ['4']])
    jest.expect(C).toEqual([["10", "4"], ["42", "6"], ["1", "1"]])
    jest.expect(A.shape).toEqual([3, 4])
    jest.expect(B.shape).toEqual([4, 1])
    jest.expect(A.strides).toEqual([4, 1])
    jest.expect(B.strides).toEqual([1, 1])
    jest.expect(B.reshape({ shape: [1, 4, 1] })).toEqual([[['1'], ['2'], ['3'], ['4']]])
    jest.expect(bb.zeros({ shape: [2, 3, 2] })).toEqual([[['0', '0'], ['0', '0'], ['0', '0']], [['0', '0'], ['0', '0'], ['0', '0']]])
    jest.expect(bb.ones({ shape: [2, 3, 2] })).toEqual([[['1', '1'], ['1', '1'], ['1', '1']], [['1', '1'], ['1', '1'], ['1', '1']]])
    jest.expect(bb.eye({ shape: [3, 3] })).toEqual([['1', '0', '0'], ['0', '1', '0'], ['0', '0', '1']])
    jest.expect(bb.eye({ shape: [3, 3, 3] })).toEqual([[['1', '0', '0'], ['0', '0', '0'], ['0', '0', '0']], [['0', '0', '0'], ['0', '1', '0'], ['0', '0', '0']], [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '1']]])
    jest.expect(bb.arange({ stop: 10 })).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    jest.expect(bb.arange({ start: 2, stop: 10 })).toEqual(["2", "3", "4", "5", "6", "7", "8", "9"])
    jest.expect(bb.arange({ start: 5, stop: 11, step: 3 })).toEqual(["5", "8"])
    jest.expect(bb.linspace({ start: 0, stop: 2 * Math.PI, num: 100 })).toEqual(["0", "0.06283185631036758", "0.12566371262073517", "0.18849556148052216", "0.25132742524147034", "0.3141592741012573", "0.3769911229610443", "0.4398229718208313", "0.5026548504829407", "0.5654866695404053", "0.6283185482025146", "0.6911503672599792", "0.7539822459220886", "0.8168140649795532", "0.8796459436416626", "0.942477822303772", "1.0053097009658813", "1.0681414604187012", "1.1309733390808105", "1.19380521774292", "1.2566370964050293", "1.3194688558578491", "1.3823007345199585", "1.4451326131820679", "1.5079644918441772", "1.5707963705062866", "1.6336281299591064", "1.6964600086212158", "1.7592918872833252", "1.8221237659454346", "1.884955644607544", "1.9477874040603638", "2.0106194019317627", "2.073451042175293", "2.1362829208374023", "2.1991147994995117", "2.261946678161621", "2.3247785568237305", "2.38761043548584", "2.450442314147949", "2.5132741928100586", "2.576106071472168", "2.6389377117156982", "2.7017695903778076", "2.764601469039917", "2.8274333477020264", "2.8902652263641357", "2.953097105026245", "3.0159289836883545", "3.078760862350464", "3.1415927410125732", "3.2044246196746826", "3.267256259918213", "3.3300881385803223", "3.3929200172424316", "3.455751895904541", "3.5185837745666504", "3.5814156532287598", "3.644247531890869", "3.7070794105529785", "3.769911289215088", "3.832742929458618", "3.8955748081207275", "3.958406686782837", "4.021238803863525", "4.084070682525635", "4.146902084350586", "4.209733963012695", "4.272565841674805", "4.335397720336914", "4.398229598999023", "4.461061477661133", "4.523893356323242", "4.586725234985352", "4.649557113647461", "4.71238899230957", "4.77522087097168", "4.838052749633789", "4.900884628295898", "4.963716506958008", "5.026548385620117", "5.089380264282227", "5.152212142944336", "5.215044021606445", "5.2778754234313965", "5.340707302093506", "5.403539180755615", "5.466371059417725", "5.529202938079834", "5.592034816741943", "5.654866695404053", "5.717698574066162", "5.7805304527282715", "5.843362331390381", "5.90619421005249", "5.9690260887146", "6.031857967376709", "6.094689846038818", "6.157521724700928", "6.220353603363037"])

    console.log('\n\n-------- End Creation Suite --------\n\n')
}
