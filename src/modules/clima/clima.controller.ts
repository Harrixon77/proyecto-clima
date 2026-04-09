import { type  Request, type Response } from "express";    
import { climaService } from "./clima.service.js";

export class climaController {
    private climaService = new climaService();

addClima = async (req: Request, res: Response) => {
 try{   
 
 
    const UserId = (req as any ).user?.sub;
    const {ciudad}=req.body;
    const result =await this.climaService.addClima({ciudad, UserId});
res.status(201).json({result});
 }catch (error: any ){
res.status(400).json({ error: error.message });
 }

}
findallUserId = async (req: Request, res: Response) => {
try{

    const result =await this.climaService.findallUserId();
res.status(200).json({result});

}catch (error: any) {
            res.status(500).json({ error: error.message });
        }

}
}
