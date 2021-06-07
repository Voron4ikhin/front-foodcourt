export class EditProfile {
  username: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  bio: string;
  birthday: string;
  gender: string;
}

export class Profile extends EditProfile{
  email: string;
  date_joined: string;
}
