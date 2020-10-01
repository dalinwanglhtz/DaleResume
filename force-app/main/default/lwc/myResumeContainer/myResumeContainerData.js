import SOCIAL from "@salesforce/resourceUrl/SOCIAL";
import dwang_photo from '@salesforce/resourceUrl/dwang_small';

export const PROFILE_IMAGE = dwang_photo;

export const SOCIAL_LINKS = [
    {
        type: 'linkedin',
        label: 'linkedin/dalinwanglhtz',
        link: 'https://www.linkedin.com/in/dalewanglhtz/',
        icon: SOCIAL+'/SOCIAL/linkedin.svg'
    },
    {
        type: 'trailhead',
        label: 'trailhead/dalewang',
        link: 'https://trailblazer.me/id/dalinwanglhtz',
        icon: SOCIAL+'/SOCIAL/trailhead.svg'
    },
    {
        type: 'github',
        label: 'github/dalewang',
        link: 'https://github.com/dalinwanglhtz',
        icon: SOCIAL+'/SOCIAL/github.svg'
    }
]

export const USER_DETAILS = {
    NAME: 'Dale Wang',
    ROLE: 'Salesforce Developer',
    EMAIL: 'dalinwanglhtz@gmail.com',
    PHONE: '04xx xxx xxx'
}

export const CAREER_SUMMARY = {
    HEADING: 'CAREER SUMMARY',
    DESCRIPTION: `Dale has 10+ years experience working in the 
    Financial Services and Telecommunications industry assuming 
    various technical delivery roles in medium ($500k+) to large 
    ($3M+) scale IT projects. He possesses a strong background in 
    software and web development and is well versed in Agile having 
    spent the last four years as a Scrum Master with Telstra. 
    On a personal level Dale brings a sense of urgency to technical 
    projects and is willing to take on increasing responsibility in 
    areas of analysis, design, development, deployment and administration.`,
}

export const EXPERIENCE={
    HEADING: 'WORK EXPERIENCE',
    EXPERIENCES: [
        {
            ROLE: 'Salesforce Developer',
            COMPANY_NAME:'Revolent',
            DURATION: 'May 2020 - Present',
            DESCRIPTION: `3 x Salesforce Certified - Administrator / AppBuilder and Platform Developer 1.
            Attained 100+ Trailhead badges, 8 Super badges in 4 months`,
            DESCRIPTION_POINTS: [
                `Developed solutions with Lightning Web Component, ES6, HTML / CSS, VS Code, Salesforce DX and Github while completing 
                the Lightning Web Component Specialist Super Badge`,
                `Performed data management, developed automation through Process Builder and customized Lightning UI with App Builder 
                and Compact Layout while working with the Lightning Experience Specialist Super Badge`,
                `Built reports and dashboards while tackling the Lightning Experience Reports & Dashboards Specialist Super badge`,
                `Configured the right level of access for different profile when attempting the Security Specialist Super badge`,
                `Developed Apex triggers, async methods and classes to fulfil business process automation requirements in Apex 
                Specialist Super badge`,
                `Exposure to Sales Console, Service Console, attempted challenges using Visualforce, Aura and Apex, built Community 
                portals with Salesforce community features while going through Trailhead modules`,
                `Undertaken required professional training to upskill and improve knowledge in latest features in Salesforce`,
            ],
            SUB_EXPERIENCE: {
                HEADING: 'Non-profit client engagement',
                DESCRIPTION_POINTS: [
                    `Analysed and design solutions for an existing Salesforce instance. Run workshops with stakeholders, 
                    wrote business requirement documentation and present output back to client stakeholders`,
                    `Conducted field analysis against a business critical object with over 400 fields, identified 
                    redundant / duplicate fields by leveraging tools such as Workbench and REST API queries`,
                    `Devised data cleansing strategy that effectively and safely prevent redundant and duplicate fields from cluttering the system`,
                    `Created reports that helped client stakeholders visualise how less frequently used fields are populated so that they can make 
                    informed decisions on these fields`,
                    `Performed testing on config changes made in Sandbox before deploy them into production`,
                    `Hosted weekly meetup with client stakeholders to present updates and sought feedback on progress`
                ]
            },
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'LWC',
                    'Visualforce',
                    'APEX',
                    'Aura',
                    'Javascript - ES6',
                    'SOQL / SOSL',
                    'VS Code',
                    'Salesforce DX',
                    'Git'
                ]
            }
        },
        {
            ROLE: 'Application Developer / Scrum Master',
            COMPANY_NAME:'Telstra',
            DURATION: 'Jul 2015 - Nov 2019',
            DESCRIPTION: `Developed and configued various dashboards for operations team. Led technical deliveries in a number of customer
            service improvement and network monitoring enhancement initiatives. 2 x Company Award winner, 3 x Most Valuable Person nominations`,
            DESCRIPTION_POINTS: [
                `Developed a Windows desktop pop up reminder application using Java Swing to remind case manager to call customers on another day. 
                This app was deployed to user Virtual Desktop with zero defects or bugs reported`,
                `Consolidated 50+ dashboard applications (written in Java / PHP / MySQL / PL/SQL ran on top of Ubuntu Linux) into a single 
                location organised by categories. This solution significantly improved mobile operations team’s productivity in managing 
                wireless network issues from a unified user interface. It is still in used today`,
                `Participated in a 3 months revenue generating project as an agile consultant with one of company’s top tier enterprise client 
                to help bootstrapping the new ways of working initiative. Its success become so visible that it later attracted an investment 
                from another large enterprise client on a similar opportunity`,
                `Led a team of 6 software engineers and data scientists to work on a network monitoring enhancement project to build a solution 
                to pin-point approximate location of network outages in near real-time. Project had demonstratable successes in the first few 
                weeks of development based on large data streams (1Tb / day)`,
                `As the face of this network monitoring enhancement project, Dale regularly communicated status to different stakeholders including 
                senior management over various formal settings like showcases, workshops and demonstrations (up to 50+ audiences)`,
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'Java / Swing',
                    'PHP',
                    'MySQL',
                    'PL/SQL',
                    'Bash',
                    'HTML / CSS',
                    'XML',
                    'Eclipse',
                    'SVN',
                ]
            }
        },
        {
            ROLE: 'Analyst Programmer / Technical SME',
            COMPANY_NAME:'National Australia Bank',
            DURATION: 'Feb 2011 - Jul 2015',
            DESCRIPTION: `Developed feature enhancements, performed bug fixes. Administered Intranet and CMS apps. Migrated bank's
            key payment system from legacy to latest technology platform. 3 x Enterprise Recognitions on outstanding performance. 
            1 x Recognition for going above and beyond via participation in company technology innovation initiative`,
            DESCRIPTION_POINTS: [
                `Implemented migration of the bank's institutional payment platform from legacy system (windows server 2003) to latest 
                infrastructure on-demand environment (virtualization) as a risk remediation initiative where Dale was involved in 
                analysis, Java codebase refactoring, troubleshooting problem ticket, oversaw vendor task execution, release management, 
                compliance and testing (Integration, performance and security) support`,
                `Supported the bank’s Intranet application (written in Java) as well as its CMS components to ensure “always on”. Developed 
                feature enhancements in Java and troubleshooted defects as they arise`,
                `Administered the bank’s legal document management system and supported migration of the system to a more strategic platform 
                as a subject matter expert`,
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'Java / J2EE',
                    'SQL Server 2003 / 2008',
                    'DB2',
                    'IBM Websphere',
                    'SFTP',
                    'Two-Factor Authentication / SSL',
                    'Eclipse',
                    'Git',
                ]
            }
        },
        {
            ROLE: 'Software Developer',
            COMPANY_NAME:'Medibank Private Ltd',
            DURATION: 'Sep 2008 - Jan 2011',
            DESCRIPTION: `Designed, developed business productivity support applications for both branch and corporate staff based
            on a proprietary drag-n-drop web development framework. 2 x Enterprise Recognition receiver for outstanding performance`,
            DESCRIPTION_POINTS: [
                `Developed a web form application in one week responsible for helping front-line staff members register customer 
                interactions. This was accomplished through declarative programming over an off-the-shelf vendor platform with 
                minor Java custom coding`,
                `Developed and rolled out an internal request management application (through declarative programming over an 
                off-the-shelf vendor web development platform with some custom Java programming) to help all company employees placing 
                requests for resources to do their job. Type of requests could be anywhere from applying database access to procuring 
                a new hardware.`,
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'Java',
                    'Aviarc',
                ]
            }
        },
    ]
}

export const EDUCATION_DATA={
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: 'EDUCATION',
    LIST: [
        {
            NAME: 'Master of Information Systems',
            UNIVERSITY_NAME: 'The University of Melbourne',
            DURATION: '2009 - 2014'
        },
        {
            NAME: 'Bachelor of Computer Science',
            UNIVERSITY_NAME: 'The University of Melbourne',
            DURATION: '2003 - 2007'
        }
    ]
}

export const AWARDS_DATA={
    ICON: SOCIAL+'/SOCIAL/awards.svg',
    HEADING: 'AWARDS',
    LIST: [
        {
            NAME: 'Executive Director Award - Telstra',
            DESCRIPTION: '3 months consulting project initiating Agile practices in client site with very positive client feedback'
        },
        {
            NAME: 'Director Award - Telstra',
            DESCRIPTION: 'Dedication and effort in the consolidation of 50+ dashboard applications into one unified interface'
        },
        {
            NAME: 'Most Valuable Person - Nomination - Telstra',
            DESCRIPTION: 'Demonstrated leadership capacity / comport. Shown initiative in driving outcome'
        },
        {
            NAME: 'Enterprise Recognition Award - NAB',
            DESCRIPTION: 'Outstanding performance during migration project. Getting stuff done, demonstrated dedication and resilience'
        },
        {
            NAME: 'Enterprise Recognition Award - Medibank',
            DESCRIPTION: 'To recognise the development of a web-based business support application in one week'
        },
    ]
}

export const CERTIFICATION_DATA={
    ICON: SOCIAL+'/SOCIAL/certification.svg',
    HEADING: 'CERTIFICATIONS',
    LIST: [
        {
            NAME: 'Salesforce Administrator'
        },
        {
            NAME: 'Salesforce Platform Developer 1'
        },
        {
            NAME: 'Salesforce Platform App Builder'
        }
    ]
}

export const LANGUAGES_DATA={
    HEADING: 'LANGUAGES',
    LIST: [
        {
            NAME: 'English',
            LEVEL: 'Professional'
        },
        {
            NAME: 'Mandarin',
            LEVEL: 'Native'
        }
    ]
}

export const SKILLS_DATA={
    HEADING: 'SKILLS & TOOLS',
    SKILLS: [
        {
            HEADING: 'FRONTEND',
            SKILLS_LIST: [
                {NAME: 'Javascript(ES6)', LEVEL: '70'},
                {NAME: 'HTML/CSS', LEVEL: '60'},
            ]
        },
        {
            HEADING: 'BACKEND',
            SKILLS_LIST: [
                {NAME: 'Java(6/7/8)', LEVEL: '75'},
                {NAME: 'NodeJS', LEVEL: '50'},
                {NAME: 'PHP', LEVEL: '70'},
                {NAME: 'APEX', LEVEL: '60'},
            ]
        },
        {
            HEADING: 'SALESFORCE',
            SKILLS_LIST: [
                {NAME: 'Lightning Web Component', LEVEL: '60'},
                {NAME: 'Visualforce', LEVEL: '50'},
                {NAME: 'Process Builder', LEVEL: '75'},
                {NAME: 'Lightning Flow', LEVEL: '75'},
                {NAME: 'Workflow Rules', LEVEL: '70'},
                {NAME: 'Reports & Dashboards', LEVEL: '70'},
                {NAME: 'Data Modeling / Management', LEVEL: '70'},
                {NAME: 'Security & Access', LEVEL: '65'},
                {NAME: 'Sales Cloud', LEVEL: '60'},
                {NAME: 'Service Cloud', LEVEL: '50'},
                {NAME: 'Salesforce Community', LEVEL: '60'},
            ]
        },
    ],
    OTHER_SKILLS: {
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            'JUnit 4 & 5',
            'CI/CD - Jenkins / Bitbucket / Maven',
            'Windows Server 2008',
            'Technical Project Management',
            'Stakeholder Management',
            'Github',
            'Jira',
            'Confluence'
        ]
    }
}

export const INTERESTS_DATA={
    HEADING: 'Interests',
    LIST: ['Tackle Coding Challenges', 'Book Reading', 'Sports - Soccer / Basketball']
}