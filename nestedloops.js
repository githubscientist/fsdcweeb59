
let times = 1;

while (times <= 3) {

    let count = 1;
    let lines = [];

    while (count <= 5) {
        lines.push(count);
        count++;
    }

    times++;

    console.log(lines.join(' '));
}

