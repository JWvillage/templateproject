class Member {
  id: string;
  password: string;
  name: string;
  type: string;
  email: string;
  address: string;
  phone: string;
  registerDate: string;
  birthDay: string;
  gender: string;
  photo: string;

  constructor(
      id: string,
      password: string,
      name: string,
      email: string,
      address: string,
      phone: string,
      birthDay: string,
      gender: string,
  ) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.registerDate = new Date(+new Date() + 3240 * 10000).toISOString()
    this.birthDay = birthDay;
    this.gender = gender;
    this.photo = "";
    this.type = "nor";
  }

}

export default Member;