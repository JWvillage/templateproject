import { Member } from "../../dto";

interface MemberStore {
  regist(member: Member): void;

  search(id: string): Member | undefined;

  login(id: string, password: string): Member | undefined;

  getId(name: string, email: string): string | undefined;

  getPassword(id: string, email: string): string | undefined;
}

export default MemberStore;
