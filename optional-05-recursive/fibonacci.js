function fibonacci(n) {
    if (n === 0) {
        return [0];
    }

    if (n === 1) {
        return [0, 1];
    }

    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
