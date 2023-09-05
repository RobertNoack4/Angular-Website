import { getAllListingsRoute } from "./getAllListingsRoute.js";
import { getListingsRoute } from "./getListingRoute.js";
import { addViewToListingRoute } from "./addViewToListing.js";
import { getUserListingsRoute } from "./getUserListings.js";
import { createNewListingsRoute} from "./createNewListings.js";

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    createNewListingsRoute,
    getListingsRoute,
    getUserListingsRoute,
]