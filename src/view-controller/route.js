import { components } from './view/index.js'

export const changeView = (route) => {
    switch (route) {
        case '#/': { return components.home() }
        case '#/mesero': { return components.order() }
    }       
}

export const init = () => {
    window.addEventListener('hashchange',changeView(window.location.hash))
}

