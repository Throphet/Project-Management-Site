const banner = document.querySelector('#page-banner');
console.log("#page-banner node type is: ", banner.nodeType);
console.log("#page-banner name type is: ", banner.nodeName);
console.log("#page-banner has child nodes: ", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);