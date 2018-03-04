import { Component } from 'component/component';

import { ComponentInterface } from 'component/component.interface';


class ComponentList extends Component
{

    constructor(a: object, b: object, c: (a: string, b: any) => any)
    {
        super(a);
    }

    public render(a: string, b: object) : object
    {
        return `<ul class="list">
                    <li>{ require('reference.list.city') }</li>
                </ul>
                <button onclick="{ require('reference.function.sort') }">Sort</button>
                <style>
                    .list 
                    {
                        font-family: 'Roboto', sans-serif;
                        font-weight: 300;
                        font-size: 12px;
                    }
                </style>`;
    }

}


export { ComponentExample };
