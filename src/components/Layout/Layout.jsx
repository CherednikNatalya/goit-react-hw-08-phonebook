import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {AppBar} from 'components/AppBar/AppBar'
import { Container, 
    // Header,Link 
} from "./SharedLayout.styled";
import Loader from '../Loader/Loader'

const Layout = () =>{
return (
    <Container>
      {/* <Header>
        <nav>
          <Link to="">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header> */}
     <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
)
}

export default Layout