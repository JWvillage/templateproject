import { Member } from "../dto";
import MemoryMap from "./io/MemoryMap";
import MemberStore from "./MemberStore";

class MemberMapStore implements MemberStore {
  memberMap: Map<string, Member>;

  constructor() {
    this.memberMap = MemoryMap.getInstance().memberMap;
  }

  regist(member: Member): void {
    const selectMember = this.memberMap.get(member.id);

    if (selectMember) {
      throw new Error("already exist id");
    }

    this.memberMap.set(member.id, member);
  }

  search(id: string): Member | undefined {
    const searchMember = this.memberMap.get(id);

    return searchMember;
  }

  login(id: string, password: string): Member | undefined {
    return this.search(id);
  }
}

const member = new Member("a", "b", "c", "d");

new MemberMapStore().regist(member);

export default MemberMapStore;
