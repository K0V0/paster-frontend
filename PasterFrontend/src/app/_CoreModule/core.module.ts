import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BoardModule } from "../board/board.module";
import { HomeModule } from "../home/home.module";
import { LogregModule } from './../logreg/logreg.module';
import { JwtInterceptor } from "./interceptors/jwt.interceptor";

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
    BoardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})

export class CoreModule {}
