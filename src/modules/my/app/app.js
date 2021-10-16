import { LightningElement } from 'lwc';
export default class ButtonBasic extends LightningElement 
{
    clickedButtonTitle;

    handleClick(event) 
    {
        this.clickedButtonTitle = event.target.title;
    }

    underage = false;

    handleChange(event) {
        this.underage = event.target.checked;
    }
}
