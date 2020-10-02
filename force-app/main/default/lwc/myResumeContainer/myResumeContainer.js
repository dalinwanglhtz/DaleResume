import { LightningElement } from 'lwc';
import * as RESUME_DATA from './myResumeContainerData';


export default class MyResumeContainer extends LightningElement {
    HEADER_BACKGROUND = RESUME_DATA.HEADER_BACKGROUND;
    PROFILE_IMAGE = RESUME_DATA.PROFILE_IMAGE;
    SOCIAL_LINKS = RESUME_DATA.SOCIAL_LINKS;
    RESUME_DATA = RESUME_DATA;

    get getBackgroundImage() {
        return `background-image: url(${this.HEADER_BACKGROUND})`;
    }
}