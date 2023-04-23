const { Suspense } = require("react")
const { default: AppBar } = require("./AppBar/AppBar")
const { Outlet } = require("react-router-dom")



const Layout = () => {

    return(
        <>
        <AppBar/>
        <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
        </>
    )
}
export default Layout