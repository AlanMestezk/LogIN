import { createBrowserRouter } from "react-router-dom";
import { Layout      }         from "./components/layout";
import { Home        }         from "./pages/home";
import { Login       }         from "./pages/login";
import { ErrorPage   }         from "./pages/Error404";
import { PageUserLog }         from "./pages/pageUser";


export const router = createBrowserRouter(

    [
        {
            element: <Layout/>,
            children:[
                {

                    path    : '/',
                    element : <Home/>
                },
                {
                    
                    path   : '/login',
                    element: <Login/>
                },
                {
                    path : '/user-page/:userId/:surnameId',
                    element: <PageUserLog/>
                },
                {

                    path : '*',
                    element: <ErrorPage/>
                }
            ]
        }
    ]
)