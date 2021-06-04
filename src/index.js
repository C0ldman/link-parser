window.addEventListener('DOMContentLoaded', parse);

function parse(e) {
    if (!window.location.search) return

    let subdomain = 'https://subdomain.example.com'
    let params = new URLSearchParams(window.location.href);
    let search = getParameters(params);

    let links = document.links;

    for (let element of links) {
        if (element.href.startsWith(subdomain)) {
            updateLink(element, search)
        }
    }
}

function getParameters(incomeParams) {
    let params = [];
    for (let item of incomeParams) {
        let key = item[0].toLowerCase().replace(`${window.location.origin}${window.location.pathname}?`, "");
        if (key.startsWith('abc_')) {
            params.push([`${key}`, `${item[1]}`]);
        }
    }
    return params
}

function updateLink(element, params) {
    let index = element.href.indexOf('?');
    let newLink;
    index > 0 ? newLink = element.href + '&' : newLink = element.href + '?';
    for (let item of params) {
        newLink = `${newLink}${item[0]}=${item[1]}&`
    }
    element.setAttribute('href', newLink.slice(0, -1))
}