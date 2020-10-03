class Animals {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    showData() {
        return `<div class="animals-data">${this.name}</div>
        <div class="animals-data">${this.weight}kg</div>`;
    }
}

class Fish extends Animals {
    constructor(immersion_depth, ...param) {
        super(...param);
        this.immersion_depth = immersion_depth;
    }

    showData() {
        if (this.immersion_depth === "") return super.showData() + `\n<div class="animals-data animals-data-empty">&mdash;</div>`;
        else return super.showData() + `\n<div class="animals-data">${this.immersion_depth}m</div>`;
    }

}

class Amphibians extends Animals {
    constructor(food, ...param) {
        super(...param);
        this.food = food;
    }

    showData() {
        if (this.food === "") return super.showData() + `\n<div class="animals-data animals-data-empty">&mdash;</div>`;
        else return super.showData() + `\n<div class="animals-data">${this.food}</div>`;
    }
}

class Reptiles extends Animals {
    constructor(group, ...param) {
        super(...param);
        this.group = group;
    }

    showData() {
        if (this.group === "") return super.showData() + `\n<div class="animals-data animals-data-empty">&mdash;</div>`;
        else return super.showData() + `\n<div class="animals-data">${this.group}</div>`;
    }
}

class Birds extends Animals {
    constructor(wingspan, ...param) {
        super(...param);
        this.wingspan = wingspan;
    }

    showData() {
        if (this.wingspan === "") return super.showData() + `\n<div class="animals-data animals-data-empty">&mdash;</div>`;
        else return super.showData() + `\n<div class="animals-data">${this.wingspan}m</div>`;
    }
}

class Mammals extends Animals {
    constructor(occurrence, ...param) {
        super(...param);
        this.occurrence = occurrence;
    }

    showData() {
        if (this.occurrence === "") return super.showData() + `\n<div class="animals-data animals-data-empty">&mdash;</div>`;
        else return super.showData() + `\n<div class="animals-data">${this.occurrence}</div>`;
    }
}

export { Fish, Amphibians, Reptiles, Birds, Mammals };