let heap = function () {
    data = [null];
    return {
      show: () => data.slice(1),
      push: (e) => {
        let lastIndex = data.length.toString(2);
        [...lastIndex].forEach((_,i,arr)=>{
          let checkIndex = parseInt(arr.slice(0,i+1).join(""),2)
          if (typeof data[checkIndex] !== "undefined"){
            if(data[checkIndex]>e){
              [data[checkIndex],e]=[e,data[checkIndex]]
            }
          } else {
            data[checkIndex] = e
          }
        })
      },
      pop: () => {
        if(data.length === 1) return null
        let min = data[1]
        let lastElement = data.pop()
        if(min == lastElement)return min
        let indexer = function() {
          let indexes = [1]
          let pointer = 0;
          return{
            get : () => indexes[pointer],
            set : (i) => {
              if(i === 0 || i ===1){
                pointer++
                indexes.push(indexes[indexes.length-1]*2 + i)
              }else {
                console.log("check index")
              }
            },
            getBefore:() =>indexes[pointer-1],
            getChild:() => [2*indexes[pointer],2*indexes[pointer]+1]
          }
        }()
    //     let inserted = false
    //     while (typeof data[indexer.get()]!=="undefined" && inserted==false){
    //       let parentInd = indexer.get();
    //       let [childZero,childOne] = indexer.getChild().map(e=>data[e])
    //       if (lastElement<=Math.min(childZero,childOne)){
    //         data[parentInd] =lastElement
    //         inserted = true
    //       }else {
    //         data[parentInd]=childZero<childOne?childZero:childOne
    //       }
    //       indexer.set(childZero<childOne?0:1)
    //     }
    //     if(data.length===3){
    //       data = [null,Math.min(data[2],lastElement),Math.max(data[2],lastElement)]
    //     }else {
    //       data[indexer.getBefore()] = lastElement
    //     }
        
    //     return min
    //   }
    // }
        while (typeof data[indexer.get()]!=="undefined"){
          let parentInd = indexer.get();
          let [childZero,childOne] = indexer.getChild().map(e=>data[e])
          data[parentInd]=childZero<childOne?childZero:childOne
          indexer.set(childZero<childOne?0:1)
        }
        data[indexer.getBefore()] = lastElement
        
        return min
      }
    }
  }()
  console.log(heap.show())
  for(let i=0; i<20;i++){
    heap.push(Math.floor(Math.random()*1000))
    console.log(heap.show())
  }
  console.log(heap.show())
//   for(let i=0; i<20;i++){
//     console.log(heap.pop())
//     console.log(heap.show())
//   }
  
  
  console.log(heap.show())