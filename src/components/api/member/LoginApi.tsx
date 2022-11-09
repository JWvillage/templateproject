import MemberMapStore from "../../../mapstore/map/MemberMapStore";

class LoginApi {
  static instance: LoginApi;
  memberStore: MemberMapStore = new MemberMapStore;

  memberLogin = (id: string, password: string) => {
    return this.memberStore.login(id, password);
  };
}

LoginApi.instance = new LoginApi();

export default LoginApi;
