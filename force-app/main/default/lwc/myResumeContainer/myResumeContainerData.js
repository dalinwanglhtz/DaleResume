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