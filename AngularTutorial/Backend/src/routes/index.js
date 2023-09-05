import { getAllListingsRoute } from "./getAllListings.js";
import { getListingRoute } from "./getListing.js";
import { addViewToListingRoute } from "./addViewToListing.js";
import { updateListingRoute } from "./updateListing.js";
import { createNewListingRoute } from "./createNewListing.js";
import { getUserListingsRoute } from "./getUserListings.js";
import { deleteListingRoute } from "./deleteListing.js";

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    updateListingRoute,
    createNewListingRoute,
    getUserListingsRoute,
    deleteListingRoute,
]