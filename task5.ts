type Matrix = (string | number)[][];

const getRandomString = (i: number): string => (Math.random() + i).toString(36).substring(7);

const generateMatrix = (n: number, m: number): Matrix => {
    const matrix: Matrix = [];
    for (let i = 0; i < n; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < m; j += 1) {
            if (Math.random() > 0.5) {
                matrix[i][j] = getRandomString(i);
            } else {
                matrix[i][j] = i + j;
            }
        }
    }
    return matrix;
}

const matrix = generateMatrix(2, 3);

const flat = (matrix: Matrix): (string | number)[] => {
    return matrix.reduce((acc, row) => {
        acc.push(...row);
        return acc;
    }, [] as (string | number)[]);
}

const list = flat(matrix);

type SplitResult = {
    strings: string[];
    numbers: number[];
}

const splitByType = (list: (string | number)[]): SplitResult => {
    const result: SplitResult = {
        strings: [],
        numbers: [],
    }
    list.forEach((item) => {
        if (typeof item === 'string') {
            result.strings.push(item);
        } else {
            result.numbers.push(item);
        }
    });

    return result;
}

const splited = splitByType(list);

console.log(splited);
