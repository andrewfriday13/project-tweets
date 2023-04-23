const { Suspense } = require("react")
const { Outlet, NavLink } = require("react-router-dom")



const Navigation = () => {

    return (
        <div>
        <nav>
           <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to="/tweets">Tweets</NavLink> </li>
           </ul>
        </nav>
        <Suspense>
            <Outlet/>
        </Suspense>
        </div>
    )
}

export default Navigation