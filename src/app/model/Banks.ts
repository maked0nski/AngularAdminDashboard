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

  set GLMFO(value: number) {
    this._GLMFO = value;
  }

  get SHORTNAME(): string {
    return this._SHORTNAME;
  }

  set SHORTNAME(value: string) {
    this._SHORTNAME = value;
  }
}
