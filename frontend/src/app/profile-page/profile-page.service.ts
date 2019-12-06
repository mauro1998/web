import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from './profile.model';

@Injectable({ providedIn: 'root' })
export class ProfilePageService {
  constructor(private httpClient: HttpClient) {}

  public getProfileData(): Observable<Profile> {
    const url = 'assets/json/profile.json';
    return this.httpClient.get<Profile>(url).pipe(
      map(data => {
        return new Profile(
          data.firstName,
          data.lastName,
          data.title,
          data.picture,
          data.birthdate,
          data.address,
          data.description,
          data.workExperience,
          data.education,
          data.skills,
          data.contact,
          data.socialNetworks
        );
      })
    );
  }
}
