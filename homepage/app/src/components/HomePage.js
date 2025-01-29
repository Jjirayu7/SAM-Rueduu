import SideBar from "./SideBar";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Footer from "./Footer";

function HomePage ({title, children}) {

    const pageTitle = title;

  return<>
<<<<<<< HEAD
    <div className='wrapper'>
=======
    <div className='wrapper' style={{ backgroundColor: '#FFF5F6' }}>
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
        <SideBar></SideBar>
        <Header title={pageTitle}></Header>
        <div className='content-wrapper p-2'>
            {children}
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <MenuBar></MenuBar>
=======
>>>>>>> 5f2f14a (update backoff)
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
        <Footer></Footer>
    </div>
        
        
    </>
}

export default HomePage; 