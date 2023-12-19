export { bindEvent, e ,drawLine, drawRectangle, drawtangle, drawCircle } 
const e = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `元素没找到, 选择器 ${selector} 错误`
        alert(s)
        return null
    } else {
        return element
    }
}

const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `元素没找到, 选择器 ${selector} 错误`
        alert(s)
        return []
    } else {
        return elements
    }
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

const bindAll = function(selector, eventName, callback) {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// const drawPoint = function(ctx, x, y, color) {
//     ctx.beginPath();
//     ctx.strokeStyle = color;
//     ctx.fillRect(x-1, y-1, 1, 1)
//     ctx.stroke();
// }

const drawLine = function(context, x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

const drawRectangle = function(context, x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x1, y2);

    context.moveTo(x1, y1);
    context.lineTo(x2, y1);

    context.moveTo(x1, y2);
    context.lineTo(x2, y2);

    context.moveTo(x2, y1);
    context.lineTo(x2, y2);

    context.stroke();
    context.closePath();
}

const drawtangle = function(context, x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.moveTo((x2 + x1) / 2, y1);
    context.lineTo(x1, y2);

    context.moveTo((x2 + x1) / 2, y1);
    context.lineTo(x2, y2);

    context.moveTo(x1, y2);
    context.lineTo(x2, y2);

    context.stroke();
    context.closePath();
}

const drawCircle = function(context, x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 1;
    let x = (x1 + x2)  / 2;
    let y = (y1 + y2) / 2;
    let radiusX = x2 > x1 ? (x2 - x1) / 2 : (x1 - x2) / 2;
    let radiusY = y2 > y1 ? (y2 - y1) / 2 : (y1 - y2) / 2;
    context.ellipse(x, y, radiusX, radiusY, Math.PI / 4, 0, 2 * Math.PI);

    context.stroke();
    context.closePath();
}