// validates "n, m" pattern and valid range

export const textInputValidation = text => {
    if(text == null)
        return false;

    if(!text.includes(", ") && !/^[0-9, ]*$/.test(text))
        return false;
    
    const numbers = text.split(", ");

    if(numbers.length !== 2)
        return false;

    if(!/^[0-9]*$/.test(numbers[0]) || !/^[0-9]*$/.test(numbers[1]))
        return false;

    const [n, m] = [parseInt(numbers[0]), parseInt(numbers[1])]

    if(n < 1 || n > 1000 || m < 1 || m > 1000)
        return false;

    return true;
}