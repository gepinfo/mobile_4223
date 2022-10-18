import { Request, Response, NextFunction } from "express";
import { webviewController } from '../controller/webviewController';


export class Routes {
    private webview: webviewController = new webviewController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/webview').post(this.webview.GpCreate);
     }

}