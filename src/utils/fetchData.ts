let globalLog = "trickojs"

export type FetchResult = Object | Promise<Response>

const capitalize = (str: string): string => !str ? "" : str[0].toUpperCase() + str.slice(1)

export const badResponse = (game: string, type: string): object => {
    return {
        success: false,
        code: 400,
        text: "Bad request",
        game: `${capitalize(game)}.io`,
        type: capitalize(type)
    }
}

export const setLog = (log: string): void => {
    const param = log.trim()
    if (param.length < 1 || param.length > 15) {
        throw new Error("Log identifier must be between 1 and 15 characters")
    }
    globalLog = param
}

export const getDataURL = (game: string, type: string, param: string | number | null) => {
    let url = `https://api.tricko.pro/${game}/${type}`
    if (param) url += `/${encodeURIComponent(param)}`
    url += url.includes("?") ? `&log=${globalLog}` : `?log=${globalLog}`

    return url
}

export const fetchData = async (game: string, type: string, param: string | number | null): Promise<Response> => {
    const url = getDataURL(game, type, param)
    const response = await fetch(url)
    return await response.json()
}