import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    if(req.method === "GET") {
        const {query: {id}, 
        session: {user}
    } = req;
        const tweets = await client.message.findUnique({
            where: {
                id: +id.toString(),
            },
            include: {
                user: true,
                _count: {
                    select: {
                        favs:true,
                    }
                }
            }
        });

        const isLiked = Boolean(await client.fav.findFirst({
            select: {
                id:true,
            },
            where: {
                messageId: +id.toString(),
                userId: user?.id
    
            }
        })
        );        
        res.json({
            ok: true,
            tweets,
            isLiked
        });
    }
}

export default withApiSession(withHandler({
    methods: ["GET"], 
    handler,
}));
