import { Link } from "react-router-dom"
import style from './Home.module.css'

export const HomeApp = ()=>{

    return(
        <main className={style.container}>

            <div className={style.divTitle}>

                <h1 className={style.title}>Página Home</h1>
                <strong className={style.subTitle}>Bem vindo</strong>
            </div>
            
            
            <div className={style.divButtonLogin}>

                <h3 className={style.titleLogin}>Realize login para acessar a comunidade</h3>

                <Link to='/login'>
                    <button className={style.loginButton}>login</button>
                </Link>
            </div>



        </main>
    )
}