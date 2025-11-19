import { Announcement, Teacher, Student, ExamResult, AdmissionApplication, FeeRecord, User, UserRole } from '../types';

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'Registration for 2017 E.C. Open',
    content: 'We are now accepting applications for the upcoming academic year. Please visit the admissions page.',
    date: '2024-08-15',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    content: 'Annual meeting will be held on September 10th at the main hall.',
    date: '2024-08-20',
    author: 'Principal'
  },
  {
    id: '3',
    title: 'Sports Day Results',
    content: 'Congratulations to the Blue House for winning the annual football tournament!',
    date: '2024-06-30',
    author: 'Sports Dept'
  }
];

export const MOCK_TEACHERS: Teacher[] = [
  { id: 't1', name: 'Abebe Kebede', subject: 'Mathematics', email: 'abebe@abbapascal.edu.et', photoUrl: 'https://picsum.photos/200/200?random=1' },
  { id: 't2', name: 'Sara Tekle', subject: 'Physics', email: 'sara@abbapascal.edu.et', photoUrl: 'https://picsum.photos/200/200?random=2' },
  { id: 't3', name: 'Dawit Hailu', subject: 'Amharic', email: 'dawit@abbapascal.edu.et', photoUrl: 'https://picsum.photos/200/200?random=3' },
  { id: 't4', name: 'Sister Mary', subject: 'Moral Education', email: 'sr.mary@abbapascal.edu.et', photoUrl: 'https://picsum.photos/200/200?random=4' },
];

export const MOCK_STUDENTS: Student[] = [
  { id: 's1', studentId: 'APS001', name: 'Yonas Alemu', grade: '10', parentId: 'p1' },
  { id: 's2', studentId: 'APS002', name: 'Bethlehem Tadesse', grade: '11', parentId: 'p2' },
];

export const MOCK_RESULTS: ExamResult[] = [
  { id: 'r1', studentId: 'APS001', subject: 'Mathematics', score: 85, grade: 'A', term: 'Term 1' },
  { id: 'r2', studentId: 'APS001', subject: 'Physics', score: 78, grade: 'B', term: 'Term 1' },
  { id: 'r3', studentId: 'APS001', subject: 'English', score: 90, grade: 'A', term: 'Term 1' },
  { id: 'r4', studentId: 'APS002', subject: 'Mathematics', score: 65, grade: 'C', term: 'Term 1' },
];

export const MOCK_APPLICATIONS: AdmissionApplication[] = [
  { id: 'a1', studentName: 'New Kid', gradeApplied: '9', parentName: 'Mr. Kid', phone: '0911223344', status: 'PENDING', submissionDate: '2024-09-01' }
];

export const MOCK_FEES: FeeRecord[] = [
  { id: 'f1', studentId: 'APS001', amount: 2000, reason: 'Term 1 Tuition', status: 'PAID', dueDate: '2024-09-30', paymentMethod: 'Telebirr' },
  { id: 'f2', studentId: 'APS001', amount: 2000, reason: 'Term 2 Tuition', status: 'UNPAID', dueDate: '2025-01-30' },
];

export const MOCK_USERS: User[] = [
  { id: 'u1', username: 'admin', fullName: 'School Administrator', role: UserRole.ADMIN },
  { id: 'u2', username: 'student', fullName: 'Yonas Alemu', role: UserRole.STUDENT }, // Linked to s1 via login logic
  { id: 'u3', username: 'parent', fullName: 'Mr. Alemu', role: UserRole.PARENT }, // Linked to p1
  { id: 'u4', username: 'teacher', fullName: 'Abebe Kebede', role: UserRole.TEACHER },
];