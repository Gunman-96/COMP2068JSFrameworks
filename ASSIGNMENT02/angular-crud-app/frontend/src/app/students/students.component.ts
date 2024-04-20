import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  newStudent: any = {}; // Used for adding a new student

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  // Function to add a new student
  createStudent() {
    this.studentService.createStudent(this.newStudent).subscribe(() => {
      this.loadStudents(); // Refresh the list after adding a new student
      this.newStudent = {}; // Reset the form
    });
  }

  // Function to delete a student
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents(); // Refresh the list after deleting a student
    });
  }

  // Function to handle updating a student (if needed)
  editStudent(student: any) {
    // Implement this function if you need to update a student
  }
}
  