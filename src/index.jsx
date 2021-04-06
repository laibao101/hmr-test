import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App></App>, document.getElementById('root'))

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error(err)
        }
    })
}