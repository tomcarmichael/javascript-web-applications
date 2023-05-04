function slowSynchronous() {
  [...Array(5000000).keys()].forEach((i) => {
    if (i > (5000000 - 2)) console.log(i);
  });
  console.log("finished executing slowSynchronous()")
}

function quickSynchronous() {
  console.log("doing some quick sync stuff, but set timeout won't execute until the slow stuff is done too.")
}

function quickASync() {
  setTimeout(() => {
    console.log('Set timeout finished executing once mainFunction() had returned and the callstack was clear');
  }, 0);
}

// mainFunction must be popped off the callstack before any completed asynchronous functions can be moved from the Event Loop
// and onto the call stack
// hence, quickASync will always perform its console log last
function mainFunction () {
  quickASync();
  quickSynchronous();
  slowSynchronous();
  quickSynchronous()
};


mainFunction();
