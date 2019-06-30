export class UserModel {
  name :string;
  gender:string;
  age:number;
  password:{
    pwd:string;
    confirmpwd:string;
    };

    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
}