import bb from '../../big-box/index.mjs'
import Primitive from './index.mjs'

export default class Cube extends Primitive {
    constructor({ center }) {
        super(center)

        this.points = bb.tensor({
            data: [
                [0, 0, 0],
                [0, 0, 1],
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
                [1, 0, 0],
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
                [0, 1, 1],
                [1, 1, 1],
                [1, 1, 0],
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0],
                [1, 1, 0],
                [1, 0, 0],
                [1, 0, 0],
                [1, 0, 1],
                [1, 0, 1],
                [0, 0, 1],
            ]
        })
    }

    render(){
        return {
            vertices: this.points,
            colors: bb.ones({ shape: this.points.shape }),
            sizes: bb.ones({ shape: this.points.shape }),
            mode: 'LINES'
        }
    }
}
