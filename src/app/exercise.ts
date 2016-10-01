export class Exercise {
    type: string = '';
    name: string = '';
    description: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
