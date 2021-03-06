import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { h, render } from 'preact'
import App from './src/components/app'
import styledComponents from 'styled-components'

// Router
import Router from './router'

// Redux
import 'jquery'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const Wrapper = styledComponents.body`
    textarea:hover, 
    input:hover, 
    textarea:active, 
    input:active, 
    textarea:focus, 
    input:focus,
    button:focus,
    button:active,
    button:hover,
    label:focus,
    .btn:active,
    .btn.active
    {
        outline:0px !important;
        -webkit-appearance: none;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

render((
    <Provider store={store}>
        <Wrapper>
            <Router />
        </Wrapper>
    </Provider>
), document.body)