import "./../styles/index.scss";
import Recipes from "./Recipes";

import React from 'react'
// 輸入rafce快捷輸入

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>React Main</h1>
                </section>
            </main>
            <Recipes />
        </>
    )
}

export default App