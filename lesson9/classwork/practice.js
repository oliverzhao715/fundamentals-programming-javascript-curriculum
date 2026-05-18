// Problem 1
// Use a while loop to print the numbers from 1 to 7 (inclusive).
let a = 1;
while (a < 8) {
    console.log(a)
    a = a+ 1;
}


// Problem 2
// Use a while loop to count down from 3 to -3 (inclusive), printing each number.
// Functional core that evaluates the target status
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Combat Range Simulator</title>
    <style>
        body { font-family: monospace; background: #121212; color: #00ff00; text-align: center; padding: 20px; }
        .box { border: 2px solid #00ff00; padding: 20px; display: inline-block; text-align: left; background: #1e1e1e; border-radius: 8px; max-width: 400px; width: 100%; }
        button { background: #00ff00; color: #121212; border: none; padding: 10px 15px; font-weight: bold; cursor: pointer; font-family: monospace; margin: 5px 0; width: 100%; text-align: left; }
        button:hover { background: #00cc00; }
        .log { margin-top: 15px; border-top: 1px dashed #00ff00; padding-top: 10px; color: #ffffff; min-height: 50px; }
    </style>
</head>
<body>

    <h1>=== BOSS BATTLE ===</h1>
    <div class="box">
        <h3 id="boss-stats">Boss Distance: 60m | Boss HP: ❤️ 100</h3>
        <h3 id="player-stats">Your HP: ❤️ 50</h3>
        <hr style="border-color:#00ff00;">
        
        <button id="btn-gun">🔫 Fire Gun (Ammo: <span id="gun-ammo">10</span>)</button>
        <button id="btn-grenade">💣 Toss Grenade (Ammo: <span id="grenade-ammo">3</span>)</button>
        <button id="btn-skip">🛡️ Hold Position</button>
        
        <div class="log" id="combat-log">Battle Started! The boss is closing in...</div>
    </div>

    <script>
        // Game State Variables
        let bossDistance = 60;
        let bossHP = 100;
        let playerHP = 50;
        let gunAmmo = 10;
        let grenadeAmmo = 3;

        // UI Element References
        const bossStatsEl = document.getElementById('boss-stats');
        const playerStatsEl = document.getElementById('player-stats');
        const gunAmmoEl = document.getElementById('gun-ammo');
        const grenadeAmmoEl = document.getElementById('grenade-ammo');
        const combatLogEl = document.getElementById('combat-log');

        function updateUI() {
            bossStatsEl.innerText = "Boss Distance: " + bossDistance + "m | Boss HP: ❤️ " + bossHP;
            playerStatsEl.innerText = "Your HP: ❤️ " + playerHP;
            gunAmmoEl.innerText = gunAmmo;
            grenadeAmmoEl.innerText = grenadeAmmo;
        }

        function playerAction(choice) {
            // Stop processing if game is already over
            if (bossHP <= 0 || playerHP <= 0) return;
            
            let logText = "";

            if (choice === 'gun') {
                if (gunAmmo <= 0) {
                    alert("Out of gun ammo!");
                    return;
                }
                gunAmmo--;
                if (bossDistance <= 40) { 
                    bossHP -= 15; 
                    logText += "💥 HIT! Gun dealt 15 dmg. "; 
                } else { 
                    logText += "💨 MISS! Gun out of range. "; 
                }
            } 
            else if (choice === 'grenade') {
                if (grenadeAmmo <= 0) {
                    alert("Out of grenades!");
                    return;
                }
                grenadeAmmo--;
                if (bossDistance <= 25) { 
                    bossHP -= 35; 
                    logText += "💥 BOOM! Grenade dealt 35 dmg. "; 
                } else { 
                    logText += "💨 MISS! Grenade out of range. "; 
                }
            } 
            else if (choice === 'skip') {
                logText += "🛡️ Held position. ";
            }

            // Boss turn logic
            if (bossHP > 0) {
                let move = Math.floor(Math.random() * 10) + 5;
                bossDistance = bossDistance - move;
                if (bossDistance < 0) bossDistance = 0;
                
                logText += "<br>👹 Boss rushed " + move + "m closer!";
                
                if (bossDistance === 0) {
                    playerHP -= 20;
                    logText += "<br>💀 Boss hit you for 20 damage!";
                }
            }

            // Win / Loss evaluation
            if (bossHP <= 0) {
                bossHP = 0;
                logText += "<br>🎉 VICTORY! Boss destroyed!";
            }
            if (playerHP <= 0) {
                playerHP = 0;
                logText += "<br>💀 GAME OVER! You died.";
            }

            combatLogEl.innerHTML = logText;
            updateUI();
        }

        // Attach modern click listeners to prevent browser execution blocks
        document.getElementById('btn-gun').addEventListener('click', function() { playerAction('gun'); });
        document.getElementById('btn-grenade').addEventListener('click', function() { playerAction('grenade'); });
        document.getElementById('btn-skip').addEventListener('click', function() { playerAction('skip'); });
    </script>
</body>
</html>




// Problem 3
// Ask the user to input a number less than 50.
// Use a while loop to print numbers starting from that number, going up by 2 each time, until you reach 50 (inclusive).



// Problem 4
// Ask the user to input a number.
// Use a while loop to count down by 3 each time until you reach 0 or less (inclusive).



// Problem 5
// Use a while loop to print each element in the list.
