# Intermittent 500 Errors in Express.js
This repository demonstrates a common error in Express.js applications where asynchronous operations within request handlers can lead to intermittent 500 errors if not properly handled.

## Bug Description
The `bug.js` file contains an Express.js application that simulates an asynchronous operation (e.g., database query).  This operation randomly throws a simulated database error. Because the error isn't caught, it causes the server to crash intermittently.

## Solution
The `bugSolution.js` file provides a corrected version that uses `async/await` and a `try...catch` block to gracefully handle the potential error, sending a more informative error response to the client instead of crashing.

## How to Reproduce
1. Clone the repository.
2. Navigate to the directory.
3. Run `node bug.js` and observe the intermittent 500 errors.
4. Run `node bugSolution.js` to see the improved error handling.