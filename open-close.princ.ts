interface IShape {
    getArea(): number;
}
   
class Rect implements IShape {
    constructor(
        public readonly width: number,
        public readonly height: number
    ) { }
   
    getArea(): number {
        return this.width * this.height;
    }
}
   
class Square implements IShape {
    constructor(
        public readonly width: number
    ) { }
   
    getArea(): number {
        return Math.pow(this.width, 2);
    }
}
   
class Circle implements IShape {
    constructor(
        public readonly r: number
    ) { }
   
    getArea(): number {
        return Math.PI * Math.pow(this.r, 2);
    }
}
   
class ShapeManager {
    public static getMinArea(shapes: IShape[]): number {
        const areas = shapes.map(shape => shape.getArea());
        return Math.min(...areas);
    }
}