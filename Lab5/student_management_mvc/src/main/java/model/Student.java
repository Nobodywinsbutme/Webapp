package model;

import java.sql.Timestamp;

public class Student {
    
    // TODO: Declare private attributes
    private int id;
    private String studentCode;
    private String fullName;
    private String email;
    private String major;
    private Timestamp createdAt;
    
    // TODO: Create no-arg constructor
    public Student() {
    }

    // TODO: Create parameterized constructor (without id and createdAt)
    // We'll make one without id, as createdAt is usually set by the DB.
    public Student(String studentCode, String fullName, String email, String major) {
        this.studentCode = studentCode;
        this.fullName = fullName;
        this.email = email;
        this.major = major;
    }

    // Full constructor (in case you need it later)
    public Student(int id, String studentCode, String fullName, String email, String major, Timestamp createdAt) {
        this.id = id;
        this.studentCode = studentCode;
        this.fullName = fullName;
        this.email = email;
        this.major = major;
        this.createdAt = createdAt;
    }

    // TODO: Generate getters and setters
    // VS Code Tip: You can also right-click -> Source Action... -> Generate Getters and Setters
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentCode() {
        return studentCode;
    }

    public void setStudentCode(String studentCode) {
        this.studentCode = studentCode;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    // TODO: Override toString()
    // VS Code Tip: Right-click -> Source Action... -> Generate toString()...
    @Override
    public String toString() {
        return "Student{" + 
                "id=" + id + 
                ", studentCode='" + studentCode + '\'' + 
                ", fullName='" + fullName + '\'' + 
                ", email='" + email + '\'' + 
                ", major='" + major + '\'' + 
                ", createdAt=" + createdAt + 
                '}';
    }
}