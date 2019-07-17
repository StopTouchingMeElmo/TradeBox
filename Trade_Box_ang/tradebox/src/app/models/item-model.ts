export class ItemModel
{
    constructor
    (
        public name?: string,
        public price?: number,
        public brand?: string,
        /* public img?: Image, */
        public created_date?: Date,
        public desc?: string,
        public type?: string
    ) 
    {
        
    }
}

export class Image
{
    contentType: string;
}