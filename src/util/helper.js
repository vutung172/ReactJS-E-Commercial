export const loadLink = (urls = []) => {
    let links = [];
    for (let url of urls) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = "text/css";
        link.href = url;
        document.head.appendChild(link);
        links.push(link);
    }
    return links;
}
export const loadScripts = (urls = []) => {
    let scripts = [];
    for (let url of urls) {
        let script = document.createElement('script');
        script.async = false;
        // script.type = 'text/javascript';
        script.src = url;
        document.body.appendChild(script);
        scripts.push(script);
    }
    return scripts;
}