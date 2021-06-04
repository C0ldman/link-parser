const startKey = 'abc_';
const subdomain = 'https://subdomain.example.com'

window.addEventListener('DOMContentLoaded', parse);

function parse() {
    if (!window.location.search) return

    let params = new URLSearchParams(window.location.href);
    let searchParameters = getParameters(params);

    let links = document.links;

    for (let element of links) {
        if (element.href.startsWith(subdomain)) {
            let newLink = getLink(element, searchParameters);
            updateElementLink(element, newLink)
        }
    }
}

function getParameters(incomeParams) {
    let params = [];
    for (let item of incomeParams) {
        let key = item[0].toLowerCase().replace(`${window.location.origin}${window.location.pathname}?`, "");
        if (key.startsWith(startKey)) {
            params = [...params, [`${key}`, `${item[1]}`]];
        }
    }
    return params
}

function getLink(element, params) {
    let hasQueryParams = element.href.includes("?");
    let newLink = hasQueryParams ? element.href + "&" : element.href + "?";
    params.forEach(item => newLink = `${newLink}${item[0]}=${item[1]}&`);
    return newLink.slice(0, -1)
}

function updateElementLink(element, link) {
    element.setAttribute('href', link);
}

modules.exports = parse;