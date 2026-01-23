// Mock data for Ogwashi-Uku USA Association

export interface Chapter {
  id: string;
  name: string;
  city: string;
  state: string;
  meetingSchedule: string;
  description: string;
  memberCount: number;
  officers: ChapterOfficer[];
  contactEmail: string;
}

export interface ChapterOfficer {
  name: string;
  title: string;
  email?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'national' | 'chapter';
  chapterId?: string;
  memberPrice?: number;
  nonMemberPrice: number;
  imageUrl?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  scope: 'national' | 'chapter';
  chapterId?: string;
}

export interface ImpactProject {
  id: string;
  title: string;
  description: string;
  goal: string;
  outcomes: string[];
  status: 'active' | 'completed' | 'upcoming';
  category: string;
  imageUrl?: string;
}

export interface Leader {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

export const chapters: Chapter[] = [
  {
    id: 'houston',
    name: 'Houston Chapter',
    city: 'Houston',
    state: 'Texas',
    meetingSchedule: 'First Saturday of every month at 4:00 PM',
    description: 'The Houston Chapter is one of our most active chapters, serving the greater Houston metropolitan area with over 50 active members.',
    memberCount: 52,
    officers: [
      { name: 'Dr. Emmanuel Obi', title: 'Chapter President', email: 'houston.president@ogwashiukuusa.org' },
      { name: 'Mrs. Adaeze Nwosu', title: 'Chapter Secretary', email: 'houston.secretary@ogwashiukuusa.org' },
      { name: 'Mr. Chukwudi Eze', title: 'Chapter Treasurer' },
    ],
    contactEmail: 'houston@ogwashiukuusa.org',
  },
  {
    id: 'atlanta',
    name: 'Atlanta Chapter',
    city: 'Atlanta',
    state: 'Georgia',
    meetingSchedule: 'Second Sunday of every month at 3:00 PM',
    description: 'The Atlanta Chapter brings together Ogwashi-Uku indigenes across Georgia, focusing on cultural preservation and community support.',
    memberCount: 38,
    officers: [
      { name: 'Chief Obiora Anene', title: 'Chapter President', email: 'atlanta.president@ogwashiukuusa.org' },
      { name: 'Mrs. Ngozi Okoli', title: 'Chapter Secretary', email: 'atlanta.secretary@ogwashiukuusa.org' },
      { name: 'Mr. Ikenna Udeh', title: 'Chapter Treasurer' },
    ],
    contactEmail: 'atlanta@ogwashiukuusa.org',
  },
  {
    id: 'dmv',
    name: 'DMV Chapter',
    city: 'Washington',
    state: 'DC',
    meetingSchedule: 'Third Saturday of every month at 2:00 PM',
    description: 'Serving the DC, Maryland, and Virginia area, the DMV Chapter is strategically located to engage with national policy initiatives.',
    memberCount: 45,
    officers: [
      { name: 'Dr. Nnamdi Okafor', title: 'Chapter President' },
      { name: 'Mrs. Chioma Ibe', title: 'Chapter Secretary' },
      { name: 'Mr. Emeka Ugwu', title: 'Chapter Treasurer' },
    ],
    contactEmail: 'dmv@ogwashiukuusa.org',
  },
  {
    id: 'newyork',
    name: 'New York/New Jersey Chapter',
    city: 'Newark',
    state: 'New Jersey',
    meetingSchedule: 'Last Saturday of every month at 3:00 PM',
    description: 'The NY/NJ Chapter serves members across the tri-state area, organizing cultural events and supporting homeland development.',
    memberCount: 62,
    officers: [
      { name: 'Chief Uche Ogbonna', title: 'Chapter President' },
      { name: 'Mrs. Ifeoma Chukwu', title: 'Chapter Secretary' },
      { name: 'Mr. Obinna Nweke', title: 'Chapter Treasurer' },
    ],
    contactEmail: 'nyc@ogwashiukuusa.org',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: '2024 National Convention',
    description: 'Join us for our annual national convention featuring cultural celebrations, community updates, and networking opportunities. This year\'s theme: "Unity in Progress."',
    date: '2024-08-15',
    time: '9:00 AM - 9:00 PM',
    location: 'Houston Marriott Marquis, Houston, TX',
    type: 'national',
    memberPrice: 75,
    nonMemberPrice: 125,
  },
  {
    id: '2',
    title: 'Annual Fundraising Gala',
    description: 'An elegant evening of dinner, entertainment, and philanthropy supporting our scholarship and community development programs.',
    date: '2024-06-22',
    time: '6:00 PM - 11:00 PM',
    location: 'The Ritz-Carlton, Atlanta, GA',
    type: 'national',
    memberPrice: 150,
    nonMemberPrice: 200,
  },
  {
    id: '3',
    title: 'Houston Chapter Cultural Night',
    description: 'Experience the rich cultural heritage of Ogwashi-Uku through traditional music, dance, food, and storytelling.',
    date: '2024-05-18',
    time: '5:00 PM - 10:00 PM',
    location: 'Nigerian Community Center, Houston, TX',
    type: 'chapter',
    chapterId: 'houston',
    memberPrice: 25,
    nonMemberPrice: 40,
  },
  {
    id: '4',
    title: 'Youth Leadership Summit',
    description: 'A day-long program for young people aged 15-25 featuring workshops on leadership, cultural identity, and career development.',
    date: '2024-07-20',
    time: '10:00 AM - 5:00 PM',
    location: 'Virtual Event',
    type: 'national',
    memberPrice: 0,
    nonMemberPrice: 15,
  },
  {
    id: '5',
    title: 'Atlanta Chapter Town Hall',
    description: 'Monthly community meeting to discuss chapter initiatives, upcoming events, and member concerns.',
    date: '2024-05-12',
    time: '3:00 PM - 5:00 PM',
    location: 'Atlanta Community Center, Atlanta, GA',
    type: 'chapter',
    chapterId: 'atlanta',
    memberPrice: 0,
    nonMemberPrice: 0,
  },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Membership Renewal Deadline Extended',
    content: 'The deadline for 2024 membership renewal has been extended to March 31st. Renew now to maintain your voting rights and member benefits.',
    date: '2024-03-01',
    scope: 'national',
  },
  {
    id: '2',
    title: 'Scholarship Applications Now Open',
    content: 'Applications for the 2024-2025 Ogwashi-Uku USA Scholarship Program are now being accepted. Eligible students can apply through the member portal.',
    date: '2024-02-15',
    scope: 'national',
  },
  {
    id: '3',
    title: 'New Houston Chapter Meeting Location',
    content: 'Starting in April, the Houston Chapter will meet at the new Nigerian Community Center on Westheimer Road.',
    date: '2024-03-10',
    scope: 'chapter',
    chapterId: 'houston',
  },
];

export const impactProjects: ImpactProject[] = [
  {
    id: '1',
    title: 'Ogwashi-Uku Water Initiative',
    description: 'Providing clean, accessible water to communities in Ogwashi-Uku through the construction of boreholes and water treatment facilities.',
    goal: 'Build 10 community boreholes serving 5,000+ residents',
    outcomes: ['3 boreholes completed', '1,500+ residents with clean water access', '2 more boreholes under construction'],
    status: 'active',
    category: 'Infrastructure',
  },
  {
    id: '2',
    title: 'Annual Scholarship Program',
    description: 'Supporting the educational aspirations of children of members and Ogwashi-Uku indigenes pursuing higher education.',
    goal: 'Award $50,000 in scholarships annually',
    outcomes: ['15 scholarships awarded in 2023', '$45,000 distributed', '100% of recipients graduated'],
    status: 'active',
    category: 'Education',
  },
  {
    id: '3',
    title: 'Medical Mission 2023',
    description: 'Annual medical outreach providing free healthcare services to underserved communities in Ogwashi-Uku and surrounding areas.',
    goal: 'Provide free medical care to 2,000 patients',
    outcomes: ['2,500 patients treated', '500 eye exams conducted', '200 surgeries performed', '10,000 medication doses distributed'],
    status: 'completed',
    category: 'Healthcare',
  },
  {
    id: '4',
    title: 'Youth Empowerment Center',
    description: 'Construction of a modern youth center in Ogwashi-Uku featuring computer labs, library, and vocational training facilities.',
    goal: 'Build a 5,000 sq ft youth empowerment center',
    outcomes: ['Land acquired', 'Architectural plans completed', 'Fundraising at 60%'],
    status: 'active',
    category: 'Community Development',
  },
  {
    id: '5',
    title: 'Cultural Heritage Archive',
    description: 'Documenting and preserving Ogwashi-Uku history, traditions, and cultural practices through digital archiving and publications.',
    goal: 'Create comprehensive digital archive of cultural heritage',
    outcomes: ['200+ oral histories recorded', '500+ historical photos digitized', 'Cultural handbook published'],
    status: 'active',
    category: 'Culture',
  },
  {
    id: '6',
    title: 'Emergency Relief Fund',
    description: 'Rapid response fund to support community members and Ogwashi-Uku residents during emergencies and natural disasters.',
    goal: 'Maintain $25,000 emergency reserve',
    outcomes: ['12 families assisted in 2023', '$18,000 in emergency aid distributed'],
    status: 'active',
    category: 'Emergency Support',
  },
];

export const nationalLeaders: Leader[] = [
  {
    name: 'Chief Dr. Godwin Okonkwo',
    title: 'National President',
    bio: 'Chief Okonkwo has served our community for over 20 years and brings extensive experience in nonprofit leadership and community development.',
  },
  {
    name: 'Mrs. Adanna Eze',
    title: 'National Vice President',
    bio: 'A dedicated advocate for cultural preservation and youth empowerment, Mrs. Eze oversees our educational initiatives.',
  },
  {
    name: 'Mr. Chinedu Obi',
    title: 'National Secretary',
    bio: 'Mr. Obi manages organizational communications and ensures smooth coordination between chapters and national leadership.',
  },
  {
    name: 'Dr. Ngozi Nwachukwu',
    title: 'National Treasurer',
    bio: 'With a background in finance and accounting, Dr. Nwachukwu oversees all financial operations and reporting.',
  },
  {
    name: 'Chief Mrs. Ifeoma Udeze',
    title: 'National Women Leader',
    bio: 'Chief Mrs. Udeze leads initiatives focused on women empowerment and family welfare within our community.',
  },
  {
    name: 'Mr. Obinna Anyanwu',
    title: 'National Youth Leader',
    bio: 'Mr. Anyanwu coordinates youth programs and serves as the voice of young members in national leadership.',
  },
];

export const donationFunds = [
  {
    id: 'general',
    name: 'General Fund',
    description: 'Support our overall mission and operational needs',
  },
  {
    id: 'scholarship',
    name: 'Scholarship Fund',
    description: 'Help deserving students achieve their educational goals',
  },
  {
    id: 'community',
    name: 'Community Projects',
    description: 'Fund infrastructure and development in Ogwashi-Uku',
  },
  {
    id: 'emergency',
    name: 'Emergency Support',
    description: 'Provide rapid assistance during crises and disasters',
  },
];

export const membershipTypes = [
  {
    id: 'individual',
    name: 'Individual Annual',
    price: 100,
    description: 'Full membership benefits for one adult',
    features: ['Voting rights', 'Member-only events', 'Newsletter access', 'Chapter participation'],
  },
  {
    id: 'family',
    name: 'Family Annual',
    price: 150,
    description: 'Membership for you and your immediate family',
    features: ['All individual benefits', 'Spouse included', 'Children under 18 included', 'Family event discounts'],
  },
  {
    id: 'student',
    name: 'Student Annual',
    price: 25,
    description: 'Discounted rate for full-time students',
    features: ['Access to youth programs', 'Scholarship eligibility', 'Mentorship opportunities', 'Event discounts'],
  },
];
