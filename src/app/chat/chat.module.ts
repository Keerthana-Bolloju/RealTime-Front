import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { JoinRoomComponent } from './join-room/join-room.component';
import { ChatRouteGaurdService } from './chat-route-gaurd.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'chat',component:ChatRoomComponent,canActivate:[ChatRouteGaurdService]},
      {path:'chat/:chatRoomId',component:ChatRoomComponent,canActivate:[ChatRouteGaurdService]},
      {path:'group',component:ChatRoomComponent,canActivate:[ChatRouteGaurdService]},
      {path:'joinroom/:chatRoomId',component:JoinRoomComponent,canActivate:[ChatRouteGaurdService]}
    ]),
    SharedModule
  ],
  declarations: [ChatRoomComponent, JoinRoomComponent]
})
export class ChatModule { }
