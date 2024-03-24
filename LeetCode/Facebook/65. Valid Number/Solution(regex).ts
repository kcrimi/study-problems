function isNumber(s: string): boolean {
    const decimal = "([-+]?((\\d+\\.\\d*)|(\\.\\d+)))"
    const integer = "([-+]?\\d+)"
    const regex = new RegExp(`^(${decimal}|${integer})([eE]${integer})?$`)
    console.log (s.match(regex))
    return regex.test(s)
};
