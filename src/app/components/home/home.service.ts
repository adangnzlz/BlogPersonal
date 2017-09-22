import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MasterService } from './../../services/master.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';


declare var $: any;

@Injectable()
export class HomeService {



    constructor(private http: Http, private masterService: MasterService) {

    }

    getData() {
        const observableSlide = this.masterService
        .get('http://pre.cysnet.es:8015/DriveDreamsPrePublic/.rest/v1/flota/car/list').map(res => {
            return res.json();
        });
        return observableSlide;
    }




}


