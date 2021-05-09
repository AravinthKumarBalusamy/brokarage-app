export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));    ;
  
    if (user) {
      return { 'auth-token': user};
    } else {
      return {};
    }
  }
  