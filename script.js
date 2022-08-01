function ServiceProviderChecker() {
    const networkProviderStore = {
        "mtn": [
            '0803', '0806', '0703', '0706',
            '0813', '0816', '0810', '0814',
            '0903', '0906',
        ],
        "airtel": [
            '0802', '0808', '0708',
            '0812', '0701', '0902',
        ],
        "glo": [
            '0805', '0807', '0705',
            '0815', '0811', '0905',
        ],
        "etisalat": ['0809', '0818', '0817', '0909',]
    };
    const getNetworkProvider = (first4Num) => {
        const networkProviders = Object.keys(networkProviderStore);
        for (let i = 0; i < networkProviders.length; i++) {
            const networkProvider = networkProviders[i];
            const numbersProvidedByNetwork = networkProviderStore[networkProvider];
            const isNumberProvided = numbersProvidedByNetwork.some(num => num === first4Num);

            if (isNumberProvided) return networkProvider;
        }

        return null;
    };
    const isNetworkProviderNumber = (first4Num, networkProvider) => {
        const numbersProvidedByNetwork = networkProviderStore[networkProvider];
        const isNumberProvided = numbersProvidedByNetwork.some(num => num === first4Num);

        return isNumberProvided;
    };
    const getFirst4Num = (phoneNumber) => {
        const firstChar = phoneNumber[0];
        const isLongEnough = firstChar === '+' ? phoneNumber.length >= 8 : phoneNumber.length >= 4;
        const isValiedFirstChar = firstChar === '+' || firstChar === '0';
        if (!isLongEnough || !isValiedFirstChar) return null;

        let cleanNum = phoneNumber;
        if (firstChar === '+') {
            cleanNum = phoneNumber.replace('+234', '');
        }

        cleanNum = cleanNum[0] == '0' ? cleanNum : `0${cleanNum}`;
        return cleanNum.slice(0, 4);
    };

    const form = document.getElementById("form1")

    return {
        getNetworkProvider,
        getFirst4Num,
        isNetworkProviderNumber,
    }
};
function DOMWorker() {
    const networkColours = {
        "mtn": "#f7eb07",
        "airtel": "#ed2d2d",
        "glo": "#249c17",
        "etisalat": "#799c17"
    }
    const networkLogoIds = {
        "mtn": "mtnLogo",
        "airtel": "airLogo",
        "glo": "gloLogo",
        "etisalat": "etiLogo"
    }
    // const networkSelect = document.getElementById("network");
    const changeNetworkStyle = (networkProvider) => {
        // Display logo
        const networkProviderList = Object.keys(networkLogoIds);
        networkProviderList.forEach((network) => {
            let networkLogoElement = document.getElementById(networkLogoIds[network]);
            if (network === networkProvider) {
                networkLogoElement.style.display = 'block';
            } else {
                networkLogoElement.style.display = 'none';
            }
        });

        // Set border Colour
        document
            .getElementById('form1')
            .style.boxShadow = `5px 5px 10px 10px ${networkColours[networkProvider] || 'white'}`;

        // Set team background Colour
        document
            .querySelectorAll('.team')
            .forEach((teamBg) => {
                teamBg.style.backgroundColor = networkColours[networkProvider] || 'white';
            });
    };

    return {
        // networkSelect,
        changeNetworkStyle,
    }
};
const domInit = () => {
    const domWorker = DOMWorker();
    const phoneNumberInput = document.getElementById("universal");
    phoneNumberInput.addEventListener('input', (e) => {
        const phoneNumber = e.target.value;
        const s = ServiceProviderChecker();
        const first4Num = s.getFirst4Num(phoneNumber);
        if (!first4Num) return;

        // if (domWorker.networkSelect.value === '') {
        const networkProvider = s.getNetworkProvider(first4Num);
        if (!networkProvider) alert("We don't have your network. Go and meet Cherish to help you.");
        else domWorker.changeNetworkStyle(networkProvider);
        // } else {
        //     const networkProvider = domWorker.networkSelect.value;
        //     const isValidNumber = s.isNetworkProviderNumber(first4Num, networkProvider);

        //     if (!isValidNumber) alert("Shey we warned you to go and meet Cherish!!!");
        // }
    });
    document
        .getElementById('form1')
        .addEventListener('reset', (e) => {
            domWorker.changeNetworkStyle('s');
        })
};
/**
 * @todo The logo-- done.
 * @todo The pattern validation-- change restriction to Etisalat pattern.
 * @todo Team background ---- done.
 * @todo Adjust the team text
*   teamtext= document.querySelectorAll(".teamtext");
    teamtext.style.color= "black";
    teamhead= document.querySelectorAll(".teamhead");
    teamtext.style.color="black";

 *
 * @todo Suggestion Thingy
 * @
 */


//  Airtel - rgba (237, 45, 45, 1)
// glo. 41, 156, 23
// etisalat. 121, 156, 23

