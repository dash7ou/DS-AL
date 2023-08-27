const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const buildAdjList = (times) => {
    const edges = new Map();
    for(let i of times){
        const [u, v, w] = i
        edges.set(u, [...(edges.get(u) || []) , [v, w]])
    }
    return edges
}


var networkDelayTime = function(times, n, k) {
    const adjList = buildAdjList(times)
    const minQ = new PriorityQueue((p1, p2) => {
        return p1.w - p2.w;
    });
    const visited = new Set()
    minQ.enqueue({w: 0, n: k})
    let t = 0;

    while (!minQ.isEmpty()) {
        const item = minQ.dequeue()
        const {w: w1, n: n1} = item

        if(visited.has(n1)){
            continue;
        }

        visited.add(n1)
        t = Math.max(t, w1)

        const i = adjList.get(n1)
        for(let i of (adjList.get(n1) || [])){
            const [n2, w2] = i
            if(!visited.has(n2)){
                minQ.enqueue({w: w1 + w2, n: n2})
            }
        }
    }

    return visited.size === n ? t : -1

};


console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2))
console.log(networkDelayTime([[1,2,1]], 2,  1))
console.log(networkDelayTime([[1,2,1]],2, 2))