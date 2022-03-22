export default class Customizator {
    constructor() {

    }
    render() {
        this.btnBlock = document.createElement("div");
        this.colorPicker = document.createElement("input");
        let scaleInputS = document.createElement("input");
        let scaleInputM = document.createElement("input");
        let panel = document.createElement("div");
        scaleInputS.classList.add("scale_btn");
        scaleInputM.classList.add("scale_btn");
        this.btnBlock.classList.add("scale");

        this.btnBlock.append(scaleInputS, scaleInputM);

       

        panel.append(this.btnBlock, this.colorPicker);
        panel.classList.add("panel");
        document.querySelector("body").append(panel);
        //console.log(this.btnBlock, scaleInputS, scaleInputM);
    }
}