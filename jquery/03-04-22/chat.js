$(document).ready( ()=> {
    $("form").submit((ev)=>{
        // your code goes here
        // create msg in msg box. Contains: "Me: " and text from input box
        // clear input box and focus it
        ev.preventDefault();
        console.log("submit");

        let msg = $("<div>");
        msg.addClass("msg");
        msg.text("Me: " + $("#chatmsg").val());
        $("#chatbox").append(msg);

        $("#chatmsg").val("");
        $("#chatmsg").focus();
        return false;
    });
});