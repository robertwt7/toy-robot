# toy-robot

## List of commands:
    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT

## Instructions:
1. To run, run `node index.js <path-to-input>`
2. All of the test files are in tests folders with the extension *.txt



## Testing:
1. To run the blackbox testing (diffing), run `./runTest.sh`, this script will compare the expected output (tests/*.out with the tests/*.res)
2. To run mocha and chai, run `npm run test`
