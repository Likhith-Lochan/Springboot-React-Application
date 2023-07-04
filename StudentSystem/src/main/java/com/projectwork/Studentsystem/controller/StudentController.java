package com.projectwork.Studentsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.projectwork.Studentsystem.model.Student;
import com.projectwork.Studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

	 @Autowired
	 private StudentService studentService;
	 
	 @PostMapping("/add")
	 public String add(@RequestBody Student student) {
		 studentService.saveStudent(student);
		 return "new Student is added";
	 }
	 @GetMapping("/getAll")
	 public List<Student> getall(){
		return studentService.getAllStudents();
	 }

}
		