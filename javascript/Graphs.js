console.log("--------------- Question48 ( BFS - Adj List and Adj Matrix ) -------------------");
// T = O(V+E), S = O(V)

const adjacencyList ={
    'A':['B','F'],
    'B':['A','F','C'],
    'C':['B','E','D'],
    'D':['C','E'],
    'E':['D','C','F'],
    'F':['A','B','E']
}

const travBFS = function(graph,start){
    const output = [];
    const queue = [start];
    const visited = {};

    visited[start] = true;
    let current;
    while(queue.length){
        current = queue.shift();
        output.push(current);
        const neighbours = graph[current];
        for(let i = 0; i < neighbours.length; i++){
            const n = neighbours[i];
            if(!visited[n]){
                queue.push(n);
                visited[n] = true;
            }
        }
    }

    return output;
}


console.log(travBFS(adjacencyList,'A'));