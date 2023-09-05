import { getAllListingsRoute } from "./getAllListingsRoute.js";
import { getListingsRoute } from "./getListingRoute.js";
import { addViewToListingRoute } from "./addViewToListing.js";
import { getUserListingsRoute } from "./getUserListings.js";

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingsRoute,
    getUserListingsRoute,
]