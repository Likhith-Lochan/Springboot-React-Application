package com.projectwork.Studentsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectwork.Studentsystem.model.Student;
import com.projectwork.Studentsystem.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
  
	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public String saveStudent(Student student) {
		 studentRepository.save(student);
		 return  "";
	}
	@Override
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
	
  
}
