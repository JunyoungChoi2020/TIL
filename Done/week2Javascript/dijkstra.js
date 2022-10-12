// 최소 힙 (가장 낮은 값이 root node에 위치한 힙) 설정
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
        if(this.data.length == 2){
            this.data.pop()
            return bePopped
        }

        this.data[1] = this.data.pop()
        
        if(this.data.length == 3){
            if(this.data[1][1] > this.data[2][1]){
                [this.data[1], this.data[2]] = [this.data[2], this.data[1]]
            }
            return bePopped
        }

        let curr_index = '1'
        let check_number = (this.data.length-1).toString(2).split("").length;
        for(let i=0; i<check_number; i++){
            let compare_number_left = parseInt(curr_index + '0', 2)
            let compare_number_right = parseInt(curr_index + '1', 2)
            if(compare_number_right > this.data.length-1){
                if(this.data[compare_number_left] < this.data[parseInt(curr_index, 2)]){
                    [this.data[parseInt(curr_index, 2)], this.data[compare_number_left]] = [this.data[compare_number_left], this.data[parseInt(curr_index, 2)]]
                }
            } else {
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
        }
        return bePopped;
    }
}

// 이동할 때 코스트가 모두 동일한 경우, 현재 x, y 위치에서 목표 x, y위치를 각각 빼서 더하면 끝
// 하지만 코스트가 다른경우 -> 다익스트라 알고리즘, A* 알고리즘
function pathfinder(views, start, target){
    let minHeap = new MinHeap()
    // 시작 정점에서 목표 지점까지의 거리(cost)를 담고있는 dist 변수를 만듭니다. dist 변수에는 초기값으로 infinity를 할당합니다. 
    // 더 거리(cost)가 짧은 지점을 선택할 것 입니다.
    let dist = new Map()
    // 변수 visited는 방문한 정점 정보를 담고 있습니다. 초기값은 false로 둘 것이고, 방문하였다면 true로 둘 것입니다. 이미 방문한 정점이라면, 다시 돌아가지 않을 것 입니다.
    let visited = new Map()
    // 정점의 인덱스 정보(view의 key로써 1, 2, 3, 4, 5, 6, 7, 8, 9, *, 0, #)를 받아와 변수 dist와 변수 visited의 크기를 정의합니다.
    let views_keys = Object.keys(views)
    for(let i=0; i<views_keys.length; i++){
        dist.set(views_keys[i], Infinity)
        visited.set(views_keys[i], false)
    }
    
    // 시작 정점을 정의합니다. current_index 변수는 현재 정점 정보(여기선 * 또는 #)를 담고 있습니다.
    let current_index = start
    // 시작 지점과의 거리(즉 0)와 방문 여부를 설정합니다(false -> true).
    dist.set(current_index, 0)
    visited.set(current_index, true)

    // 변수 current_heap은 current_index에서 이동가능한 경로 정보를 담고 있습니다.
    // 시작 정점이 * 이므로, 지금 current_heap에는 경로 ["7", 1]과 경로 ["0", 1]이 담겨있습니다. 
    // current_heap[0]의 "7"과 "1"은 정점 인덱스를 가리키고, current_heap[1]은 시작 정점으로부터의 거리(cost)입니다.
    let current_heap = views[current_index]
        // 현재 정점으로부터 이동 가능한 모든 경로에 대하여, 방문하지 않았다면, 그 경로(정점 인덱스와 거리(cost))를 힙에 push합니다.
        for(let j=0; j<current_heap.length; j++){
            if(!visited.get(current_heap[j][0])){
                minHeap.push(current_heap[j])
            }
        }
        
    // 아래 과정을 힙 크기가 1이 될 때 까지(null만 남을 때 까지) 반복합니다.
    while(minHeap.show().length !== 1){
        // 최소 힙을 pop 합니다.
        // console.log(minHeap)
        let poppedHeap = minHeap.pop()
        // console.log(poppedHeap)
        // 현재 방문중인 정점을 pop한 힙에 맞추어 변경합니다.
        current_index = poppedHeap[0]
        // 만약 현재 방문중인 정점이 첫 방문이라면, 현재 방문중인 정점을 방문처리합니다.
        if(visited.get(current_index) == false){
            visited.set(current_index, true)
            // 현재 방문중인 정점까지 최단거리를 업데이트합니다.
            dist.set(current_index, poppedHeap[1])
            // 현재 방문중인 정점으로부터 연결된 다른 모든 정점 인덱스와 그 거리를 불러옵니다그
            // 현재 정점까지의 최단거리와 현재 방문중인 정점과 연결된 다른 정점 사이의 거리를 더하여 힙에 push합니다.
            views[current_index].map((v) => {
                if(visited.get(v[0]) == false){
                    let v_addPrice = v[1] + dist.get(current_index)
                    minHeap.push([v[0], v_addPrice])
                }
            })
        
        // 만약 방문한 경로라면 continue합니다.
        } else {
            continue
        }
    }
    // 시작위치에서 목표 위치까지 최단거리의 크기를 반환합니다.
    const minDist = dist.get(target.toString())
    return minDist
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

    // 가중치가 모두 1로 같은 인접 리스트 생성
    for(let i=0; i<4; i++){
        for(let j=0; j<3; j++){
            let val = map_view[i][j]
            if(i-1 >= 0){views[val].push([map_view[i-1][j], 1])}
            if(i+1 !== map_view.length){views[val].push([map_view[i+1][j], 1])}
            if(j-1 >= 0){views[val].push([map_view[i][j-1], 1])}
            if(j+1 !== map_view[0].length){views[val].push([map_view[i][j+1], 1])}
        }
    }
    // console.log("인접 리스트입니다. 이동 가능 경로와 거리(가중치, 또는 이동비용) 정보를 담고 있습니다. 최단거리 탐색의 전제조건입니다 :)")
    // console.log(views)
    // console.log('---')
    
    let leftHand_StartAt = "*"
    let rightHand_startAt = "#"

    let result = "";

    numbers.map(targetLoc => {
        if(targetLoc == 1 || targetLoc == 4 || targetLoc == 7){
            result += "L"
            leftHand_StartAt = targetLoc.toString()
        } else if(targetLoc == 3 || targetLoc == 6 || targetLoc == 9){
            result += "R"
            rightHand_startAt = targetLoc.toString()
        } else if(targetLoc == 2 || targetLoc == 5 || targetLoc == 8 || targetLoc == 0){
            const leftHand_minDist = pathfinder(views, leftHand_StartAt, targetLoc);
            const rightHand_minDist = pathfinder(views, rightHand_startAt, targetLoc);
            if(leftHand_minDist > rightHand_minDist){
                result += "R"
                rightHand_startAt = targetLoc.toString()
            } else if(leftHand_minDist < rightHand_minDist){
                result += "L"
                leftHand_StartAt = targetLoc.toString()
            } else {
                if(hand === "right"){
                    result += "R"
                    rightHand_startAt = targetLoc.toString()
                } else if(hand === "left"){
                    result += "L"
                    leftHand_StartAt = targetLoc.toString()
                }
            }
        }
    })
    return result;
}

console.log("시작 지점으로부터 각 정점까지 이동 비용을 보여줍니다.")
console.log(solution([1,3,4,5,8,2,1,4,5,9,5], "right"))
