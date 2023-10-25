function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type);

    for(let prop in reactElement.props) {
        domElement.innerText = reactElement.children;
        // domElement.innerHTML = reactElement.children;
        if(prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);