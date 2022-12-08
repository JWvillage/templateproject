import {Member} from "../../dto";
import MemberStore from "../storeModel/MemberStore";
import {MemoryMap} from "./io";

class MemberMapStore implements MemberStore {
  memberMap: Map<string, Member>;
  static instance: MemberMapStore;

  constructor() {
    this.memberMap = MemoryMap.getInstance().memberMap;
  }

  regist(member: Member): void {
    const selectMember = this.memberMap.get(member.id);

    if (selectMember) {
      throw new Error("already exist id");
    }

    this.memberMap.set(member.id, member);
    this.memberMap.set(member.name, member);
    this.memberMap.set(member.email, member);
  }

  search(id: string): Member | undefined {

    return this.memberMap.get(id);
  }

  login(id: string, password: string): Member | undefined {
    if (this.search(id)?.password === password) {
      return this.search(id);
    }
  }

  getId(name: string, email: string): string | undefined {

    let searchMember1 = this.memberMap.get(name);
    let searchMember2 = this.memberMap.get(email);

    if (searchMember1 !== undefined || searchMember2 !== undefined) {
      if (searchMember1 === searchMember2) {
        return searchMember1?.id
      }
    } else {
      alert('No such member for this name or this email')
    }
  }

  getPassword(id: string, email: string): string | undefined {

    return;
  }
}

const member = new Member("a", "b", "NakaLiCouBae", "kakao@kakao.co.kr", "naver본사", "010-1111-2222", "2022-11-22", "F");

new MemberMapStore().regist(member);

MemberMapStore.instance = new MemberMapStore();

export default MemberMapStore;