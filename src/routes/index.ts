import {Auth} from "../components/Auth";
import {Cart} from "../components/Cart";
import {Catalog} from "../pages/CatalogPage";
import {Home} from "../pages/HomePage";
import {Service} from "../components/Service";
import {Works} from "../components/Work";

export const Routes = {
    AUTH: "auth",
    CATALOG: "catalog",
    CART: "cart",
    HOME: "home",
    LOGIN: "login",
    SERVICE: "services",
    WORKS: "works",
}


export const authRoutes = [
    {
        path: Routes.CART,
        Element: Cart,
    },
]

export const publicRoutes = [
    {
        path: Routes.HOME,
        Element: Home,
    },
    {
        path: Routes.CATALOG,
        Element: Catalog,
    },
    {
        path: Routes.LOGIN,
        Element: Auth,
    },
    {
        path: Routes.AUTH,
        Element: Auth,
    },
    {
        path: Routes.SERVICE,
        Element: Service,
    },
    {
        path: Routes.WORKS,
        Element: Works,
    },
]