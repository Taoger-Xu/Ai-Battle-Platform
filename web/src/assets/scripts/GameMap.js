import {AcGameObject} from "./AcGameObject";

export class GameMap extends AcGameObject{
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.rows = 13;
        this.cols = 13;
        this.L = 0;
    }
    start() {

    }

    // 计算小正方形的边长
    update_size(){
        this.L = Math.min(this.parent.clientWidth/this.cols, this.parent.clientHeight/this.rows);
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }
    update() {
        this.update_size();
        this.render();
    }
    //渲染函数
    render() {
        // 取颜色
        const color_eve = "#AAD751", color_odd = "#A2D149";
        // 染色
        for (let r = 0; r < this.rows; r ++ ){
            for (let c = 0; c < this.cols; c ++ ) {
                if ((r + c) % 2 == 0) {
                    this.ctx.fillStyle = color_eve;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                //左上角左边，明确canvas坐标系
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }
}