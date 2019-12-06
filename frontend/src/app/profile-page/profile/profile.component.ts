import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Profile } from '../profile.model';

interface SocialNetwork {
  name: string;
  link: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  @Input() public profile: Profile;
  public showAllSkills: boolean = false;
  public socialNetworks: SocialNetwork[] = [];
  public year: number;

  public ngOnInit(): void {
    const networks = [
      'linkedin',
      'pinterest',
      'stackoverflow',
      'github',
      'twitter',
      'facebook',
      'instagram',
    ];

    this.socialNetworks = networks
      .filter(name => this.hasProperty(this.profile.socialNetworks, name))
      .map(name => {
        return {
          name,
          link: this.profile.socialNetworks[name],
        };
      });

    this.year = new Date().getFullYear();
  }

  private hasProperty(object: Object, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(object, prop);
  }

  public get skillset(): string[] {
    return this.showAllSkills
      ? this.profile.skills
      : this.profile.skills.slice(0, 5);
  }

  public toggleSkills(): void {
    this.showAllSkills = !this.showAllSkills;
  }
}
