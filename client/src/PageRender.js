import React from 'react'
import {useParams} from 'react-router-dom'
import NotFound from './components/NotFound'

const generatePage =(pageName) => {
    const component = () => require(`./pages/${pageName}`).default

    try {
        return React.createElement(component())
    } catch (error) {
        return <NotFound />
    }

}

const PageRender = () => {
    const {page, id} = useParams()
    console.log(page)

    let pageName = "";

    if(id){
        console.log("Ethi ethi id Ethi")
        pageName = `${page}/[id]`
    }else{
        console.log("Ethi ethi elsamma Ethi")
        console.log("Page Name",pageName)
        pageName =`${page}`
    }
    console.log("Purath ethi");

  return generatePage(pageName)
}

export default PageRender