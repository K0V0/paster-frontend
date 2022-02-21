import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BoardModule } from "../board/board.module";
import { HomeModule } from "../home/home.module";
import { LoginModule } from "../_SharedModule/modules/login/login.module";
import { RegisterModule } from "../_SharedModule/modules/register/register.module";
import { LogregModule } from './../logreg/logreg.module';
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { JwtService } from "./services/jwt.service";
import { LocalStorageService } from "./services/local-storage.service";
import { LoggerService } from "./services/logger.service";
import { RequestService } from "./services/request.service";
import { WebsocketService } from "./services/websocket.service";
import { DtoMapperUtil } from "./utils/dto-mapper.util";

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    // angular stuff
    HttpClientModule,
    // my modules
    HomeModule,
    LogregModule,
    LoginModule,
    RegisterModule,
    BoardModule,
  ],
  providers: [
    LoggerService,
    JwtService,
    LocalStorageService,
    DtoMapperUtil,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    RequestService,
    WebsocketService
  ]
})

export class CoreModule {}
