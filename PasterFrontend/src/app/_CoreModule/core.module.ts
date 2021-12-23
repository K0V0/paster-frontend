import { NgModule } from "@angular/core";
import { LoginModule } from "../login/login.module";
import { RegisterModule } from "../register/register.module";
import { BoardModule } from "../board/board.module";
import { HomeModule } from "../home/home.module";
import { LoggerService } from "./services/logger.service";
import { JwtService } from "./services/jwt.service";
import { LocalStorageService } from "./services/local-storage.service";
import { DtoMapperUtil } from "./utils/dto-mapper.util";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { RequestService } from "./services/request.service";
import {Router} from "@angular/router";

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    // angular stuff
    //CommonModule,
    HttpClientModule,
    // my modules
    HomeModule,
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
    //Router
  ]
})

export class CoreModule {}
