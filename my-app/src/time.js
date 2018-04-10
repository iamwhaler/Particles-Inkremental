
export let assetsInfo = function(player, strings, protons) {

         var html = `
        <div>
            <span> Strings: ${player[strings]} </span>
            <span> Protons: ${player[protons]} </span>

        </div>
            `;
            return html;
    
    }
    
