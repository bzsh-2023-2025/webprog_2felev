import {startCalc} from "./rombusz";
class Rom
{
    sideInput:HTMLInputElement|null;
    alphaInput:HTMLInputElement|null;
    perimeterInput:HTMLInputElement|null;
    areaInput:HTMLInputElement|null;
    calcButton:HTMLButtonElement|null;

    

    constructor()
    {
        this.bindHTML();
        this.handleEvent();
    }

    bindHTML()
    {
        this.sideInput=document.querySelector("#side");
        this.alphaInput=document.querySelector("#alpha");
        this.perimeterInput=document.querySelector("#perimeter");
        this.areaInput=document.querySelector("#area");
        this.calcButton=document.querySelector("#calcBtn");
    }

    handleEvent()
    {
        this.calcButton.addEventListener("click",()=>{startCalc()});
    }

    

    renderResult(perimeter:number,area:number)
    {
        this.perimeterInput.value=String(perimeter)
        this.areaInput.value=String(area)

        /*if(this.perimeterInput)
            {
                this.perimeterInput.value=String(perimeter)
            }
        if(this.areaInput)
            {
                this.areaInput.value=String(area)
            }*/
    }
}

new Rom();