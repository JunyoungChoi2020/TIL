// 최소 힙
class MinHeap{
    data = [null]
    push(v){
        this.data.push(v)
        let index = (this.data.length-1).toString(2).split("")
        for(let z=1; z<index.length; z++){
            let childNode = parseInt(index.join("").slice(0, index.length-z+1), 2)
            let parentNode = parseInt(index.join("").slice(0,index.length-z), 2)
            if(this.data[childNode][1] < this.data[parentNode][1]){
                [this.data[parentNode][1], this.data[childNode][1]] = [this.data[childNode][1], this.data[parentNode][1]]
            }
        }
    }
    show(){
        return this.data
    }
    show_pop(){
        return this.data[1][0]
    }
    pop(){
        let bePopped = this.data[1]
        this.data[1] = this.data.pop()

        if(this.data.length == 3){
            if(this.data[1][1] > this.data[2][1]){
                [this.data[1] , this.data[2]] = [this.data[2], this.data[1]]
            }
            return this.data[1]
        }

        if(this.data.length == 2){
            let val = this.data[1]
            this.data.pop()
            return val
        }

        let curr_index = '1'
        let check_number = (this.data.length-1).toString(2).split("").length;
        for(let i=0; i<check_number; i++){
            let compare_number_left = parseInt(curr_index + '0', 2)
            let compare_number_right = parseInt(curr_index + '1', 2)

            if(this.data[parseInt(curr_index,2)][1] > this.data[compare_number_left][1] || this.data[parseInt(curr_index,2)][1] > this.data[compare_number_right][1]){

                if(this.data[compare_number_left][1] >= this.data[compare_number_right][1]){
                    [this.data[parseInt(curr_index, 2)], this.data[compare_number_right]] = [this.data[compare_number_right], this.data[parseInt(curr_index, 2)]]
                    curr_index = compare_number_right.toString(2)
                } else if(this.data[compare_number_left][1] < this.data[compare_number_right][1]){
                    [this.data[parseInt(curr_index, 2)], this.data[compare_number_left]] = [this.data[compare_number_left], this.data[parseInt(curr_index, 2)]]
                    curr_index = compare_number_left.toString(2)
                }
            }
        }
        return bePopped;

        
        
    }
}

// 이동할 때 코스트가 모두 동일한 경우, 현재 x, y 위치에서 목표 x, y위치를 각각 빼서 더하면 끝
// 하지만 코스트가 다른경우 -> 다익스트라 알고리즘, A* 알고리즘
function pathfinder(views){
    let minHeap = new MinHeap()
    
    let rightHand_start = views["#"]
    let dist = new Map()
    let visited = new Map()
    let views_keys = Object.keys(views)
    for(let i=0; i<views_keys.length; i++){
        dist.set(views_keys[i], 0)
        visited.set(views_keys[i], false)
    }
    
    let current_index = "*"
    dist.set(current_index, 0)
    visited.set(current_index, true)
    let current_heap = views[current_index]
        for(let j=0; j<current_heap.length; j++){
            if(!visited.get(current_heap[j][0])){
                minHeap.push(current_heap[j])
            }
        }
    // 시작 정점을 설정한 후 방문처리 & 최단거리 배열 인덱스 -> 0 삽입.
    while(minHeap.show().length !== 1){
        // console.log(current_index)
        // 최소 힙을 pop
        let poppedHeap = minHeap.pop()
        
        // 현재 방문중인 정점 변경
        current_index = poppedHeap[0]
        // 만약 현재 방문중인 정점이 첫 방문이라면, 현재 방문중인 정점을 방문처리.
        if(visited.get(current_index) == false){
            visited.set(current_index, true)
            // 현재 방문중인 정점까지 최단거리 업데이트
            dist.set(current_index, poppedHeap[1])
            // 현재 방문중인 정점으로부터 연결된 다른 정점과 거리 object를 불러온다.
            // 현재 정점까지의 최단거리와 현재 방문중인 정점과 연결된 다른 정점 사이의 거리를 더하여 힙에 push. 
            // console.log(current_index)
            // views[current_index].map((v) => {
            // console.log(v)
            let v_addPrice = v[1] + dist.get(current_index)
            minHeap.push([v[0], v_addPrice])
                
            // })
            // console.log('---')
        }
    }
   
    return dist
}
function solution(numbers, hand) {
    var answer = '';

    // 빈 지도 만들기
    let views = {};

    for(let i=0; i<10; i++){
        views[i.toString()] = []
    }
    views["*"] = []
    views["#"] = []
    
    // 이동가능경로 탐색 및 price 부여
    let temp_view = Array.from({length:12}, (_, i) => (i + 1).toString())
    temp_view[9] = "*"
    temp_view[10] = "0"
    temp_view[11] = "#"
    let map_view = []
    for(let i=0; i<4; i++){
        map_view[i] = temp_view.slice(3*i, 3*(i+1))
    }

    for(let i=0; i<4; i++){
        for(let j=0; j<3; j++){
            let val = map_view[i][j]
            if(i-1 >= 0){views[val].push([map_view[i-1][j], 1])}
            if(i+1 !== map_view.length){views[val].push([map_view[i+1][j], 1])}
            if(j-1 >= 0){views[val].push([map_view[i][j-1], 1])}
            if(j+1 !== map_view[0].length){views[val].push([map_view[i][j+1], 1])}
        }
    }
    console.log(pathfinder(views))

    return ;
}

console.log(solution(0, 0))



// // 최소 힙
// class MinHeap{
//     data = [null]
//     push(v){
//         this.data.push(v)
//         let index = (this.data.length-1).toString(2).split("")
//         for(let z=1; z<index.length; z++){
//             let childNode = parseInt(index.join("").slice(0, index.length-z+1), 2)
//             let parentNode = parseInt(index.join("").slice(0,힙index.length-z), 2)
//             if(this.data[childNode] < this.data[parentNode]){
//                 [this.data[parentNode], this.data[childNode]] = [this.data[childNode], this.data[parentNode]]
//             }
//         }
//     }
//     show(){
//         return this.data
//     }
//     pop(){
//         let bePopped = this.data[1]
//         this.data[1] = this.data.pop()

//         if(this.data.length == 3){
//             if(this.data[1] > this.data[2]){
//                 [this.data[1] , this.data[2]] = [this.data[2], this.data[1]]
//             }
//         }

//         let curr_index = '1'
//         let check_number = (this.data.length-1).toString(2).split("").length;
//         for(let i=0; i<check_number; i++){
//             let compare_number_left = parseInt(curr_index + '0', 2)
//             let compare_number_right = parseInt(curr_index + '1', 2)

//             if(this.data[parseInt(curr_index,2)] > this.data[compare_number_left] || this.data[parseInt(curr_index,2)] > this.data[compare_number_right]){

//                 if(this.data[compare_number_left] >= this.data[compare_number_right]){
//                     [this.data[parseInt(curr_index, 2)], this.data[compare_number_right]] = [this.data[compare_number_right], this.data[parseInt(curr_index, 2)]]
//                     curr_index = compare_number_right.toString(2)
//                 } else if(this.data[compare_number_left] < this.data[compare_number_right]){
//                     [this.data[parseInt(curr_index, 2)], this.data[compare_number_left]] = [this.data[compare_number_left], this.data[parseInt(curr_index, 2)]]
//                     curr_index = compare_number_left.toString(2)
//                 }
//                 }
                
            
//         }
//         return bePopped;

        
        
//     }
// }

// // 이동할 때 코스트가 모두 동일한 경우, 현재 x, y 위치에서 목표 x, y위치를 각각 빼서 더하면 끝
// // 하지만 코스트가 다른경우 -> 다익스트라 알고리즘, A* 알고리즘
// function pathfinder(adjList){
//     let minHeap = new MinHeap()
//     let leftHand_start = "*"
//     let rightHand_start = "#"
//     let dist = Array(12).fill(null)
//     let visited = Array(12).fill(false)
//     minHeap.push()

//     // if()
    
   
// }
// function solution(numbers, hand) {
//     var answer = '';

//     // 빈 지도 만들기
//     let views = new Map();

//     for(let i=0; i<10; i++){
//         views[i.toString()] = []
//     }
//     views["*"] = []
//     views["#"] = []

//     // 이동가능경로 탐색 및 price 부여
//     let temp_view = Array.from({length:12}, (_, i) => (i + 1).toString())
//     temp_view[9] = "*"
//     temp_view[10] = "0"
//     temp_view[11] = "#"
//     let map_view = []
//     for(let i=0; i<4; i++){
//         map_view[i] = temp_view.slice(3*i, 3*(i+1))
//     }

//     for(let i=0; i<4; i++){
//         for(let j=0; j<3; j++){
//             let val = map_view[i][j]
//             if(i-1 >= 0){views[val].push([map_view[i-1][j], 1])}
//             if(i+1 !== map_view.length){views[val].push([map_view[i+1][j], 1])}
//             if(j-1 >= 0){views[val].push([map_view[i][j-1], 1])}
//             if(j+1 !== map_view[0].length){views[val].push([map_view[i][j+1], 1])}
//         }
//     }
//     console.log(views)

//     // pathfinder(views)

//     return ;
// }

// console.log(solution(0, 0))