//import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { RiLoginCircleFill }               from "react-icons/ri"
import { TiWarning   }                     from 'react-icons/ti'
import { FcApproval  }                     from 'react-icons/fc'
import { UserContext }                     from "../../context/User"
import { useNavigate }                     from "react-router-dom"
import style                               from './Login.module.css'


interface UserProps{

    userName   : string | any
    userSurname: string | any
}

export const LoginApp = () => {

    const navigate = useNavigate()
    const { name, surname, change } = useContext(UserContext);
  
    const [userName,       setUserName] = useState<string | any>(name)
    const [userSurname, setUserSurname] = useState<string | any>(surname)
    const [user,               setUser] = useState<UserProps | null>(null)
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault()
  
      let newUser = {

        userName   : userName,
        userSurname: userSurname,
      };
  
      setUser(newUser)

      change(newUser.userName, newUser.userSurname);
  
      alert(`Usuário: ${userName} || Apelido: ${userSurname}`)
      setUserName('')
      setUserSurname('')
    };
  
    useEffect(() => {

      if (user) {
        navigate(`/user-page/${user.userName}/${user.userSurname}`);
      }
    }, [user]);
  

      // UseEffect para observar alterações no estado do user

    return(
        <main className={style.container}>

            <div className={style.divTitle}>
                
                <h1 className={style.title}>FAÇA O LOGIN</h1>

            </div>
            
            <div className={style.divInput}>


              <div className={style.containerInput}>
                <input 
                    type="text"
                    placeholder="digite seu nome"
                    value={userName}
                    className={style.input}
                    onChange={(e)=> setUserName(e.target.value)}
                />
                {
                  userName && userName.trim().length > 3 ?
                  (
                    <strong className={style.alert}>nome aceito <FcApproval/></strong>
                  ): (
                    <strong className={style.alert2}>nome muito curto <TiWarning/></strong>
                  )
                }

              </div>
                
              <div className={style.containerInput}>
                <input 
                    type="text"
                    placeholder="digite seu apelido"
                    value={userSurname}
                    className={style.input}
                    onChange={(e)=> setUserSurname(e.target.value)}
                  />
                {
                  userSurname && userSurname.trim().length > 6 ?
                  (
                    <strong className={style.alert}>apelido aceito <FcApproval/></strong>
                  ): (
                    <strong className={style.alert2}>apelido muito curto <TiWarning/></strong>
                  )
                  }
              </div>


                {
                  
                  userName && userName.trim().length > 3 && userSurname && userSurname.trim().length > 6 ? 
                  (
                    <>
                      <abbr title="Login">

                          <button className={style.button} onClick={handleLogin}><RiLoginCircleFill /></button> 

                      </abbr>
                    </>
                  ):
                  (
                    <>
                      <h4>Preencha os campos acima</h4>
                    </>
                  )
                }

           


            </div>

        </main>
    )
}