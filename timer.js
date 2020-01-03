let timeLeft = 0 
let argv = process.argv 

if (!argv[2]) {
  console.log("please enter an argument")
  process.exit(1)
} else if (argv[2].indexOf("s") >= 1) {
  timeLeft = parseInt(argv[2].slice(0, -1), 10)
} else if (argv[2].indexOf("min") >= 1) {
  timeLeft = parseInt(argv[2].slice(0, -1), 10) * 60
} else {
  console.log("argument must be in the following format: 5s for 5 seconds, 10min for 10 minutes")
}

let interval = setInterval(()=>{
  timeLeft -- 
  console.log(`Left: ${timeLeft}s`)
  if (timeLeft === 0) {
    clearInterval(interval)
    process.exit(0)
  }
}, 1000)