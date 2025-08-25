// The Big O Notation:

// O(n)
function logItems(n) {
    for (let i=0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log( i, j)
        }
    }
    for (let k=0; k < n; k++)
        console.log(k);
}
logItems(10);

// O(2n) -- drop the constant (2)
function logItems(n) {
    for (let i=0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; j < n; j++) {
        console.log(j);
    }
}
logItems(10);

// O(n^2)
function logItems(n) {
    for (let i=0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log( i, j)
        }
    }
}
logItems(10);

// 0(n^2 + n) -- (drop non-dominant(n))
function logItems(n) {
    for (let i=0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log( i, j)
        }
    }
    for (let k=0; k < n; k++)
        console.log(k);
}
logItems(10);

// O(1)
function addItems(n) {
    return n + n;
}

addItems();

// O(2) -- simplify to O(1)
function addItems(n) {
    return n + n + n;
}

// O(log n)
nums = [1, 2, 3, 4, 5, 6, 7, 8]
// looking for # 1
// divid & conquor: [1,2,3,4] [5,6,7,8]
//                  [1,2] [3,4]
//                  [1] [2]

// Different Terms for Inputs
function logItems(a, b) {
    for (let i=0; i < a; i++) {
        console.log(i)
    }
    for (let j = 0; j < b; j++) {
        console.log(j);
    }
}
// this is NOT O(2n) because a != 0 at the same time b = 0. ex: a=1, b=100. so the first loop is O(a) and the second is O(b) simplified to O(a + b). you can't use n, you have to use different terms for inputs. same with nested for loops. it becomes O(a * b)