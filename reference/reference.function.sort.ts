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
        let i, switching, c, shouldSwitch;
                
        switching = true;
        
        while (switching)
        {
            switching = false;
            
            c = b.getElementsByTagName('li');

            for (i = 0; i < (c.length - 1); i++)
            {
                shouldSwitch = false;
                
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase())
                {
                    shouldSwitch= true;
                
                    break;
                }
            }
            
            if (shouldSwitch)
            {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
            
                switching = true;
            }
        }
    }
 
 }
 
 
 export { ReferenceFunctionSort };
