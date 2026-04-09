import { th } from "zod/locales";
import { getDb } from "../../config/db.js";


export class ClimaRepository {
    private collection(){
        return getDb().collection('climas');
    }

    async create (data: any){
        const result = await this.collection().insertOne(data);
        return {result: result.insertedId, ...data}
    }

    async findall(){
        return this.collection().find().toArray();
    }
    
    async findByuserId(UserId: string){
        return this.collection().findOne({UserId: UserId});
    }
}
