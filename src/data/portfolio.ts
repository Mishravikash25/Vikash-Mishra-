export type ExperienceItem = {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  impact?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  result: string;
};

export type ProjectItem = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  link?: string;
};

export type StatItem = {
  label: string;
  value: string;
  description?: string;
};

export const personalInfo = {
  name: 'Vikash Mishra',
  role: 'Computer Science Engineering Student',
  subtitle: 'Frontend Developer • Aspiring Software Engineer',
  email: 'Vikashmiashra7376@gmail.com',
  phone: '+91 9305756519',
  description:
    'Motivated Computer Science and Engineering student seeking an entry-level position to apply programming and problem-solving skills in building creative, innovative, and efficient technology solutions.',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'BsLinkedin' },
    { label: 'GitHub', href: 'https://github.com/', icon: 'BsGithub' },
    { label: 'Email', href: 'mailto:Vikashmiashra7376@gmail.com', icon: 'HiOutlineMail' },
  ],
};

export const skills = [
  { title: 'Languages', items: ['Java', 'Python', 'C'] },
  { title: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Database', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
];

export const projects: ProjectItem[] = [
  {
    title: 'Abhilekhya',
    date: 'Sept 2025',
    description:
      'Centralized study material platform enabling students to share resources and monetize educational content.',
    tech: ['React', 'MongoDB'],
  },
  {
    title: 'Food Delivery Application Frontend',
    date: 'Dec 2025',
    description:
      'Designed and developed the frontend for a food delivery application using React with responsive UI.',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Voice Similarity System',
    date: 'Feb 2026',
    description:
      'Developed a platform to prevent voice impersonation and fraud using machine learning.',
    tech: ['Python', 'Librosa', 'MFCC', 'Gaussian Mixture Models'],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'IBM Virtual Internship',
    subtitle: 'Web, Mobile Development & Marketing',
    date: '2025',
    impact: 'Delivered polished UI modules and marketing-focused web experiences.',
    details: [
      'Completed a structured internship focusing on web development and marketing best practices.',
    ],
  },
  {
    title: 'Core Java with Collections',
    subtitle: 'United Institute of Technology',
    date: '2024',
    impact: 'Deepened programming fundamentals and collection framework expertise.',
    details: [
      'Built strong Java fundamentals and data structure knowledge through intensive coursework.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'United Institute of Technology (AKTU)',
    year: '2026',
    result: 'CGPA: 6.0/10.0',
  },
  {
    degree: 'Intermediate',
    institution: 'DAV Public School (CBSE)',
    year: '2022',
    result: '63%',
  },
  {
    degree: 'High School',
    institution: 'DAV Public School (CBSE)',
    year: '2020',
    result: '83%',
  },
];

export const achievements: StatItem[] = [
  {
    label: 'DSA Problems Solved',
    value: '200+',
    description:
      'Solved algorithmic problems across multiple platforms to strengthen coding fluency.',
  },
  {
    label: 'Hackathons',
    value: '10+',
    description:
      'Participated in fast-moving collaboration events focused on practical software delivery.',
  },
  {
    label: 'Workshops',
    value: '5+',
    description:
      'Led and attended skill-building sessions covering frontend, Java, and product design.',
  },
];

export const leadership = [
  {
    title: 'Event Head – ENIGMA 3.0',
    year: '2025',
    details: ['Managed Treasure Hunt event logistics and team coordination.'],
  },
  {
    title: 'Event Volunteer – ENIGMA 2.0',
    year: '2024',
    details: ['Assisted in Roadies event management and crowd handling.'],
  },
];
