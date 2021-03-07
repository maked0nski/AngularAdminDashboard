export class Banks {
  private _GLMFO: number;
  private _SHORTNAME: string;


  constructor(GLMFO: number, SHORTNAME: string) {
    this._GLMFO = GLMFO;
    this._SHORTNAME = SHORTNAME;
  }

  get GLMFO(): number {
    return this._GLMFO;
  }

  get SHORTNAME(): string {
    return this._SHORTNAME;
  }
}
