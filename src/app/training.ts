export class Training {
    date: string = '';
    recap: string = '';
    exercises: Array<number>;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
