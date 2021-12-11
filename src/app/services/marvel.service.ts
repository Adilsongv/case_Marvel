import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";

@Injectable({providedIn: "root"})
export class MarvelService{
    
  public marvelUrl = environment.marvelUrl;
  
    constructor(protected httpClient: HttpClient){}

    chamadaQuadrinhosMarvel(){

        const timestamp = new Date().getTime().toString();

        const publicKey = "9660bf44f99a38c7cf9cb1e1fe55a720";

        const privateKey = "ad1f0e1b1c459f3eb1c2d51354b5625455e3b1b8";

        const md5 = new Md5();

        const hash = md5.appendStr(timestamp + privateKey + publicKey).end();

        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
                headers:  new HttpHeaders({
                    "Content-Type":"application/json",
                }),
            })
        

    }

    
}