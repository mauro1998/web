import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, concat } from 'rxjs';
import { catchError, concatMap, map, startWith } from 'rxjs/operators';
import { ProfilePageService } from './profile-page.service';
import { Profile } from './profile.model';

interface State {
  loading: boolean;
  data: Profile;
  error: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: 'profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  public state$: Observable<State>;
  public fetcher$ = new Subject<State>();

  constructor(private profilePageService: ProfilePageService) {}

  ngOnInit() {
    const load$ = of({
      loading: true,
      data: null,
      error: null,
    });

    this.state$ = concat(load$, this.fetcher$);
    this.fetchProfile();
  }

  public getProfile() {
    return this.profilePageService.getProfileData().pipe(
      map(profile => {
        return {
          loading: false,
          data: profile,
          error: null,
        };
      }),
      catchError(err => {
        console.error(err);
        return of({
          loading: false,
          data: null,
          error:
            'An error occured while trying to load your profile information.',
        });
      })
    );
  }

  private fetchProfile(): void {
    const subscription = this.profilePageService
      .getProfileData()
      .pipe(
        map(profile => {
          return {
            loading: false,
            data: profile,
            error: null,
          };
        }),
        catchError(() =>
          of({
            loading: false,
            data: null,
            error:
              'An error occured while trying to load your profile information.',
          })
        )
      )
      .subscribe(state => {
        this.fetcher$.next(state);
        subscription.unsubscribe();
      });
  }
}
