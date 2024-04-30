[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**MY ANSWER:**

The runtime complexity of my implementation depends on both the number of vertices as well as the number of edges.

We know this because we iterate over each vertex in the matrix (we could say that this takes $O(V)$ time).

And for each vertex, we iterate over its surrounding vertices in the matrix. In the worst case, this takes an additional $O(V)$ time. But in the best case, this would take $O(E)$ time.

Thus, the runtime complexity depends on both the number of vertices and the number of edges, and the worst-case runtime complexity is $O(V^2)$, whereas the best-case time complexity is $O(V + E)$

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
