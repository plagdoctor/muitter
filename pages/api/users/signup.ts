import withHandler, { ResponseType }  from "lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){    return res.json({
    ok:true,
    
});
}

export default withHandler(
({
    methods: ["POST"], 
    handler,
    isPrivate: false,
})
);
  