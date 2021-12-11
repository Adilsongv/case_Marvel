import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";

<<<<<<< HEAD
@Injectable({ providedIn: "root" })
export class MarvelService {

    marvelUrl = environment.marvelUrl;
    timestamp = new Date().getTime().toString();
    publicKey = "9660bf44f99a38c7cf9cb1e1fe55a720";
    privateKey = "ad1f0e1b1c459f3eb1c2d51354b5625455e3b1b8";
    md5 = new Md5();
    hash = this.md5.appendStr(this.timestamp + this.privateKey + this.publicKey).end();
    headers = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    }

    constructor(protected httpClient: HttpClient) { }

    getMarvelComics() {

        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
        this.headers)
    }

    getMarvelComicsById(id: string) {
=======

const timestamp = new Date().getTime().toString();

const publicKey = "9660bf44f99a38c7cf9cb1e1fe55a720";

const privateKey = "ad1f0e1b1c459f3eb1c2d51354b5625455e3b1b8";

const md5 = new Md5();

const hash = md5.appendStr(timestamp + privateKey + publicKey).end();

@Injectable({providedIn: "root"})
export class MarvelService{
    
  public marvelUrl = environment.marvelUrl;
  
    constructor(protected httpClient: HttpClient){}

    chamadaQuadrinhosMarvel(){

        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {
                headers:  new HttpHeaders({
                    "Content-Type":"application/json",
                }),
            })
        
>>>>>>> a34f6714160935e4880c9a7ac790a79383645d52

        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics/${id}?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
        this.headers)
    }

}