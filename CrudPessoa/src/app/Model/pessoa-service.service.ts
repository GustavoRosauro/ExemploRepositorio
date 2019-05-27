import { Injectable } from '@angular/core';
import { Pessoa } from './Pessoa';
import { HttpClient } from '@angular/common/http';
import { ok } from 'assert';
import { Config } from 'protractor';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  constructor(private pessoa:Pessoa,private http:HttpClient, private route:Router) { }

public EnviaPessoa(pessoa:Pessoa){
return this.http.post("/api/values",{nome:pessoa.nome,idade:pessoa.idade}).subscribe(
  data=>{
     console.log(data)
    },
    (error:any)=>{
      console.log(error);
    });
}
public BuscaPessoas(){
  return this.http.get<Pessoa>('/api/values');
}
public GetPessoa(id:number){
  return this.http.get<Pessoa>('/api/values/'+id);
}
public EditPessoa(pessoa:Pessoa){
  return this.http.put("/api/values/"+pessoa.id,pessoa).subscribe(
    data=>{ 
      console.log("Ok");
    },
    (error:any)=>{
      console.log(error);
    });  
}
public DeletaPessoa(id:number){
  return this.http.delete("/api/values/"+id).subscribe(data=>{
    console.log("Feito");
    this.route.navigate(["/lista"]);
  },
  (error:any)=>{
    console.log(error);
  });
}
}