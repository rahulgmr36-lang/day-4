const fs = require('fs');
const { createCanvas } = require('canvas');

// Note: I don't know if 'canvas' is installed. I'll check first.
// If not, I'll use a simpler way.
console.log("Checking for canvas...");
try {
    require.resolve('canvas');
    console.log("Canvas is available.");
} catch (e) {
    console.log("Canvas is not available.");
}
