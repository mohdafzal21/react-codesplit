//

//buffer is used when dealing with raw data 
var buf = new Buffer(stream);

//example

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii')); 

/// buf to json 
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//debugging nodejs
// node --inspect-brk (filename)