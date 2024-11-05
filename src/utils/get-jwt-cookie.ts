export function GetJwtCookie() {
    return "Bearer " + document.cookie
        .split(';')
        .find(el => el.includes('integracao-token='))
        ?.trim()
        .replace('integracao-token=', '')
}