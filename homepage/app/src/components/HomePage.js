import SideBar from "./SideBar";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Footer from "./Footer";

function HomePage ({title, children}) {

    const pageTitle = title;

  return<>
    <div className='wrapper' style={{ backgroundColor: '#FFF5F6' }}>
        <SideBar></SideBar>
        <Header title={pageTitle}></Header>
        <div className='content-wrapper p-2'>
            {children}
        </div>
<<<<<<< HEAD
        <MenuBar></MenuBar>
=======
>>>>>>> 5f2f14a (update backoff)
        <Footer></Footer>
    </div>
        
        
    </>
}

export default HomePage; 