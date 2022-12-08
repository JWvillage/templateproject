import {
  Member,
  MemberMapStore
} from "../../../store";

class MemberLogic {
  static instance: MemberLogic;

  memberStore: MemberMapStore = new MemberMapStore();

  memberLogin = (id: string, password: string) => {
    return this.memberStore.login(id, password);
  };

  memberRegist = (member: Member) => {
    this.memberStore.regist(member);
  };

  memberSearch = (id: string) => {
    this.memberStore.search(id);
  }

}

MemberLogic.instance = new MemberLogic();

export default MemberLogic;