function minimumBribes(q: number[]) {
    let bribes = 0

    const ori: number[] = [];
    for (let i = 0; i < q.length; i++) {
        ori.push(i + 1)
    }

    for (let i = 0; i < q.length; i++) {
        if (q[i] === ori[i]) {
            continue;
        } else if (q[i] === ori[i+1]) {
            const temp = ori[i+1]
            ori[i+1] = ori[i]
            ori[i] = temp
            bribes += 1
        } else if (q[i] === ori[i+2]) {
            const temp = ori[i+2]
            ori[i+2] = ori[i+1]
            ori[i+1] = ori[i]
            ori[i] = temp
            bribes += 2
        } else {
            return 'Too chaotic'
        }
    }

    return bribes
}

export { minimumBribes };
