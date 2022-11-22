class SitterApplication {
  sitApplicationName: string;
  sitApplicationGender: string;
  sitApplicationBirth: string;
  sitApplicationPhone: string;
  sitApplicationAddress: string;
  sitApplicationSmoke: boolean;
  sitApplicationPet: string;
  sitApplicationExp: string;
  memberId: string;

  constructor(
    sitApplicationName: string,
    sitApplicationGender: string,
    sitApplicationBirth: string,
    sitApplicationPhone: string,
    sitApplicationAddress: string,
    sitApplicationSmoke: boolean,
    sitApplicationPet: string,
    sitApplicationExp: string,
    memberId: string
  ) {
    this.sitApplicationName = sitApplicationName
    this.sitApplicationGender = sitApplicationGender
    this.sitApplicationBirth = sitApplicationBirth
    this.sitApplicationPhone = sitApplicationPhone
    this.sitApplicationAddress = sitApplicationAddress
    this.sitApplicationSmoke = sitApplicationSmoke
    this.sitApplicationPet = sitApplicationPet
    this.sitApplicationExp = sitApplicationExp
    this.memberId = memberId
  }
}

export default SitterApplication;