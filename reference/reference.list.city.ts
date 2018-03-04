 import { Reference } from 'reference/reference';
 
 import { ReferenceInterface } from 'reference/reference.interface';
 
 
 class ReferenceFunctionSort extends Reference
 {
 
    constructor(a: object, b: object, c: (a: string, b: any) => any)
    {
        super(a);
    }
    
    public select(a: string, b: object) : object
    {
        return this.reference = (b) ? (b as object) : [ 'Oslo', 'Stockholm', 'Helsinki', 'Berlin', 'Rome', 'Madrid' ];
    }
    
    public update(a: string, b: object) : object
    {
        this.reference = b;
    }
 
 }
 
 
 export { ReferenceFunctionSort };
