import SOCIAL from "@salesforce/resourceUrl/SOCIAL";
import dwang_photo from '@salesforce/resourceUrl/dwang';

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
    DESCRIPTION: 'Some descriptions ...',
    KEY_POINTS: [
        "Key point 1",
        "Key point 2",
        "Key point 3",
        "Key point 4"
    ]
}

export const EXPERIENCE={
    HEADING: 'WORK EXPERIENCE',
    EXPERIENCES: [
        {
            ROLE: 'Salesforce Developer',
            COMPANY_NAME:'Revolent',
            DURATION: 'May 2020 - Present',
            DESCRIPTION: 'Ceritified Salesforce Developer ...',
            DESCRIPTION_POINTS: [
                'Responsibility and achievement 1',
                'Responsibility and achievement 2',
                'Responsibility and achievement 3',
                'Responsibility and achievement 4',
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'Java',
                    'APEX',
                    'LWC',
                    'Javascript',
                    'Visualforce'
                ]
            }
        }
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
            NAME: 'Executive Director Award',
            DESCRIPTION: '3 months consulting project initiating Agile practices in client site'
        },
        {
            NAME: 'Director Award',
            DESCRIPTION: 'Delivery of Mobile Flight Deck ...'
        }
    ]
}

export const CERTIFICATION_DATA={
    ICON: SOCIAL+'/SOCIAL/certification.svg',
    HEADING: 'Certifications',
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
    HEADING: 'Languages',
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