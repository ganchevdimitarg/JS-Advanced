class List{
    constructor() {
        this.list = [];
        this.size = 0;
    }
    get(index){
        if (index < 0 || index > this.list.length){
            throw new Error('outside the length');
        }
        return this.list[index];
    }
    add(element){
        this.list.push(element);
        this.list.sort((a, b) => a - b);

        this.size = this.list.length;
    }
    remove(index){
        if (index < 0 || index > this.list.length){
            throw new Error('outside the length');
        }
        this.list.splice(index, 1);
        this.size = this.list.length;
    }
}