let Widths = document.getElementById("styleWidth");
let Heights = document.getElementById("styleHeight");
let Size = document.getElementById("styleSize");
let Weight = document.getElementById("styleWeight");
let BgColor = document.getElementById("styleBg");
let Colors = document.getElementById("styleColor");
let BorderR = document.getElementById("styleBr");
let BorderC = document.getElementById("styleBc");
let CustomBtn = document.getElementById("customBtn");

function onSubmit(){
    let widthEl = parseInt(Widths.value);
    let heightEl = parseInt(Heights.value);
    let sizeEl = parseInt(Size.value);
    let weightEl = parseInt(Weight.value);
    let bgEl = BgColor.value;
    let colorEl = Colors.value;
    let brEl = parseInt(BorderR.value);
    let bcEl = BorderC.value;
    CustomBtn.style.color = colorEl;
    CustomBtn.style.height = heightEl + "px";
    CustomBtn.style.fontSize = sizeEl + "px";
    CustomBtn.style.fontWeight = weightEl;
    CustomBtn.style.width = widthEl + "px";
    CustomBtn.style.backgroundColor = bgEl;
    CustomBtn.style.borderRadius = brEl + "px";
    CustomBtn.style.borderColor = bcEl;
}

function onReset(){
    Widths.value = "";
    Heights.value = "";
    Size.value = "";
    Weight.value = "";
    BgColor.value = "";
    Colors.value = "";
    BorderR.value = "";
    BorderC.value = "";
    CustomBtn.style.color = "";
    CustomBtn.style.height = "";
    CustomBtn.style.width = "";
    CustomBtn.style.fontSize = "";
    CustomBtn.style.fontWeight = "";
    CustomBtn.style.backgroundColor = "";
    CustomBtn.style.borderRadius = "";
    CustomBtn.style.borderColor = "";
}