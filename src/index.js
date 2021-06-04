const startKey = 'abc_';
const subdomain = 'https://subdomain.example.com'

window.addEventListener('DOMContentLoaded', parse);

function parse() {
    if (!window.location.search) return

    let searchParameters = getParameters();

    let links = document.links;

    for (let element of links) {
        if (element.href.startsWith(subdomain)) {
            let newLink = getLink(element, searchParameters);
            element.setAttribute('href', newLink);
        }
    }
}

function getParameters() {
    let searchString = window.location.search.slice(1);
    return searchString
        .split('&')
        .map(item => item.split('='))
        .map(item=>[item[0].toLowerCase(),item[1]])
        .filter(item=>item[0].startsWith(startKey));
}

function getLink(element, params) {
    let hasQueryParams = element.href.includes("?");
    let newLink = hasQueryParams ? element.href + "&" : element.href + "?";
    params.forEach(item => newLink = `${newLink}${item[0]}=${item[1]}&`);
    return newLink.slice(0, -1)
}
