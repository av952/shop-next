import Head from "next/head"
import style from '../styles/comp.module.css'
import Menu from "./Menu"

export default function Layout({children,title}){ //children viene en todos los componentes

    return(
        <>
        <Head>
        <title>{title?title:'Github merch'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/vercel.svg"/>
      </Head>

        <Menu/>

        {/* Llmamos a children para renderizar los componentes que se encuentren dentro de layout*/}
        <div className={style.container}>{children}</div> 
        
        </>
    )
}
