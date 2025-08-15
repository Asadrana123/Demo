export const checkInput = (input) => {
    return input.replace(/[^0-9]/g, '').slice(0, 1);
}