import { Component } from 'component/component';

import { ComponentInterface } from 'component/component.interface';


class ComponentExample extends Component
{

    constructor(a: object, b: object, c: (a: string, b: any) => any)
    {
        super(a);
    }

    public render(a: string, b: object) : object
    {
        return `<div>Hello { require(component.world) } </div>`;
    }

}


export { ComponentExample };
