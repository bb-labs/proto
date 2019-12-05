import Source from '../../template/source.mjs'
import Tensor from '../../tensor/index.mjs'
import Algebra from '../../template/algebra.mjs'
import AxisOperation from './operation.mjs'

export default class Norm extends AxisOperation {
    constructor(args) {
        /** Defaults */
        args.axes = args.axes || [...args.of.header.shape.keys()]

        /** Superclass */
        super(args)

        /** Result */
        this.result = args.result || this.resultant()

        /** Initialize */
        this.symbolicSourceBoilerplate()
        this.symbolicSourceTemplate()

        /** Create */
        this.invoke = new Function(
            'A = this.of',
            'B = this.with',
            'R = this.result',
            [this.source, 'return R'].join('\n'))
    }

    /** Resultant Tensor */
    resultant() {
        return Tensor.zeros(
            this.of.header.shape.filter(this.unselectedAxes, this),
            Tensor.Float32,
        )
    }

    /** 
     * 
     * 
     * Symbolic Implementation 
     * 
     * 
     * */

    start() {
        return new Source([`const temp = new Array(${this.of.header.type.size})`])
    }

    preLoop() {
        return new Source([this.indices.result, `temp.fill(0)`])
    }

    inLoop() {
        return new Source([
            this.indices.of,
            Algebra.assign(
                this.variables.temp.slice(0, 1),
                Algebra.sum(Algebra.square(this.variables.of)), '+=').slice(0, 1)
        ])
    }

    postLoop() {
        return Algebra.assign(this.variables.result, Algebra.squareRoot(this.variables.temp))
    }

    finish() { }

    /** 
     * 
     * 
     * (TODO) Literal Implementation 
     * 
     * 
     * */
}
