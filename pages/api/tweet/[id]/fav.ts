
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const {query: {id}, 
            session: {user}
        } = req;
    const alreadyExists = await client.fav.findFirst({
        where: {
            messageId: +id.toString(),
            userId: user?.id,
        }
    });
    if(alreadyExists) {
        await client.fav.delete({
            where: {
                id: alreadyExists.id,
            }
        });
    } else {
        //
        await client.fav.create({
            data: {
                user: {
                    connect: {
                        id: user?.id
                    },
                },
                
                message: {
                    connect: {
                        id: +id.toString(),
                    }
                },
            },
        });
    }

    res.json({
        ok:true,
    });
}

export default withApiSession(withHandler({
    methods: ["POST"], 
    handler,
}));
