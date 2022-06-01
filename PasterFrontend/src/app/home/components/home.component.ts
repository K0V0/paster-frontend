import { WidgetsService } from './../../_SharedModule/modules/navigation/widgets.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title = 'Homepage';

  constructor(private widgetsService: WidgetsService) {

  }

  ngOnInit(): void {
    this.widgetsService.clearAll();
  }
}
