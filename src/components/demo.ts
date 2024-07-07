export const Demo = (target:HTMLElement, text:string):HTMLElement => {
    const div = document.createElement('div');
    div.innerHTML = text;
    target.appendChild(div);
    return div
}