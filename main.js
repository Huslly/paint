import { bindEvent, e, drawLine, drawRectangle, drawtangle, drawCircle } from './utils.js';

let color = "green";

// 换工具类型
const Tools = function(fc, fctx, tc, tctx) {
    let tool = e(".tools");
    let state = "";
    let x = 0, y = 0;
    let beginX = 0, beginY = 0, endX = 0, endY = 0;
    let isDrawing = false;
    bindEvent(tool, "click", (event)=>{
        let self = event.target;
        state = self.classList.value;
        switch(state){
            case "pen":{
                fc.classList.add("isHidden")
            break;
            }
            case "line":{
                fc.classList.remove("isHidden")
            break;
            }
            case "rectangle":{
                fc.classList.remove("isHidden")
            break;
            }
            case "tangle":{
                fc.classList.remove("isHidden")
            break;
            }
            case "circle":{
                fc.classList.remove("isHidden")
            break;
            }
        }
    })
    bindEvent(tc, 'mousedown', function(e) {
        switch(state){
            case "pen":{
                x = e.offsetX;
                y = e.offsetY;
                isDrawing = true;
            break;
            }
        }
    })
    bindEvent(tc, 'mousemove', function(e) {
        switch(state){
            case "pen":{
                if (isDrawing === true) {
                    drawLine(tctx, x, y, e.offsetX, e.offsetY);
                    x = e.offsetX;
                    y = e.offsetY;
                }
            break;
            }
        }
    })
    bindEvent(tc, 'mouseup', function(e) {
        switch(state){
            case "pen":{
                if (isDrawing === true) {
                    drawLine(tctx, x, y, e.offsetX, e.offsetY);
                    x = 0;
                    y = 0;
                    isDrawing = false;
                }
            break;
            }
        }
    })
    bindEvent(fc, 'mousedown', function(e) {
        beginX = e.offsetX;
        beginY = e.offsetY;
        isDrawing = true;
    })
    bindEvent(fc, 'mousemove', function(e) {
        switch(state){
            case "line":{
                if (isDrawing === true) {
                    x = e.offsetX;
                    y = e.offsetY;
                    fctx.clearRect(0, 0, 600, 600);
                    drawLine(fctx, beginX, beginY, x, y);
                }
            break;
            }
            case "rectangle":{
                if (isDrawing === true) {
                    x = e.offsetX;
                    y = e.offsetY;
                    fctx.clearRect(0, 0, 600, 600);
                    drawRectangle(fctx, beginX, beginY, x, y);
                }
            break;
            }
            case "tangle":{
                if (isDrawing === true) {
                    x = e.offsetX;
                    y = e.offsetY;
                    fctx.clearRect(0, 0, 600, 600);
                    drawtangle(fctx, beginX, beginY, x, y);
                }
            break;
            }
            case "circle":{
                if (isDrawing === true) {
                    x = e.offsetX;
                    y = e.offsetY;
                    fctx.clearRect(0, 0, 600, 600);
                    drawCircle(fctx, beginX, beginY, x, y);
                }
            break;
            }
        }
    })
    bindEvent(fc, 'mouseup', function(e) {
        switch(state){
            case "line":{
                endX = e.offsetX;
                endY = e.offsetY;
                isDrawing = false;
                drawLine(tctx, beginX, beginY, endX, endY);
            break;
            }
            case "rectangle":{
                endX = e.offsetX;
                endY = e.offsetY;
                isDrawing = false;
                drawRectangle(tctx, beginX, beginY, endX, endY);
            break;
            }
            case "tangle":{
                endX = e.offsetX;
                endY = e.offsetY;
                isDrawing = false;
                drawtangle(tctx, beginX, beginY, endX, endY);
            break;
            }
            case "circle":{
                endX = e.offsetX;
                endY = e.offsetY;
                isDrawing = false;
                drawCircle(tctx, beginX, beginY, endX, endY);
            break;
            }
        }
    })
}

// const colors = function(){

// }

// 初始化画布
const conCan = function() {
    // fake
    var fc = document.getElementById('fakeCanvas');
    var fctx = fc.getContext('2d');
    // true
    var tc = document.getElementById('TrueCanvas');
    var tctx = tc.getContext('2d');
    Tools(fc, fctx, tc, tctx);
}

// colors();
conCan();