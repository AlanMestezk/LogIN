import { useNavigate, useParams } from "react-router-dom"
import { RiLogoutCircleFill  }    from 'react-icons/ri'
import { UserContext }            from "../../context/User"
import { useContext  }            from "react"
import style                      from './PageUser.module.css'


export const PageUser = () =>{

    const navigate = useNavigate()

    const {deleteName}= useContext(UserContext)

    const {userId, surnameId} = useParams()

    const handleLogOff = ()=>{

        console.log("handleLogOff is called");

        deleteName

        navigate('/')
        
    }

    return(
        <main className={style.container}>
            
            <div className={style.spaceUser}>

                <div className={style.showUser}>

                    <h1 className={style.title}>Você logou</h1>
                    <h3 className={style.infoUser}>Bem vindo {userId}</h3>
                    <h3 className={style.infoUser}>Mais conhecido como {surnameId}</h3>
                </div>

                <div className={style.divButton}>

                    <abbr title="Logout">
                        <button className={style.button} onClick={handleLogOff}>
                            <RiLogoutCircleFill />
                        </button>
                    </abbr>
                </div>

            </div>
        </main>
    )
}