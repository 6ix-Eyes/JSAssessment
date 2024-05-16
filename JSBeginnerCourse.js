// create a variable to hold your NFT's
let arcaNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_fpsGame, _agentName, _country, _role, _ultimateAbility) {
    const NFT = {
        "fps": _fpsGame,
        "agent": _agentName,
        "country": _country,
        "role": _role,
        "ability": _ultimateAbility
    }
    arcaNFTs.push(NFT);
    console.log("Agent Locked: " + _agentName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < arcaNFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("FPS: \t\t" + arcaNFTs[i].fps);
        console.log("Agent: \t\t" + arcaNFTs[i].agent);
        console.log("Country: \t" + arcaNFTs[i].country);
        console.log("Role: \t\t" + arcaNFTs[i].role);
        console.log("Ultimate: \t" + arcaNFTs[i].ability);
        console.log("-----------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs: " + arcaNFTs.length);
}

// call your functions below this line
mintNFT("Valorant", "Jett", "South Korea", "Duelist", "BladeStorm");
mintNFT("Valorant", "Sova", "Russia", "Initiator", "Hunter's Fury");
mintNFT("Valorant", "Cypher", "Morocco", "Sentinel", "Neural Theft");
mintNFT("Valorant", "Clove", "Scotland", "Controller", "Not Dead Yet");
mintNFT("Valorant", "Neon", "Philippines", "Duelist", "Overdrive");
listNFTs();
getTotalSupply();
