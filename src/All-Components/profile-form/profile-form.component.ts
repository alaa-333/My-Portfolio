// profile-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileDataService } from '../services/profile-data.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm!: FormGroup;

  constructor(
    private profileDataService: ProfileDataService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.profileForm = this.fb.group({
      basicInfo: this.fb.group({
        name: ['', Validators.required],
        jobTitle: ['', Validators.required],
        about: ['', Validators.required]
      }),
      educations: this.fb.array([this.createEducationGroup()]),
      experiences: this.fb.array([this.createExperienceGroup()]),
      skills: this.fb.array([this.createSkillGroup()]),
      projects: this.fb.array([this.createProjectGroup()])
    });
  }

  // Education Methods
  createEducationGroup(): FormGroup {
    return this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  get educations(): FormArray {
    return this.profileForm.get('educations') as FormArray;
  }

  addEducation(): void {
    this.educations.push(this.createEducationGroup());
  }

  removeEducation(index: number): void {
    if (this.educations.length > 1) {
      this.educations.removeAt(index);
    }
  }

  // Experience Methods
  createExperienceGroup(): FormGroup {
    return this.fb.group({
      jobTitleExp: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get experiences(): FormArray {
    return this.profileForm.get('experiences') as FormArray;
  }

  addExperience(): void {
    this.experiences.push(this.createExperienceGroup());
  }

  removeExperience(index: number): void {
    if (this.experiences.length > 1) {
      this.experiences.removeAt(index);
    }
  }

  // Skill Methods
  createSkillGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      skillLevel: ['Advanced', Validators.required]
    });
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.createSkillGroup());
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  // Project Methods
  createProjectGroup(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      technologies: ['', Validators.required],
      liveDemo: [''],
      sourceCode: ['']
    });
  }

  get projects(): FormArray {
    return this.profileForm.get('projects') as FormArray;
  }

  addProject(): void {
    this.projects.push(this.createProjectGroup());
  }

  removeProject(index: number): void {
    if (this.projects.length > 1) {
      this.projects.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      this.profileDataService.updateProfileData(formData);
      this.state = true;
      if (this.state) {
      this.route.navigate(['/home']);
    }

    } else {
      this.profileForm.markAllAsTouched();
      console.warn('Form is invalid. Please fill all required fields.');
    }
  }

  // Helper methods for template access
  get basicInfo(): FormGroup {
    return this.profileForm.get('basicInfo') as FormGroup;
  }

  getEducationControl(index: number, controlName: string) {
    return this.educations.at(index).get(controlName);
  }

  getExperienceControl(index: number, controlName: string) {
    return this.experiences.at(index).get(controlName);
  }

  getSkillControl(index: number, controlName: string) {
    return this.skills.at(index).get(controlName);
  }

  getProjectControl(index: number, controlName: string) {
    return this.projects.at(index).get(controlName);
  }

  state: boolean = false;




}
