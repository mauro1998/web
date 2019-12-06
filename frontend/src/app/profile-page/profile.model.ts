export interface Address {
  city: string;
  state: string;
  country: string;
}

export interface WorkExperience {
  company: string;
  roles: string[];
  description: string;
  time: string;
}

export interface Education {
  entityName: string;
  degree: string;
}

export interface Contact {
  email: string;
  phoneNumber: string;
}

export interface SocialNetworks {
  linkedin: string;
  pinterest: string;
  stackoverflow: string;
  github: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

export class Profile {
  public age: number;
  public fullName: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public title: string,
    public picture: string,
    public birthdate: string,
    public address: Address,
    public description: string,
    public workExperience: WorkExperience[],
    public education: Education[],
    public skills: string[],
    public contact: Contact,
    public socialNetworks: SocialNetworks
  ) {
    this.fullName = `${firstName} ${lastName}`;
    this.age = this.getAge(birthdate);
  }

  private getAge(birthdate: string) {
    const oneDayMs = 1000 * 60 * 60 * 24;
    const date = new Date(birthdate);
    const diff = Math.abs(Date.now() - date.getTime());
    return Math.floor(Math.round(diff / oneDayMs) / 365);
  }
}
