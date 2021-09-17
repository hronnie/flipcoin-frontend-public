export const sideIndicator = (params: any) => {
    const element = document.createElement('span');
    if (params.value === 'SELL') {
        element.appendChild(document.createTextNode('Short'));
        element.className = 'sell-row';
    }
    if (params.value === 'BUY') {
        element.appendChild(document.createTextNode('Long'));
        element.className = 'buy-row';
    }
    return element;
};

export const yesNoComponent = (params: any) => {
    const element = document.createElement('span');
    if (params.value === 'SELL') {
        element.appendChild(document.createTextNode('Short'));
        element.className = 'sell-row';
    }
    if (params.value === 'BUY') {
        element.appendChild(document.createTextNode('Long'));
        element.className = 'buy-row';
    }
    return element;
};
