const AC_GAME_OBJECTS = [];

export class AcGameObject{
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0; // 时间间隔每一帧
        this.has_called_start = false;
    }
    start(){ // 只执行一次

    }
    update(){ //每一帧执行一次

    }
    on_destroy() { //删除之前执行

    }

    destroy(){
        this.on_destroy();
        for (let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if (obj == this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}
// 每一秒中step函数执行大概60次
let last_timestamp; // 上一次执行的时刻
const step = timestamp =>{
    // 让AC_GAME_OBJECTS中的所有对象在第一帧的时候执行start函数，其他帧执行update函数
    for (let obj of AC_GAME_OBJECTS){
        if (!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step)
}
// 在下一帧执行step函数
requestAnimationFrame(step)