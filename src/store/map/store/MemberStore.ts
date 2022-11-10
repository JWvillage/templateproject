import { Member } from "../../dto";

interface MemberStore {
  regist(member: Member): void;

  search(id: string): Member | undefined;

  login(id: string, password: string): Member | undefined;
}

export default MemberStore;
