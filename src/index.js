window.addEventListener('DOMContentLoaded', parse);
function parse(e){
    let searchParam = window.location.search.slice(1);
    const regexp = new RegExp(/[&|?]abc_\d*\w*=\d*\w*/gm);

    if (!searchParam) return
    let params = searchParam.match(regexp);


    console.log(params);
}

function normalizeKeys(item){

}