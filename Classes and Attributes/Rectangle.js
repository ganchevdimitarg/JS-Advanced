class  Rectangle{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get color() {
        return this._color[0].toUpperCase() + this._color.slice(1);
    }

    set color(value) {
        this._color = value;
    }
    calcArea() {
        return this.width * this.height
    }

}