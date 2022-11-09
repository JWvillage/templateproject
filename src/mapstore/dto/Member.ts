class Member {
  id: string = "";
  password: string = "";
  name: string = "";
  type: string = "";

  constructor(id: string, password: string, name: string, type: string) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.type = type;
  }
}

export default Member;
