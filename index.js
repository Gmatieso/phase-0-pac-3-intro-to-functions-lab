function shout(string)
{
    // expected undefined to equal something  probably means return value is missing 
    return string.toUpperCase()

}

function whisper(string)
{
    // returns string to lower case 
    return string.toLowerCase()
}

function logShout(string)
{
    
console.log(string.toUpperCase())
  
}

function logWhisper(string)
{
    
console.log(string.toLowerCase())
  
}

function sayHiToHeadphonedRoommate(string)
{

    if (string === string.toLowerCase){

        return  "I can't hear you";
    }
    if (string === string.toUpperCase){

        return  "YES INDEED!";
    }
    if (string === "Let's have dinner together!"){

        return "I would love to!";
    }

}