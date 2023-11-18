import { Directive, OnInit, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { ThemeService } from './theme.service';

@Directive({
  selector: '[appIsDarkTheme]',
  standalone: true,
})
export class IsDarkThemeDirective implements OnInit {
  matIcon = inject(MatIconButton);
  theme = inject(ThemeService).theme;
  ngOnInit(): void {
    this.matIcon.color = this.theme === 'dark' ? 'primary' : undefined;
  }
}
