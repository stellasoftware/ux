import { Component } from 'component/component';

import { ComponentInterface } from 'component/component.interface';


class ComponentExample extends Component
{

    constructor(a: object)
    {
        super(a);
    }

    public render(a: object, b: (a: string, b: object) => any)
    {
        return '<div>Hello { require(component.string.world) } </div>';
    }

    // ... //

}


export { ComponentExample };
