import {Question} from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'ภาษาโปรแกรมมิ่งใดที่ใช้สัญลักษณ์ {} เพื่อกำหนดขอบเขตของบล็อกโค้ด?',
    answers: ['Python', 'JavaScript', 'Ruby', 'HTML'],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: 'คำสั่งใดใช้สำหรับการพิมพ์ข้อความในภาษา Python?',
    answers: ['console.log()', 'System.out.println()', 'print()', 'echo'],
    correctAnswer: 2,
  },
  {
    id: 3,
    text: 'ย่อมาจากอะไร: HTML',
    answers: [
      'Hyper Text Markup Language',
      'High Tech Machine Learning',
      'Home Tool Markup Language',
      'Hyperlink and Text Markup Language',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    text: 'ฐานข้อมูลประเภทใดที่ใช้ตาราง?',
    answers: [
      'NoSQL',
      'Graph Database',
      'Relational Database',
      'Document Database',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: 'ข้อใดไม่ใช่ระบบควบคุมเวอร์ชัน?',
    answers: ['Git', 'SVN', 'Mercurial', 'Docker'],
    correctAnswer: 3,
  },
  {
    id: 6,
    text: 'คำสั่ง git ใดใช้สำหรับดาวน์โหลดโปรเจกต์จาก remote repository?',
    answers: ['git push', 'git pull', 'git clone', 'git commit'],
    correctAnswer: 2,
  },
  {
    id: 7,
    text: 'ข้อใดไม่ใช่ JavaScript framework?',
    answers: ['React', 'Angular', 'Vue', 'Django'],
    correctAnswer: 3,
  },
  {
    id: 8,
    text: 'API ย่อมาจากอะไร?',
    answers: [
      'Application Programming Interface',
      'Advanced Programming Integration',
      'Automated Program Instruction',
      'Application Process Integration',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    text: 'ข้อใดไม่ใช่ประเภทของ HTTP request method?',
    answers: ['GET', 'POST', 'UPDATE', 'DELETE'],
    correctAnswer: 2,
  },
  {
    id: 10,
    text: 'ข้อใดคือ port มาตรฐานสำหรับ HTTP?',
    answers: ['80', '443', '8080', '3306'],
    correctAnswer: 0,
  },
  {
    id: 11,
    text: 'ข้อใดไม่ใช่ประเภทของ cloud service?',
    answers: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
    correctAnswer: 3,
  },
  {
    id: 12,
    text: 'ข้อใดคือ DBMS ที่เป็น open-source?',
    answers: ['Oracle', 'MySQL', 'SQL Server', 'DB2'],
    correctAnswer: 1,
  },
  {
    id: 13,
    text: 'ข้อใดไม่ใช่หลักการของ OOP?',
    answers: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Fragmentation'],
    correctAnswer: 3,
  },
  {
    id: 14,
    text: 'ข้อใดคือ protocol ที่ใช้สำหรับการส่งอีเมล?',
    answers: ['HTTP', 'FTP', 'SMTP', 'SSH'],
    correctAnswer: 2,
  },
  {
    id: 15,
    text: 'ข้อใดไม่ใช่ประเภทของ software testing?',
    answers: [
      'Unit Testing',
      'Integration Testing',
      'Regression Testing',
      'Compilation Testing',
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    text: 'ข้อใดคือ design pattern ที่ใช้สำหรับสร้าง object โดยไม่ระบุ class ที่แน่นอน?',
    answers: ['Singleton', 'Factory', 'Observer', 'Decorator'],
    correctAnswer: 1,
  },
  {
    id: 17,
    text: 'ข้อใดไม่ใช่ประเภทของ software architecture?',
    answers: ['Microservices', 'Monolithic', 'Event-driven', 'Waterfall'],
    correctAnswer: 3,
  },
  {
    id: 18,
    text: 'ข้อใดคือ format ของการเก็บข้อมูลที่ใช้ในการแลกเปลี่ยนข้อมูลระหว่างระบบ?',
    answers: ['XML', 'HTML', 'CSS', 'SQL'],
    correctAnswer: 0,
  },
  {
    id: 19,
    text: 'ข้อใดไม่ใช่ประเภทของ network topology?',
    answers: ['Star', 'Bus', 'Ring', 'Cloud'],
    correctAnswer: 3,
  },
  {
    id: 20,
    text: 'ข้อใดคือ protocol ที่ใช้สำหรับการเชื่อมต่อแบบปลอดภัยผ่านเครือข่าย?',
    answers: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctAnswer: 2,
  },
];
