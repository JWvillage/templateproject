import { MemberMapStore } from "../../../store";

class MemberLogin {
  static instance: MemberLogin;
  memberStore: MemberMapStore = new MemberMapStore();

  memberLogin = (id: string, password: string) => {
    return this.memberStore.login(id, password);
  };
}

MemberLogin.instance = new MemberLogin();

export default MemberLogin;
