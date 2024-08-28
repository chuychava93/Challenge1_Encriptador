function ConvertEcrypt()
{
    var myTextMessage = document.getElementById("Txt_Ingreso").value;
    if(DetectError(myTextMessage) == true)
    {
        //Replace = remplazo
        const ReturnMessage = myTextMessage
        .replace(/i/g, "sndp")
        .replace(/a/g, "zlvf")
        .replace(/e/g, "cmgj")
        .replace(/o/g, "bjnmw")
        .replace(/u/g, "rmqnf");
        TextResultSave(ReturnMessage);
    }
}
function ConvertDecrypt()
{
    var myTextMessage_Decrypt = document.getElementById("Txt_Ingreso").value;
    if(DetectError(myTextMessage_Decrypt) == true)
    {
        //Replace = remplazo
        const ReturnMessage_Decrypt = myTextMessage_Decrypt
        .replace(/sndp/g, "i")
        .replace(/zlvf/g, "a")
        .replace(/cmgj/g, "e")
        .replace(/bjnmw/g, "o")
        .replace(/rmqnf/g, "u");
        TextResultSave(ReturnMessage_Decrypt);
    }
}
function CopyandPage()
{
    const myTextCopy = document.getElementById('Txt_Resultado');
    //Este comando cumple una funcion parecida al "ctrl+C"
    navigator.clipboard.writeText(myTextCopy.value)
}
function TextResultSave(MyNew_Message)
{
    document.getElementById("Txt_Ingreso").value = '';
    document.getElementById("Txt_Resultado").value = '';
    document.getElementById("Txt_Resultado").value = MyNew_Message;
}
function DetectError(myTextMessageOri)
{
    if(myTextMessageOri == "")
    {
        alert("No deje vacio la caja de texto!")
        return false;
    }
    else
    {
        return true;
    }
}

