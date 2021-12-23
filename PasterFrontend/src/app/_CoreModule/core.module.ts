import { NgModule } from "@angular/core";
import { LoginModule } from "../login/login.module";
import { RegisterModule } from "../register/register.module";
import { BoardModule } from "../board/board.module";
import { HomeModule } from "../home/home.module";
import { LoggerService } from "./services/logger.service";
import { JwtService } from "./services/jwt.service";
import { LocalStorageService } from "./services/local-storage.service";
import { DtoMapperService } from "./services/dto-mapper.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./services/jwt-interceptor.service";
import { RequestService } from "./services/request.service";

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
    DtoMapperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    RequestService
  ]
})

export class CoreModule {}
