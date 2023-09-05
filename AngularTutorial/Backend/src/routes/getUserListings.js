import {db} from "../database";

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (reg, h) => {
        const userId = reg.params.userId

        const {results} = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId],
        );
        return results;
    }
}