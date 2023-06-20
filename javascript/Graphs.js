console.log("--------------- Question48 ( BFS - Adj List and Adj Matrix ) -------------------");
// Visit neighbours before child
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

console.log("--------------- Question48 ( DFS - Iterative and Recursive ) -------------------");
// Visit child before neighbours

const adjacencyList2 ={
    'A':['B','F'],
    'B':['A','C'],
    'C':['B','E','D'],
    'D':['C','E'],
    'E':['D','C','F'],
    'F':['A','E']
}


// T = O(V+E), S = O(V)
const travRecursiveDFS = function(graph,vertex,output,visited){
    output.push(vertex);
    visited[vertex]=true;

    const neighbours = graph[vertex];
    for(let i=0;i<neighbours.length;i++){
        const neighbour = neighbours[i];
        if(!visited[neighbour]){
            travRecursiveDFS(graph,neighbour,output,visited);
        }
    }

    return output;
}

console.log(travRecursiveDFS(adjacencyList2,'A',[],{}))

console.log("----------------------------------------------------------------------------------")

// T = O(V+E), S = O(V)
const travDFSIterative = function(graph,start){
    const output =[];
    const visited ={};
    const stack = [start];
    visited[start] = true;
    let current;
    while(stack.length>0){
        current= stack.pop();
        output.push(current);
        const neighbours = graph[current];
        for(let i=0;i<neighbours.length;i++){
            if(!visited[neighbours[i]]){
                stack.push(neighbours[i]);
                visited[neighbours[i]]=true;
            }
        }
    }
    return output;
}

console.log(travDFSIterative(adjacencyList2,'A'));

console.log("--------------- Question50 ( Number of connected components ) -------------------");
// T = O(V+E)
// S = adj list v+e, call stack max v, object v => O(V+E)

const buildAdjList = function(n,edges){
    const adj = new Array(n).fill(0).map(()=> []);

    for(let e of edges){
        const n1 = e[0];
        const n2 = e[1];

        adj[n1].push(n2);
        adj[n2].push(n1)
    }

    return adj
}

const dfs = function(graph, v, visited){
    visited[v] = true;
    const neighbour = graph[v];

    for(let n = 0 ; n < neighbour.length; n++){
        const nei = neighbour[n];
        if(!visited[nei]){
            dfs(graph, nei, visited)
        }
    }

}

const countComponents = function(n,edges){
    const graph = buildAdjList(n, edges);
    let visited = {};
    let counter = 0;

    for(let v=0; v<n; v++){
        if(!visited[v]){
            counter++
            dfs(graph, v, visited);
        }
    }

    return counter;
}


const n = 7;//0,1,2,3,4,5,6
const edges = [[0,1],[1,2],[3,4],[5,6]];
console.log(countComponents(n,edges))