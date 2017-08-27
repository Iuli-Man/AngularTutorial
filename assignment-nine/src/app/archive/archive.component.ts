import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: number;
  month: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

}
