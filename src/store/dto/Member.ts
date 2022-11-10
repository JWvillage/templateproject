class Member {
  id: string = "";
  password: string = "";
  name: string = "";
  address: string = "";
  type: string = "nor";

  constructor(id: string, password: string, name: string, address: string) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.address = address;
  }
}

export default Member;
