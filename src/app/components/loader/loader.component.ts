import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean>;

  constructor(private loader: LoaderService) {
    this.isLoading$ = this.loader.isLoading$;
  }

  ngOnInit(): void {
  }

}
