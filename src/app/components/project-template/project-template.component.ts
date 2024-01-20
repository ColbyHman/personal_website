import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project, ProjectService } from '../../services/project.service';
import { Observable, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent {
  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

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
