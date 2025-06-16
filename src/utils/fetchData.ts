const capitalize = (str: string): string => !str ? "" : str[0].toUpperCase() + str.slice(1)

export type FetchResult = Object | Promise<Response>

export const badResponse = (game: string, type: string): object => {
    return {
        success: false,
        code: 400,
        text: "Bad request",
        game: `${capitalize(game)}.io`,
        type: capitalize(type)
    }
}

export const fetchData = async (game: string, type: string, param: string | number | null): Promise<Response> => {
    const url = param
        ? `https://api.tricko.pro/${game}/${type}/${param}`
        : `https://api.tricko.pro/${game}/${type}`

    const response = await fetch(url)
    return await response.json()
}