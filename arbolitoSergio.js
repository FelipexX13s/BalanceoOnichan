//Juan Rodriguez, Felipe Rodriguez, Kevin Rodriguez

class Node
{
    constructor(value){
     this.value = value;
     this.izquierda = null;
     this.derecha = null;
    } 
}

class Tree
{
    constructor(){
        this.root = null;
    }

    peek(){
        return this.root;
    }
    
    insert1(value) 
    {
        const newNode = new Node(value);
    
        if (!this.root) 
        {
            this.root = newNode;
            return this;
        }
    
        let parent = null;
        let asigner = this.root;
    
        while (asigner != null) 
        {
            parent = asigner;
            asigner = (value > asigner.value) ? asigner.right : asigner.left;
        }
    
        (value > parent.value) ? parent.right = newNode : parent.left = newNode;
        //parent[(value > parent.value) ? 'right' : 'left'] = newNode;
    
        return this;
    }

}
const tree = new Tree();



