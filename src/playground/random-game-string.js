const str =
    'Play {gameName}; Session {gameNum}; Result {gameResult}; Bet  {gateCode} {betAmt}, {gateCode}  {betAmt}, {gateCode}  {betAmt}, {gateCode}  {betAmt} , {gateCode}  {betAmt}; Receive {gateCode}  {winAmt}, {gateCode}  {winAmt}, {gateCode}  {winAmt}, {gateCode}  {winAmt}, {gateCode}  {winAmt}; Tax {taxAmt}';

//const realData = "Play Xoc Dia Pixi Mini; Session #0283713; Result 1,1,2,2:1; Bet EVEN 2000, ODD 3000; Receive EVEN 4000, ODD 0; Tax 1000";
const realData = "Play Xoc Dia Pixi Mini; Session #0283713; Result 1,1,2,2:1; Bet EVEN 2000, ODD 2000, WHITE4 2000, RED4 2000, RED3_WHITE1 2000; Receive EVEN 4000, ODD 0, WHITE4 0, RED4 0, RED3_WHITE1 0; Tax 40";
// console.log(str.split('{gameName}'));

// console.log(realData.match(/Play/));
function reformatGameString1(gameString, arrTypes = []) {
    const result = {};

    if (arrTypes.includes('Play')) {
        // Extract game name
        const gameNameMatch = gameString.match(/Play (.+?);/);
        const gameName = gameNameMatch ? gameNameMatch[1] : null;
        result[gameName] = gameName;
    }

    if (arrTypes.includes('Session')) {
        // Extract session number
        const gameNumMatch = gameString.match(/Session (#\d+);/);
        const gameNum = gameNumMatch ? gameNumMatch[1] : null;
        result[gameNum] = gameNum;
    }

    if (arrTypes.includes('Result')) {
        // Extract result
        const resultMatch = gameString.match(/Result ([^;]+);/);
        const result = resultMatch ? resultMatch[1] : null;
        result[result] = result;
    }

    if (arrTypes.includes('Bet')) {
        // Extract bets
        const betsMatch = gameString.match(/Bet\s+([^;]+);/);
        const betsString = betsMatch ? betsMatch[1] : null;
        const bets = [];
        if (betsString) {
            const betPairs = betsString.split(', ');
            betPairs.forEach(pair => {
                const [gateCode, betAmt] = pair.split(' ');
                bets.push({ gateCode, betAmt: parseInt(betAmt, 10) });
            });
        }

        result[bets] = bets;
    }

    if (arrTypes.includes('wins')) {
        // Extract wins
        const winsMatch = gameString.match(/Receive\s+([^;]+);/);
        const winsString = winsMatch ? winsMatch[1] : null;
        const wins = [];
        if (winsString) {
            const winPairs = winsString.split(', ');
            winPairs.forEach(pair => {
                const [gateCode, betAmt] = pair.split(' ');
                wins.push({ gateCode, betAmt: parseInt(betAmt, 10) });
            });
        }

        result[wins] = wins;
    }

    if (arrTypes.includes('Tax')) {
        // Extract tax
        const taxMatch = gameString.match(/Tax\s+([^;]+)$/);
        const tax = taxMatch ? parseInt(taxMatch[1], 10) : null;
        result[tax] = tax;
    }

    // Return the formatted object
    return result;
}

console.log(reformatGameString1(realData), ['Play', 'Session', 'Result']);


function reformatGameString(gameString, elementsParse = []) {
    const data = {};
    elementsParse.forEach(item => {
        let result = null;
        const addRegex = elementsParse.at(-1) !== item ? ';' : '$';
        const verifyListData = gameString.match(new RegExp(`${item} (.+?)${addRegex}`));
        const isListData = Object.keys(verifyListData).length > 3 && ['ODD', 'EVEN'].some(el => verifyListData[1].indexOf(el) > -1);

        if (isListData) {
            // Extract list
            const listPattern = new RegExp(`${item}\\s+([^;]+)${addRegex}`);
            const listMatch = gameString.match(listPattern);
            const listString = listMatch ? listMatch[1] : null;
            const list = [];
            if (listString) {
                const pairs = listString.split(', ');
                pairs.forEach(pair => {
                    const [gateCode, betAmt] = pair.split(' ');
                    list.push({ gateCode, betAmt: parseInt(betAmt, 10) });
                });
            }
            result = list;
        } else {
            // Extract string
            const gamePattern = new RegExp(`${item} (.+?)${addRegex}`);
            const gameMatch = gameString.match(gamePattern);
            const gameValue = gameMatch ? gameMatch[1] : null;
            result = isNaN(gameValue) ? gameValue : parseInt(gameValue, 10);
        }

        data[item.split(' ').join('_').toLowerCase()] = result;
    })

    return data;
}

{
    const realData = "Play Xoc Dia Pixi Mini; Session #0283713; Result 1,1,2,2:1; Bet EVEN 2000, ODD 2000, WHITE4 2900, RED4 5000, RED3_WHITE1 93873; Receive EVEN 4000, ODD 0, WHITE4 0, RED4 0, RED3_WHITE1 1; Tax 40";
    console.log(realData)
    console.log('Parse Data => ', reformatGameString(realData, ['Play', 'Session', 'Bet', 'Receive', 'Tax']));
}
{
    console.log('\n======================================================================')
    const realData = "Play Xoc Dia Pixi Mini; Session #0283713; Adding Bet ODD 1000";
    console.log(realData)
    console.log('Parse Data => ',reformatGameString(realData, ['Play', 'Session', 'Adding Bet']));
}
