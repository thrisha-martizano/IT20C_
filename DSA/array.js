class Array{

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i=0; i < initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let output = " ";

        for(let i = 0; i < this.length; i++){
            output += this.data[i] + " ";
        }
        console.log(output);
    }

    insert(index,data){
        //Correcting Statement
        if(index < 0 || index > this.length){
            console.log("Invalid index");
            return;
        }

        //Shifting condition
        for(let i = this.data.length; i > index; i--){
            this.data[i] = this.data [i-1];
        }

        this.data[index] = data;
        this.length++;
    }

    search(element){
        for(let i = 0; i < this.length;i++){
            if(this.data[i] === element) 
            console.log(element + "is found at index "+ i);
            return i;
        }
        console.log(element + "is not found at any index ");
        return -1;
    }
}

//

arr1 = new Array([4,2,3]);

arr1.traverse();
arr1.insert(0,50);
arr1.traverse();
arr1.search(50);
arr1.search(10);
