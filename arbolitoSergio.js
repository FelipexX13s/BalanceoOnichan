//Juan Rodriguez, Felipe Rodriguez, Kevin Rodriguez

class Node
{
    constructor(value){
     this.value = value;
     this.izquierda = null;
     this.derecha = null;
     this.parent = null;
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
    
    insert1(value, si = false) 
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
        
        if(si)
        {
            newNode.parent = parent;
        }
        
        (value > parent.value) ? parent.right = newNode : parent.left = newNode;
    
        return this;
    }

}
const tree1 = new Tree();

tree1.insert1(10);
tree1.insert1(5);
tree1.insert1(15);
tree1.insert1(20);

const tree2 = new Tree();
tree2.insert1(20);
tree2.insert1(30,true);
tree2.insert1(25);




