const zlib = require('zlib');
const { promisify } = require('util');
const sizeof = require('sizeof');

const jsonObject = {
    "mx0": [
        "7",
        "5",
        "6",
        "4",
        "A",
        "K",
        "8",
        "2",
        "C",
        "8",
        "9",
        "9",
        "5",
        "9",
        "3",
        "2",
        "5",
        "7",
        "9",
        "9",
        "3",
        "7",
        "B",
        "2"
    ],
    "fmt": [
        "11111",
        "14",
        "2111",
        "1121",
        "1112",
        "11111"
    ],
    "mul": 1,
    "mgw": 3200,
    "cMs": [
        "2:0",
        "3:0"
    ],
    "iWf": false,
    "id": "382ef4fc-478e-476c-9190-1b32a494dc2d",
    "sId": "9869",
    "cId": "27c00ced63424e139fa0fd4b99cbba78",
    "v": 6,
    "s": 2,
    "bId": "30",
    "wat": 6450,
    "fRe": 4,
    "fta": 5,
    "rta": 4,
    "isF": "F",
    "isT": "F",
    "bt": 1721302134076,
    "mx": [
        "7",
        "5",
        "6",
        "4",
        "A",
        "K",
        "8",
        "2",
        "C",
        "8",
        "9",
        "9",
        "5",
        "9",
        "3",
        "2",
        "5",
        "7",
        "9",
        "K",
        "3",
        "7",
        "B",
        "2"
    ],
    "rt": 1721302134077
}

// Function to compress JSON object
async function compressJsonObject(jsonObj) {
    const jsonString = JSON.stringify(jsonObj); // Convert JSON object to string
    return await new Promise((resolve, reject) =>
        zlib.gzip(jsonString, (err, buffer) => { // Compress string
            return err ? reject(err) : resolve(buffer)
        })
    );
}

// Function to compress JSON object
function compressJsonObjectStringify(jsonObj) {
    return JSON.stringify(jsonObj); // Convert JSON object to string
}

async function compressJsonObjectBase64(jsonObj) {
    const jsonString = JSON.stringify(jsonObj); // Convert JSON object to string
    return await new Promise((resolve, reject) =>
        zlib.gzip(jsonString, (err, buffer) => { // Compress string
            return err ? reject(err) : resolve(buffer.toString('base64'))
        })
    );
}

// Function to decompress buffer to JSON object
async function decompressJsonObject(buffer) {
    return await new Promise((resolve, reject) =>
        zlib.gunzip(buffer, (err, decompressedBuffer) => { // Decompress buffer
            if (err) {
                reject(err)
            }
            const jsonString = decompressedBuffer.toString(); // Convert buffer to string
            const jsonObj = JSON.parse(jsonString); // Parse string to JSON object
            resolve(jsonObj)
        })
    );
}

// Function to decompress buffer to JSON object
async function decompressJsonObjectBase64(compressedString) {
    return await new Promise((resolve, reject) =>{
        const buffer = Buffer.from(compressedString, 'base64');
        zlib.gunzip(buffer, (err, decompressedBuffer) => { // Decompress buffer
            if (err) {
                reject(err)
            }
            const jsonString = decompressedBuffer.toString(); // Convert buffer to string
            const jsonObj = JSON.parse(jsonString); // Parse string to JSON object
            resolve(jsonObj)
        })
    });
}

function roughSizeOfObject(object) {
    const objectList = [];
    const stack = [object];
    let bytes = 0;

    while (stack.length) {
        const value = stack.pop();

        if (typeof value === 'boolean') {
            bytes += 4;
        } else if (typeof value === 'string') {
            bytes += value.length * 2;
        } else if (typeof value === 'number') {
            bytes += 8;
        } else if (typeof value === 'object' && value !== null) {
            if (objectList.indexOf(value) === -1) {
                objectList.push(value);

                for (const i in value) {
                    stack.push(value[i]);
                }
            }
        }
    }
    return bytes;
}

async function test() {
    // Buffer
    const compressedBuffer = await compressJsonObject(jsonObject);
    console.log('Compressed Buffer:', compressedBuffer);
    // console.log('Compressed compressedBuffer.length:', compressedBuffer.length);

    const sizeInUtf8 = Buffer.byteLength(compressedBuffer, 'utf8');
    console.log(`Compressed Buffer size: ${sizeInUtf8} bytes`);
    // console.log(`Compressed Buffer size -> roughSizeOfObject: ${roughSizeOfObject(compressedBuffer)} bytes`);
    // console.log(`Compressed Buffer Size of object: ${sizeof.sizeof(compressedBuffer)} bytes`);
    //
    // const decompressObject = await decompressJsonObject(compressedBuffer);
    // console.log('Decompressed Buffer: %j', decompressObject);

    console.log("===================================================================")

    // Stringify
    const compressStringify = compressJsonObjectStringify(jsonObject);
    console.log('Compressed Stringify: %j', compressStringify);
    const compressStringifySize = Buffer.byteLength(compressStringify, 'utf8');
    console.log(`Compressed Stringify size: ${compressStringifySize} bytes`);
    // console.log(`Compressed Stringify Size of object: ${sizeof.sizeof(compressStringifySize)} bytes`);

    console.log("===================================================================")
    // Compress Base64
    const compressObjectBase64 = await compressJsonObjectBase64(jsonObject);
    console.log('Compressed Buffer + Base64: %s', compressObjectBase64);
    const compressObjectBase64Size = Buffer.byteLength(compressObjectBase64, 'base64');
    console.log(`Compressed Buffer + Base64 size: ${compressObjectBase64Size} bytes`);
    // console.log(`Compressed Base64 Size of object: ${sizeof.sizeof(compressObjectBase64Size)} bytes`);
    // const decompressObjectBase64 = await decompressJsonObjectBase64(compressObjectBase64);
    // console.log('Decompressed Base64: %j', decompressObjectBase64);

}
test()

// Usage example
// compressJsonObject(jsonObject, (err, compressedBuffer) => {
//   if (err) {
//     console.error('Error compressing JSON object:', err);
//     return;
//   }

//   console.log('Compressed Buffer:', compressedBuffer);

//   decompressJsonObject(compressedBuffer, (err, decompressedJsonObject) => {
//     if (err) {
//       console.error('Error decompressing Buffer:', err);
//       return;
//     }

//     console.log('Decompressed JSON Object:', decompressedJsonObject);
//   });
// });

