import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { PassDialogComponent } from './pass-dialog/pass-dialog.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userFeature, userFeatureKey } from './store/user.reducer';
import { UserEffects } from './store/user.effects';



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserDialogComponent,
    PassDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(userFeatureKey, userFeature.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [
    UsersTableComponent,
    UserDialogComponent,
  ]
})
export class UsersModule { }
