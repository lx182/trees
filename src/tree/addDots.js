export const addDots = (str, numDots) => {
    return str.substring(0, 1) + '.'.repeat(numDots) + str.substring(1, str.length);
}