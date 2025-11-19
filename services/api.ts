import { Announcement, Teacher, AdmissionApplication, ContactMessage, User, UserRole, ExamResult, FeeRecord, Student } from '../types';
import { MOCK_ANNOUNCEMENTS, MOCK_TEACHERS, MOCK_APPLICATIONS, MOCK_USERS, MOCK_RESULTS, MOCK_FEES, MOCK_STUDENTS } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  private announcements = [...MOCK_ANNOUNCEMENTS];
  private applications = [...MOCK_APPLICATIONS];
  private messages: ContactMessage[] = [];
  private currentUser: User | null = null;

  // AUTH
  async login(username: string, role: UserRole): Promise<User | null> {
    await delay(500);
    const user = MOCK_USERS.find(u => u.username === username && u.role === role);
    if (user) {
      this.currentUser = { ...user, token: 'fake-jwt-token' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return this.currentUser;
    }
    return null;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const stored = localStorage.getItem('user');
      if (stored) this.currentUser = JSON.parse(stored);
    }
    return this.currentUser;
  }

  // ANNOUNCEMENTS
  async getAnnouncements(): Promise<Announcement[]> {
    await delay(300);
    return this.announcements;
  }

  async createAnnouncement(announcement: Omit<Announcement, 'id'>): Promise<void> {
    await delay(500);
    this.announcements.unshift({ ...announcement, id: Math.random().toString() });
  }

  async deleteAnnouncement(id: string): Promise<void> {
    await delay(300);
    this.announcements = this.announcements.filter(a => a.id !== id);
  }

  // TEACHERS
  async getTeachers(): Promise<Teacher[]> {
    await delay(300);
    return MOCK_TEACHERS;
  }

  // ADMISSIONS
  async submitApplication(app: Omit<AdmissionApplication, 'id' | 'status' | 'submissionDate'>): Promise<void> {
    await delay(800);
    this.applications.push({
      ...app,
      id: Math.random().toString(),
      status: 'PENDING',
      submissionDate: new Date().toISOString().split('T')[0]
    });
  }

  async getApplications(): Promise<AdmissionApplication[]> {
    await delay(300);
    return this.applications;
  }

  // CONTACT
  async sendMessage(msg: Omit<ContactMessage, 'id' | 'date'>): Promise<void> {
    await delay(500);
    this.messages.push({
      ...msg,
      id: Math.random().toString(),
      date: new Date().toISOString()
    });
    console.log("Message saved to DB:", msg);
  }

  async getMessages(): Promise<ContactMessage[]> {
    return this.messages;
  }

  // EXAMS
  async getExamResults(studentId: string): Promise<{ student: Student | undefined, results: ExamResult[] }> {
    await delay(600);
    const results = MOCK_RESULTS.filter(r => r.studentId === studentId);
    const student = MOCK_STUDENTS.find(s => s.studentId === studentId);
    return { student, results };
  }

  // FEES
  async getFees(studentId: string): Promise<FeeRecord[]> {
    await delay(400);
    // For demo purposes, mapping logged in parent to student s1
    return MOCK_FEES.filter(f => f.studentId === 'APS001'); 
  }

  // STATS (Admin)
  async getStats() {
    await delay(300);
    return {
      students: MOCK_STUDENTS.length + 150, // Mock total
      teachers: MOCK_TEACHERS.length + 20,
      applications: this.applications.length,
      messages: this.messages.length
    };
  }
}

export const api = new ApiService();