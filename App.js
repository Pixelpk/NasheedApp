
import React from "react";
import Route from "./Route";
import {BlogProvider} from "./ContextApi";


const App =()=>{

    return (
        <BlogProvider>
            <Route/>
        </BlogProvider>
    )

}
export default App;


