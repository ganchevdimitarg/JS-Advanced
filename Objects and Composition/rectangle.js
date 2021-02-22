function rectangle(width, height, color) {
    const rect = { width, height }
    rect.calcArea = () => { return rect.width * rect.height };
    rect.color = color.charAt(0).toUpperCase() + color.slice(1);

    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());

    return rect;
}