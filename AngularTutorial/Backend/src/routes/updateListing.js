import { db } from '../database';

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/updateListing/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const name = "";
        const description = "";
        const price = 0;

        console.log(req.payload);

        if(req.payload !== null)
        {
            name = req.payload[0];
            description = req.payload[1];
            price = req.payload[2];
            const userId = '12345';
            await db.query(`
                UPDATE listings
                    SET name=?, description=?, price=?
                    WHERE id=? AND user_id=?
            `, [name, description, price, id, userId]);
            const { results } = await db.query(
                'SELECT * FROM listings WHERE id=? AND user_id=?',
                [id, userId],
            );
            return results[0];    
        }
    }
}