// import SendSms, {AndroidSuccessTypes} from 'react-native-sms'

export function device() {
  const varUA = window.navigator.userAgent.toLowerCase();
  const isApp = varUA.indexOf('android') > -1 || varUA.indexOf('ios') > -1;

  return isApp;
}

export function linkSms (url: string, otpNumber: string) {
  // let SmsOptions = {
  //   body: `The default body of the SMS!\n${otpNumber}`,
  //   successTypes: [AndroidSuccessTypes.all],
  //   attachment: {url}
  // }
  // SendSms.send(SmsOptions,
  // (completed, cancelled, error) => {
  //
  //   console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
  //
  // });
  // const varUA = window.navigator.userAgent.toLowerCase();
  // if (varUA.indexOf('ios') > -1)
  //   window.open(`sms:${url}?body=${otpNumber}`, '_system')
  // else
  //   window.location.href = `sms:${url}?body=${otpNumber}`
  window.open(`sms:01093800974?body=${otpNumber}`, '_system')
}

export function validate (e: React.ChangeEvent<HTMLInputElement>) {
  const { value } = e.target
  const { name } = e.target
  const validation = document.getElementById(`${ name }_check`)
  if (validation !== null && value !== null) {
    let pass: RegExp;
    const id = /^\w{6,12}$/
    const password = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    const birth = /^\d{4}-\d{2}-\d{2}$/
    if ( name === "id" ) {
      pass = id
    } else if ( name === "password" ) {
      pass = password
    } else if ( name === "birthDay" ) {
      pass = birth
    } else {
      pass = /^$/
    }
    if (pass.test(value)) {
      validation.innerHTML = "사용 가능합니다.";
      validation.removeAttribute('style')
      document.getElementById(`${ name }_sort`)?.setAttribute('src', '/static/img/openIcon.png');
    } else {
      validation.innerHTML = "사용 불가합니다.";
      validation.setAttribute('style', 'color: red');
      document.getElementById(`${ name }_sort`)?.setAttribute('src', '/static/img/lockIcon.png');
    }
  }
}