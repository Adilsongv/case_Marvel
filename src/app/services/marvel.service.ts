import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";




@Injectable({providedIn: "root"})
export class MarvelService{
    
    // tirando as variaveis de dentro do metodo chamar quadrinhos e transformando em variaies publicas
    // para não cairmos em redundancia ou erro ao chama-las novamente no segundo metodo
    marvelUrl = environment.marvelUrl;
    timestamp = new Date().getTime().toString();
    publicKey = "9660bf44f99a38c7cf9cb1e1fe55a720";
    privateKey = "ad1f0e1b1c459f3eb1c2d51354b5625455e3b1b8";
    md5 = new Md5();
    hash = this.md5.appendStr(this.timestamp + this.privateKey + this.publicKey).end();
    headers = {
        headers:  new HttpHeaders({
            "Content-Type":"application/json",
        }),
    };


    constructor(protected httpClient: HttpClient){}
    // usando padrão de programação ao iniciar chamada pelo verbo
    getMarvelComics(): Observable<any>{
        // não é possivel utilizar quebra de linha no link da api pois as quebras seriam inseridas no link como espaços ;(
        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`, 
              this.headers)
    }
        // a diferença entre os dois metodos é a inserção da variavel id depois de comics
        // otulizado o observable para aguardar todo retorno http
    getMarvelComicsById(id: string): Observable<any>{
        return this.httpClient.get<any>(`${this.marvelUrl}/v1/public/comics/${id}?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`, 
              this.headers)
    }
    
}