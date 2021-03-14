export function convertSlugToUrl(slug, parameters) {
    let url = slug;
    Object.entries(parameters).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
    });
    return url;
};

export function convertUrlToBreadcrumbLink(url, parameters){
    let arr = url.split('/');
    let breadcrumbLink = '';
    if(arr.length < 3) {
        return breadcrumbLink;
    }
    breadcrumbLink = arr[2];
    Object.entries(parameters).forEach(([key, value]) => {
        breadcrumbLink = breadcrumbLink.replace(key, value);
    });
    return breadcrumbLink;
}