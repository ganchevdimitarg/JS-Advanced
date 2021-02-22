function solve() {
    const proto = {};
    const inst = Object.create(proto);

    inst.extend = function (temp) {
        Object.entries(temp).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;

            }
        });
    }

    return inst;
}