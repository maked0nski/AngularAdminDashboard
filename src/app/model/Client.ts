import {Banks} from './Banks';

export class Client {
  id: number;
  name: string;
  legalAdress?: string;
  actualAdress?: string;
  company?: boolean;
  telephone?: number;
  edrpou?: number;
  ipn?: number;
  iban?: number;
  bank?: Banks;
  director?: string;
  surveillance?: boolean;
  maintenance?: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(id: number, name: string, legalAdress?: string, actualAdress?: string, company?: boolean, telephone?: number, edrpou?: number, ipn?: number, iban?: number, bank?: Banks, director?: string, surveillance?: boolean, maintenance?: boolean) {
    this.id = id;
    this.name = name;
    this.legalAdress = legalAdress;
    this.actualAdress = actualAdress;
    this.company = company;
    this.telephone = telephone;
    this.edrpou = edrpou;
    this.ipn = ipn;
    this.iban = iban;
    this.bank = bank;
    this.director = director;
    this.surveillance = surveillance;
    this.maintenance = maintenance;
  }
}
