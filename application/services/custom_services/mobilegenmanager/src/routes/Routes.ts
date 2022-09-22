import { Request, Response, NextFunction } from "express";
import { mobileController } from '../controller/mobileController';


export class Routes {
    private mobile: mobileController = new mobileController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/mobile/:id').delete(this.mobile.GpDelete);
app.route('/mobile/get/search').get(this.mobile.GpSearch);
app.route('/mobile').put(this.mobile.GpUpdate);
app.route('/mobile/:id').get(this.mobile.GpGetNounById);
app.route('/mobile').get(this.mobile.GpGetAllValues);
app.route('/mobile').post(this.mobile.GpCreate);
app.route('/mobile/get/update').put(this.mobile.GpSearchForUpdate);
     }

}