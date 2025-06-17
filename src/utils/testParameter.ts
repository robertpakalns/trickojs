export type TestResult = false | { error: string }

type TestParams = {
    min?: number,
    max?: number,
    arr?: number[]
}

export const testParameterLength = (param: string, { min, max, arr }: TestParams): TestResult => {
    const len = param.length

    if (min && max && !arr) {
        if (len < min || len > max) {
            return {
                error: `Length must be between ${min} and ${max} characters.`
            }
        }
    }

    if (!min && !max && arr) {
        for (const num of arr) {
            if (len === num) {
                return false
            }
        }

        return {
            error: `Length must be exactly ${arr.join(", ")} characters.`
        }
    }

    if (min && max && arr) {
        if (len >= min && len <= max) {
            return false
        }

        for (const num of arr) {
            if (len === num) {
                return false
            }
        }

        return {
            error: `Length must be between ${min} and ${max} or exactly ${arr.join(", ")} characters.`
        }
    }

    return false
}