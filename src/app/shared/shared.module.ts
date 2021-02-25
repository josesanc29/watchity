import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsService } from './components/settings/services/settings.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../components/general.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule
  ],
  providers: [
    SettingsService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ]
})
export class SharedModule { }
