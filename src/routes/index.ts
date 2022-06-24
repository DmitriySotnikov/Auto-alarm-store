import {Auth} from "../components/Auth";
import {Cart} from "../components/Cart";
import {Catalog} from "../pages/CatalogPage";
import {Service} from "../components/Service";
import {Works} from "../components/Work";

export const Routes = {
    AUTH: "Auth",
    CATALOG: "/catalog",
    CART: "/cart",
    HOME: "/home",
    LOGIN: "login",
    SERVICE: "services",
    WORKS: "works",
}

export const authRoutes = [
    {
        path: Routes.CART,
        Component: Cart,
    },
]

export const publicRoutes = [
    {
        path: Routes.CATALOG,
        Component: Catalog,
    },
    {
        path: Routes.LOGIN,
        Component: Auth,
    },
    {
        path: Routes.AUTH,
        Component: Auth,
    },
    {
        path: Routes.SERVICE,
        Component: Service,
    },
    {
        path: Routes.WORKS,
        Component: Works,
    },
]