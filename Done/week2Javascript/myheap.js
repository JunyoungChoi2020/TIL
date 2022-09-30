// heap 데이터를 어디에 저장할 것인가? 클로져가 뭐지?
// heap class
// -> push, pop, show
class myheap{
    data = [null]
    push(v){
        this.data.push(v)
        let index = (this.data.length-1).toString(2).split("")
        for(let z=1; z<index.length; z++){
            let childNode = parseInt(index.join("").slice(0, index.length-z+1), 2)
            let parentNode = parseInt(index.join("").slice(0, index.length-z), 2)
            if(this.data[childNode] < this.data[parentNode]){
                [this.data[parentNode], this.data[childNode]] = [this.data[childNode], this.data[parentNode]]
            }
        }
    }
    show(){
        return this.data
    }
    pop(){
        let bePopped = this.data[1]
        this.data[1] = this.data.pop()

        if(this.data.length == 3){
            if(this.data[1] > this.data[2]){
                [this.data[1] , this.data[2]] = [this.data[2], this.data[1]]
            }
        }

        let curr_index = '1'
        let check_number = (this.data.length-1).toString(2).split("").length;
        for(let i=0; i<check_number; i++){
            let compare_number_left = parseInt(curr_index + '0', 2)
            let compare_number_right = parseInt(curr_index + '1', 2)

            if(this.data[parseInt(curr_index,2)] > this.data[compare_number_left] || this.data[parseInt(curr_index,2)] > this.data[compare_number_right]){

                if(this.data[compare_number_left] >= this.data[compare_number_right]){
                    [this.data[parseInt(curr_index, 2)], this.data[compare_number_right]] = [this.data[compare_number_right], this.data[parseInt(curr_index, 2)]]
                    curr_index = compare_number_right.toString(2)
                } else if(this.data[compare_number_left] < this.data[compare_number_right]){
                    [this.data[parseInt(curr_index, 2)], this.data[compare_number_left]] = [this.data[compare_number_left], this.data[parseInt(curr_index, 2)]]
                    curr_index = compare_number_left.toString(2)
                }
                }
                
            
        }
        return bePopped;

        
        
    }
}

let prac_heap = new myheap;
for(let q=0; q< 10; q++){
    prac_heap.push(Math.round(Math.random()*10))
    // console.log(prac_heap.show())
}
console.log(prac_heap.show())

for(let q=0; q< 10; q++){
    // prac_heap.push(Math.round(Math.random()*10))
    // console.log(prac_heap.show())
    console.log(prac_heap.pop())
}