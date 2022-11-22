class Sitter {

  sitTitle: string;
  sitIntro: string;
  sitAddress: string;
  memberId: string;
  smallFee: string;
  middleFee: string;
  bigFee: string;
  sitClient: string | null;
  sitStarPoint: number;
  sitStarCount: number;
  sitLatitude: number;
  sitLongitude: number;

  constructor (
    sitTitle: string,
    sitIntro: string,
    sitAddress: string,
    memberId: string,
    smallFee: string,
    middleFee: string,
    bigFee: string,
    sitClient: string,
  ) {
    this.sitTitle = sitTitle
    this.sitIntro = sitIntro
    this.sitAddress = sitAddress
    this.memberId = memberId
    this.smallFee = smallFee
    this.middleFee = middleFee
    this.bigFee = bigFee
    this.sitClient = sitClient
    this.sitStarPoint = 0
    this.sitStarCount = 0
    this.sitLatitude = 37.478763
    this.sitLongitude = 126.878790
  }
}

export default Sitter