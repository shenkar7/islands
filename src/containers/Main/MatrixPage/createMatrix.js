export const createMatrix = (n, m, empty) => {
    
    if(n < 1 || m < 1)
        return null;

    const P = 0.5 // probability for a non-empty cell

    const matrix = [];

    for(let r = 0; r < n; r++){
        const row = [];
        for(let c = 0; c < m; c++){
            if (empty)
                row.push(false);
            else
                row.push(Math.random() < P);
        }
        matrix.push(row);
    }

    return matrix;
}