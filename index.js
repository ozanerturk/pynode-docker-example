const pynode = require('@fridgerator/pynode');
// Workaround for linking issue in linux:
// https://bugs.python.org/issue4434
// if you get: `undefined symbol: PyExc_ValueError` or `undefined symbol: PyExc_SystemError`

// optionally pass a path to use as Python module search path
pynode.startInterpreter();

// add current path as Python module search path, so it finds our test.py
pynode.appendSysPath(__dirname);

// open the python file (module)
pynode.openFile('example');

// call the python function and get a return value
let args = ["John"];
pynode.call("hello", ...args, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
