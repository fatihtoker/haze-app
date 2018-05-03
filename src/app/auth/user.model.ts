import * as firebase from 'firebase';

export class UserModel {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  photoUrl: string;
  emailVerified: boolean;

  constructor (user: any) {
    if (user) {
      this.uid = user.uid;
      this.email = user.email;
      this.displayName = user.displayName;
      this.phoneNumber = user.phoneNumber;
      this.photoUrl = user.phoneNumber;
      this.emailVerified = user.emailVerified;
    }
  }
}
