console.log("--------------- Question48 ( BFS - Adj List and Adj Matrix ) -------------------");

const adjacencyList ={
    'A':['B','F'],
    'B':['A','F','C'],
    'C':['B','E','D'],
    'D':['C','E'],
    'E':['D','C','F'],
    'F':['A','B','E']
}

// T = O(V+E), S = O(V)
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

console.log("----------------------------------------------------------------------------------")

const vertices = ['A','B','C','D','E','F'];

const vertexIndices ={
    'A':0,
    'B':1,
    'C':2,
    'D':3,
    'E':4,
    'F':5
}

const adjacencyMatrix = [
    [0,1,0,0,0,1],
    [1,0,1,0,0,1],
    [0,1,0,1,1,0],
    [0,0,1,0,1,0],
    [0,0,1,1,0,1],
    [1,1,0,0,1,0]
]

// T O(v^2), S O(V)
const travMBFS = function(graph,start){
    const visited = {};
    const output = [];
    const queue = [start];
    visited[start] = true

    while(queue.length){
        const current = queue.shift();
        output.push(current);
        const neighbours = graph[vertexIndices[current]];
        for(let i = 0; i < neighbours.length; i++){
            const n = neighbours[i];
            if(n === 1 && !visited[vertices[i]]){
                queue.push(vertices[i])
                visited[vertices[i]] = true
            }
        }
    }

    return output
}

console.log(travMBFS(adjacencyMatrix,'A'));