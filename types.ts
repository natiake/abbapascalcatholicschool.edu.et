export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
  token?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  photoUrl?: string;
}

export interface Student {
  id: string;
  studentId: string; // School ID
  name: string;
  grade: string;
  parentId: string;
}

export interface ExamResult {
  id: string;
  studentId: string;
  subject: string;
  score: number;
  grade: string;
  term: string;
}

export interface AdmissionApplication {
  id: string;
  studentName: string;
  gradeApplied: string;
  parentName: string;
  phone: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submissionDate: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  amount: number;
  reason: string; // e.g. "Term 1 Tuition"
  status: 'PAID' | 'UNPAID';
  dueDate: string;
  paymentMethod?: 'Telebirr' | 'CBE Birr' | 'Amole';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}