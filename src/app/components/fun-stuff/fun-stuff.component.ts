import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, Observable, of } from 'rxjs';
import { Project, ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { CarouselModule, CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-fun-stuff',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './fun-stuff.component.html',
  providers:[
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true }}
  ],
  styleUrl: './fun-stuff.component.scss'
})
export class FunStuffComponent {
  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  noWrapSlides = false;
  showIndicator = true;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Project> => {
        const projectId = params.get('projectId') ?? '';
        const project = this.projectService.getProjectDetails(projectId);
        return of(project);
      })
    ).subscribe((project: Project) => {
      this.project = project;
    });
  }
}
