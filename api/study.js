// AI service intentionally disabled to prevent paid API usage.
module.exports=(req,res)=>{res.setHeader('Cache-Control','no-store');return res.status(410).json({error:'AI study and interview services are disabled.'});};
