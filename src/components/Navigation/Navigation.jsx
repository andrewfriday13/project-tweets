import css from './Navigation-style.module.css';

const { Suspense } = require("react")
const { Outlet, NavLink } = require("react-router-dom")




const Navigation = () => {

    return (
        <>
           <ul className={css.navigation}>
                <li>
                    <NavLink
                        className={css.navigationBtn} to='/' > Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={css.navigationBtn} to="/tweets">Tweets
                    </NavLink>
                </li>
           </ul>
        <Suspense>
            <Outlet/>
        </Suspense>
        </>
    )
}

export default Navigation