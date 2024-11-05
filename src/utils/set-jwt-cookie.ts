export function SetJwtCookie(jwt: string) {
    return document.cookie = `integracao-token=${jwt}`
}