import { Member, MemberMapStore } from "../../../store";

class MemberRegist {
  static instance: MemberRegist;
  memberStore = MemberMapStore.instance;

  memberRegist = (member: Member) => {
    this.memberStore.regist(member);
  };
}

MemberRegist.instance = new MemberRegist();

export default MemberRegist;
