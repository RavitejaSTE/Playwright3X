function makeCounter(start = 0) {
    let count = start; 
    return {
        increment(){ count++;},
        decrement() { count--; },
        get() { return count; }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

// increment();



function login() {
  const appLaunch = false;

  function signUp() {
    console.log("User signup needed");
  }

  if (appLaunch) {
    console.log("User logged into the application");
  } else {
    signUp();
  }

  return appLaunch;
}

login();

